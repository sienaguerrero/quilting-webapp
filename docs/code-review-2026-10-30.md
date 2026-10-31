# quilting-webapp review

Repo: https://github.com/sienaguerrero/quilting-webapp, default branch `main` at `1f126b0` (three commits). Reviewed 2026-10-30. Live site: https://quarterinch.siena.codes/ (GitHub Pages, workflow deploy, HTTPS enforced).

Method: read all 23 tracked files; ran `npm ci` and `npm run build` (webpack 5.106.2, Node 24.17.0); served `dist/` locally and probed it in the Claude desktop browser pane (Chromium). Every "(checked against primary source)" tag below means I read the file, ran the command, or measured it in that browser. "(from memory, unverified)" means I did not.

## Read this first: 15 draft PRs already exist

PRs #2 through #16 on this repo, all draft, all by sienaguerrero, were opened 2026-10-30 between 12:31 and 12:46 PDT, about six and a half hours before this review, and all carry the Claude Code footer (checked against primary source). They cover most of what a review of `main` turns up. Each finding below says which open PR addresses it, or "No PR". I verified the PRs' claims where it was cheap:

- PR #10's four SHAs resolve to the tags named in their comments (checked against primary source via the GitHub API).
- PR #9's branch builds, and `npm audit` on it reports 5 moderate, 0 high, 0 critical, matching its body (checked against primary source).
- PR #2 is necessary but not sufficient for the hero; see C2.
- PR #3's body says nine hero cells are blank; it is twelve (checked against primary source; see C3).

Merge conflicts among the 15 branches, computed with `git merge-tree` for all 105 pairs (checked against primary source): 4 pairs conflict, 101 merge clean.

| Pair | Conflicting files |
|------|-------------------|
| #5 x #8 | `src/sections/quilt-planner.js`, `src/styles/quilt-planner.css` |
| #11 x #12 | `webpack.config.js` |
| #11 x #14 | `webpack.config.js` |
| #12 x #13 | `src/index.html` |

A merge order that only needs three rebases: land the nine independent ones (#2, #3, #4, #6, #7, #9, #10, #15, #16) in any order; then #5, rebase #8; then #13, rebase #12; then #14, rebase #11.

## Correctness

Ranked by severity.

**C1. Golden-ratio grid columns are invalid CSS, so every two-column layout is one column.** `src/styles/main.css:182`, `:334`, `:340`. `var(--phi-inv)fr` substitutes as two tokens, a number and an identifier, not a `<flex>` dimension, so the whole declaration is dropped. Measured on the built site: `.hero` computes to a single `206.914px` track and `.content-split` to `1fr`; the hero quilt grid lands 89px below the hero text instead of beside it (checked against primary source). Fix: define `--phi-inv-fr: 0.618033988749895fr` and use it. Open PR: #2.

**C2. The hero quilt grid collapses to 28 by 28 pixels even once the columns are valid.** `src/styles/main.css:200-207`. `.hero-pattern` has `justify-self: end` and no width, so the grid item is sized to fit-content, and its cells have no intrinsic size. With PR #2's columns applied live, the pattern stayed 28 by 28; adding `width: 100%` made it 400 by 400 with 97px cells (checked against primary source). PR #2's test plan says the grid "sits side by side" with the text, which it will not. Fix: add `width: 100%` (or `width: min(100%, 400px)`) to `.hero-pattern`, ideally inside PR #2. No PR.

**C3. Twelve of the sixteen hero cells are blank.** `src/index.js:71-75`. `buildHeroGrid` sets the class but never calls `buildBlockPattern`, so every builder-backed block (log cabin, nine-patch, pinwheel twice each, Ohio Star, flying geese, sawtooth star, flower garden, bear's paw, drunkard's path) renders as a flat beige square; only the four CSS-drawn Andean blocks show a pattern. Measured: all 16 cells have zero child nodes (checked against primary source). Fix: call `buildBlockPattern(cell, p)` per cell. Open PR: #3 (its body says nine cells; the list has twelve builder-backed entries). Note #3 is only visible once C2 is fixed too.

**C4. Four of eight nav links are unreachable on a phone.** `src/index.html:17-26`, `src/styles/main.css:96-100` and `:583-590`. `.nav-links` is a non-wrapping flex row inside a fixed nav. At 375px wide the links run from x=151 to x=631: Geometry & Math, 17 Wallpaper Groups, Quilt Planner and Glossary sit past the right edge, and because the nav is `position: fixed` the document does not scroll horizontally to reach them (`scrollWidth` 375). The nav also grows to 120px tall, which just fits under the 118.8px section padding (checked against primary source). Fix: at the 768px breakpoint, wrap the links (`flex-wrap: wrap`) or stack the nav, and derive `.section` top padding from the nav height instead of the hard-coded `4rem`. No PR.

**C5. The "CSS Code" snippet on each block page does not draw that block.** `src/sections/block-css-snippets.js` (nine-patch 25-32, flying geese 34-70, pinwheel 72-89, Ohio Star 91-126, drunkard's path 149-173, sawtooth star 175-210, flower garden 212-260). The snippets position background tiles with percentages as if they were offsets, but a percentage `background-position` aligns the image's X% point with the box's X% point, so a 50%-wide tile at `50% 0` lands at 25%, not 50%, and the nine-patch's 33.33% conic tile yields a 6 by 6 checkerboard instead of 3 by 3. I rendered all nine gradient snippets next to the site's own JS-built blocks: seven do not reproduce the block (nine-patch, flying geese, pinwheel, Ohio Star, drunkard's path, sawtooth star, flower garden); log cabin and snail's trail are acceptable, the latter by its own stated two-ring limit (checked against primary source). Cost: the page presents these as the block's CSS, and anyone who copies them gets a different shape. Fix: for N tiles across, positions must be `i / (N-1) * 100%` (two tiles: `0` and `100%`; three: `0`, `50%`, `100%`), the nine-patch tile size must be `66.67%`, and the detail page should render the snippet in a live demo box so drift is visible. No PR.

**C6. A hash no section owns leaves the page blank.** `src/index.js:51-56`. `#nope` or a hand-typed `#block-detail` hides every section with no fallback (checked against primary source, by reading). Fix: fall back to Home for unknown hashes. Open PR: #4.

**C7. Planner grid cells carry the selected block as a ghost class.** `src/sections/quilt-planner.js:630-633` and `:833-844`. Every empty cell gets `quilt-block--<selected>`, so selecting a CSS-drawn block paints all 56 cells as if placed (measured: 56 ghost cells after selecting pinwheel, 55 after chakana), and builders only run while a block is selected (checked against primary source). Fix: class only placed cells; run builders from the plan. Open PR: #5.

**C8. The 60-30-10 counts do not sum to the block total.** `src/sections/quilt-planner.js:328-331`. Independent rounding: 35 blocks shows "21 dominant, 11 secondary, 4 accent", which is 36 (checked against primary source). Fix: largest-remainder rounding. Open PR: #7.

**C9. Every planner interaction rebuilds the panel and discards the reader's state.** `src/sections/quilt-planner.js:511-514`, `:528`, `:714-819`. `render()` replaces `container.innerHTML` on every select change, palette click and cell click. Measured: open the Symmetry Groups and Tessellation `<details>`, click a palette block, and both close again; place a cell, same; change Bed Size from the keyboard and focus lands on `<body>` (checked against primary source). PR #8 restores focus and turns cells into buttons but leaves the `<details>` reset. Fix: render the Math panel only when bed or block size changes (nothing in it depends on the plan), and update the clicked cell in place instead of re-rendering; or persist `open` state the way #8 persists focus. Open PR: #8 (partial).

**C10. Flying geese calculator labels its input as height; the formulas are in terms of width.** `src/sections/quilt-planner.js:196-202`, `:663-665` (checked against primary source, by reading). Open PR: #6.

**C11. Symmetry labels contradict each other across pages.** Planner registry versus block pages: Log Cabin is `D2` at `quilt-planner.js:32` but "bilateral symmetry along its diagonal axis" at `blocks.js:20` (that is D1); Drunkard's Path is `C4` at `quilt-planner.js:86` but "a single unit has no rotational symmetry" at `blocks.js:163`; Step Fret is `D2` at `quilt-planner.js:158` but "translation symmetry only, group p1" at `blocks.js:377-381` (checked against primary source). Cost: the Symmetry Groups table files blocks under groups the block pages deny. Fix: one source of truth, with the planner table derived from the block data. No PR. Low.

**C12. Hover-only tooltips and a clickable span are not keyboard reachable.** `src/styles/main.css:427-456`, `src/sections/history.js:63`, `src/sections/geometry.js:87`, `src/sections/easter-eggs.js:7-15`. The `data-tooltip` text only appears on `:hover`, and the NASA easter egg is a `<span>` with a click handler (checked against primary source). PR #16 covers nav labeling, a skip link, swatch names and reduced motion, not these. Fix: `tabindex="0"` plus a `:focus-visible::after` rule on `.tooltip-trigger`; make the span a `<button>`. No PR. Low.

**C13. Section eyebrows are `<h4>` placed above `<h2>`.** `src/sections/history.js:4` and the other seven section headers (checked against primary source). Open PR: #15.

**C14. Ikat stripe filter may not apply in Safari.** `src/styles/quilt-patterns.css:339` references an SVG filter in a `data:` URI from CSS `filter: url(...)`. WebKit does not apply external SVG filter references from CSS, so the feathered edge would be missing there (from memory, unverified; the browser pane is Chromium and cannot test it). Fix: inline the `<svg><filter id="f">` in `index.html` and reference `url(#f)`. No PR. Low.

## Security

**S1. Actions pinned by mutable major tag in a workflow with `id-token: write` and `pages: write`.** `.github/workflows/pages.yml:12`, `:13`, `:20`, `:39` (checked against primary source). Fix: pin to commit SHAs with the version in a comment. Open PR: #10; its four SHAs resolve to the claimed tags (checked against primary source). Current latest majors are checkout v7.0.1, setup-node v7.1.0, upload-pages-artifact v5.0.0, deploy-pages v5.0.1; #10 pins v4.x and v3.x, which is fine with Dependabot bumping.

**S2. 20 npm advisories in the dev toolchain.** `package-lock.json`. `npm audit` on `main`: 3 critical, 10 high, 7 moderate, all transitive dependencies of webpack-dev-server and the loaders, so they run on the developer's machine and in the CI build, not in the shipped site (checked against primary source). Fix: `npm audit fix` without `--force`, then Dependabot. Open PR: #9; verified its branch builds and audits at 5 moderate, 0 high, 0 critical.

**S3. Dependabot security alerts are off for the repo.** Repo setting, not a file. The GitHub API returns "Vulnerability alerts are disabled" (checked against primary source). PR #9's `dependabot.yml` schedules version updates; alerts and security updates are a separate toggle under Settings, Security, that only Siena can flip. No PR can fix it.

**S4. No `permissions:` block at the top of the workflow.** `.github/workflows/pages.yml:1-7`. The repo default is `read` (checked against primary source via the API), so the build job is read-only today, but that depends on a setting rather than the file. Fix: add `permissions: contents: read` at the top. No PR. Low.

**S5. Nothing protects `main`.** No branch protection and no rulesets (checked against primary source: the API returns "Branch not protected" and an empty ruleset list). The build runs on every PR, but nothing requires it to pass, and a direct push deploys without review. Fix: one ruleset requiring a PR and the `build` check. No PR. Low for a personal site.

**S6. Google Fonts on every visit.** `src/index.html:7-9`. A render-blocking cross-origin stylesheet and a Google log entry per visitor (checked against primary source). Open PR: #12 (self-hosts, 130 KB of WOFF2). See P2 for two files it does not need.

**S7. No Content Security Policy.** GitHub Pages cannot set headers, but a `<meta http-equiv="Content-Security-Policy">` restricting `script-src 'self'` costs nothing once fonts are self-hosted. No PR. Low, optional.

**No injection surface found.** Every `innerHTML` input is a string literal in source; the only URL-derived value, the block id from the hash, is used as a lookup key and never interpolated into markup (`src/index.js:39-43`, `src/sections/blocks.js:501-508`) (checked against primary source).

## Performance

**P1. All CSS ships inside the JS bundle.** `webpack.config.js:13-16` uses `style-loader` in production, so the 164 KiB `bundle.js` is the only asset and styles apply after the script executes: a flash of unstyled content and no parallel CSS fetch (checked against primary source: the build emits `bundle.<hash>.js` and `index.html` only). Fix: `mini-css-extract-plugin` in production. Open PR: #11.

**P2. Two font faces are loaded and never used.** `src/index.html:9` requests Inter 300 and Playfair Display italic. `font-weight: 300` appears nowhere in `src`, and the three `font-style: italic` rules are all on Inter-set text (`main.css:524`, `wallpaper.css:63`, `quilt-planner.css:233`); no `<em>` sits inside a Playfair heading (checked against primary source). PR #12 vendors `playfair-display-italic-latin.woff2` (21 KB) anyway. Fix: drop Inter 300 from the request and the italic file from #12.

**P3. Each planner click rebuilds the whole panel.** `src/sections/quilt-planner.js:516-872`. One click re-creates roughly 300 lines of markup, 16 palette previews (the flower garden builder alone places about a hundred hexagons, bear's paw 49 cells) and up to 56 grid cells, then re-attaches every listener (checked against primary source, by reading; the user-visible symptom is C9). Fix: as in C9, split the Math panel out of the per-click render and patch the clicked cell. No PR.

**P4. Every section renders at startup.** `src/index.js:16-27` builds history, techniques, all 16 gallery blocks, the planner and the glossary before the first route, although only Home is visible (checked against primary source). Fine at this size; render each section on its first visit if the site grows. No PR. Low.

## Cleanup

**K1. Dead CSS and undefined tokens.** `src/styles/quilt-patterns.css:168-208` (`.ss-cell`, `.ss-tri`, `.ss-bg`, `.ss-down`, `.ss-up`, `.ss-right`, `.ss-left`: the sawtooth builder uses `pw-cell` and `pw-tri`; zero references in JS), `src/styles/geometry.css:173-193` (`.symmetry-demo`, `.sym-label`: zero references), `src/styles/quilt-planner.css:48` (`--nav-height` is never defined, so the 60px fallback always applies), `src/sections/quilt-planner.js:531` (`section-intro` has no rule), `src/sections/block-patterns.js:339` (`qb-rendered` has no rule; PR #14 removes it) (checked against primary source). No PR for the rest.

**K2. Duplicated declarations.** `src/styles/main.css:444` and `:449` set `white-space` twice; `src/styles/quilt-patterns.css:20-23` repeats the 240px sizing from `main.css:353-359`; the nine-patch gap and padding are set in CSS (`quilt-patterns.css:60-64`) and again inline from JS (`block-patterns.js:63-64`); bear's paw gap likewise (`quilt-patterns.css:138-140`, `block-patterns.js:147`) (checked against primary source). No PR.

**K3. Duplicated card template and an inline-styled table.** `src/sections/blocks.js:444-454` and `:474-484` are the same card markup twice; `:457-471` is a motif table built entirely from `style=""` attributes (checked against primary source). Fix: one `cardHtml(block)` helper and a `.motif-table` rule. No PR.

**K4. Calculator methods and exports with no caller.** `src/sections/quilt-planner.js:242-258`, `:271-279`, `:295-299`, `:368-374`, `:406-412`, `:476-483`, `:877-883` (checked against primary source). Open PR: #14. Not in #14: the registry fields `gridUnits`, `pieces`, `tessellates` and `trigConcepts` at `:27-172` are never rendered, and `data-block-id` at `blocks.js:445` and `:475` is never read.

**K5. Unused webpack option.** `webpack.config.js:22` passes `title` to HtmlWebpackPlugin but the template hard-codes its own `<title>` (checked against primary source). Open PR: #14.

**K6. Repo hygiene.** No README and no LICENSE in a public repo (`licenseInfo: null`); no `engines` field or `.nvmrc` while CI pins Node 22 and local Node 24 also builds; `.claude/launch.json` is tracked, which is tool-specific config in a public repo, harmless but your call (checked against primary source). No PR.

**K7. No tests.** `TrigCalc`, `YardageCalc`, `LayoutEngine.gridDimensions` and `ColorBalance` are pure functions, and C8 is the kind of bug a ten-line `node:test` file catches; CI runs no tests (checked against primary source). No PR. Low.

**K8. Site copy uses em dashes throughout.** 91 occurrences across nine source files by grep (`blocks.js` 44, `geometry.js` 15, `wallpaper-groups.js` 11, `history.js` 9) (checked against primary source). Your style rule is for your own writing; flagging only because it is yours.

## What to do first

Not covered by any open PR, in order:

1. **Hero width** (C2): one line in `.hero-pattern`; without it PR #2 and PR #3 do not deliver the hero they describe. Fold into #2.
2. **Phone nav** (C4): four of eight pages are unreachable on a phone today.
3. **CSS snippets** (C5): seven of nine educational snippets draw the wrong block.
4. **Planner re-render** (C9, P3): stop rebuilding the Math panel per click; fold into or follow #8.
5. **Dependabot security alerts** (S3): a settings toggle, no PR needed.
6. **Merge order** for the four conflicting PR pairs (table above).

Then the small ones: dead CSS (K1, K2), the duplicated card template (K3), README and LICENSE (K6), `permissions: contents: read` (S4), and trimming the two unused font faces from #12 (P2).
