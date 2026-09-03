# Third-Party Licenses

`@zephyrex/ui` is AGPL-3.0-or-later. It incorporates and builds on the
third-party projects below, each of which is free and commercially usable under a
permissive OSI license (MIT / Apache-2.0). Their copyright and permission notices
are retained here as required. No paid, noncommercial, or source-available
(non-OSI) project is bundled — see the `custom-ui-dev` skill for the vetting bar.

## Bundled runtime dependencies

| Package                       | License    | Copyright / Project                                            |
| ----------------------------- | ---------- | -------------------------------------------------------------- |
| `animejs`                     | MIT        | © Julien Garnier — <https://github.com/juliangarnier/anime>    |
| `motion`                      | MIT        | © Motion (Framer) — <https://github.com/motiondivision/motion> |
| `clsx`                        | MIT        | © Luke Edwards — <https://github.com/lukeed/clsx>              |
| `tailwind-merge`              | MIT        | © Dany Castillo — <https://github.com/dcastil/tailwind-merge>  |
| `class-variance-authority`    | Apache-2.0 | © Joe Bell — <https://github.com/joe-bell/cva>                 |
| `@paper-design/shaders-react` | Apache-2.0 | © Paper — <https://github.com/paper-design/shaders>            |
| `@radix-ui/react-label`       | MIT        | © WorkOS/Radix — <https://github.com/radix-ui/primitives>      |
| `@radix-ui/react-separator`   | MIT        | © WorkOS/Radix — <https://github.com/radix-ui/primitives>      |
| `@radix-ui/react-switch`      | MIT        | © WorkOS/Radix — <https://github.com/radix-ui/primitives>      |
| `@radix-ui/react-progress`    | MIT        | © WorkOS/Radix — <https://github.com/radix-ui/primitives>      |

The MIT license text (applies to every MIT entry above and below):

```
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in the
Software without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Vetted component sources (attribution required when a component is vendored in)

When a copy-paste component from one of the sources below is added under
`src/vendor/`, keep this table's entry current and prepend the file with an SPDX
line plus an attribution comment naming the upstream source and its license. These
are the `custom-ui-dev` roster — all confirmed free + commercially usable:

| Source                               | License    | Attribution / URL                                                          |
| ------------------------------------ | ---------- | -------------------------------------------------------------------------- |
| Motion Primitives                    | MIT        | © ibelick — <https://github.com/ibelick/motion-primitives>                 |
| Aceternity UI (free components only) | MIT        | © Manu Arora — <https://ui.aceternity.com/>                                |
| Vengeance UI                         | MIT        | © Ashutosh — <https://github.com/Ashutoshx7/VengenceUI>                    |
| Watermelon UI                        | MIT        | © WatermelonCorp — <https://github.com/WatermelonCorp/watermelon-platform> |
| UIverse                              | MIT        | © the UIverse community — <https://github.com/uiverse-io/galaxy>           |
| ShaderGradient                       | MIT        | © ruucm, stone-skipper — <https://github.com/ruucm/shadergradient>         |
| Tremor                               | Apache-2.0 | © Tremor / Vercel — <https://github.com/tremorlabs/tremor>                 |
| Paper Shaders                        | Apache-2.0 | © Paper — <https://github.com/paper-design/shaders>                        |

For Apache-2.0 sources (Tremor, Paper Shaders): retain any upstream `NOTICE`
content, state significant modifications at the top of the vendored file, and keep
the Apache-2.0 license text alongside. Apache-2.0 is one-way compatible into
AGPL-3.0, so incorporation is clean.

**Never** vendor a paid, noncommercial, or source-available project (Commons
Clause, GreenSock's custom license, BSL, CC-NC). That excludes GSAP, React Bits,
OriginKit, Skiper UI, HorizonX, and Animmaster Lib — deliberately kept out.
