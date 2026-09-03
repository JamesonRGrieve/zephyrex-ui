// SPDX-License-Identifier: AGPL-3.0-or-later
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';

interface StoryEntry {
  id: string;
  type: string;
  name: string;
  title: string;
}

const indexPath = join(process.cwd(), 'storybook-static', 'index.json');
const stories: StoryEntry[] = existsSync(indexPath)
  ? Object.values((JSON.parse(readFileSync(indexPath, 'utf8')) as { entries: Record<string, StoryEntry> }).entries).filter(
      (entry) => entry.type === 'story',
    )
  : [];

test.describe('story render + interaction smoke', () => {
  for (const story of stories) {
    test(`${story.title} — ${story.name}`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));

      const response = await page.goto(`/iframe.html?id=${story.id}&viewMode=story`);
      expect(response?.status() ?? 500, 'iframe.html should serve the story').toBeLessThan(400);

      await expect(page.locator('#storybook-root')).toBeVisible();
      // Storybook keeps a hidden error overlay in the DOM; it only becomes visible
      // when a render or play-function failure occurs.
      await expect(page.locator('.sb-errordisplay')).toBeHidden();
      expect(errors, `uncaught errors while rendering ${story.id}`).toEqual([]);
    });
  }
});
