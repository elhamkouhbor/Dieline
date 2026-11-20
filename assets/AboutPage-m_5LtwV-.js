import{u as o,j as e,L as r,t as n,a as c,B as i,b as s}from"./index-D1VSvhUB.js";const l=`MIT License

Copyright (c) 2026 Pradeep Siddappa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Generated output: die-line files you create with this software (PDF, SVG, DXF
exports) belong to you. Use them for personal or commercial work; no
attribution is required.
`,d=`# Third-Party Notices — Elham Dieline Creator

## Die Cut Studio (MIT)

The construction models (\`src/core/models/*\`), geometry helpers (\`src/core/geometry.ts\`, \`src/core/features.ts\`, …)
and the fold engine (\`src/core/fold/*\`) are taken from Die Cut Studio at commit
\`3584baa4ac5d1e213a92a79b60622564518955ec\`, copyright (c) 2026 Pradeep Siddappa, licensed under the MIT
License. The full license is retained in [LICENSE](LICENSE). Interface, branding, help, internationalisation,
autosave and deployment code come from Elham Fold Studio (a fork of Die Cut Studio, same license).

## Runtime libraries

- React, React DOM — MIT, copyright Meta Platforms, Inc. and affiliates.
- three.js — MIT, copyright 2010–2026 three.js authors.
- pdf-lib — MIT, copyright 2019 Andrew Dillon.
- polygon-clipping 0.15.7 — MIT, copyright 2018 Mike Fogel.
- lucide-react — ISC, copyright Lucide Contributors.
- dxf-parser 1.1.2 — MIT, copyright 2015 GDS Storefront Estimating (loaded only when a DXF file is imported).

## Elham Fold Studio import pipeline

\`src/import/*\` (SVG sanitizer, structural extraction, line-soup → panel graph, fold rig and fold proposal) is
copied from Elham Fold Studio (same authors; MIT, building on Die Cut Studio's fold engine). Free drawings
and imported files are analysed with it.

## Design references (no code copied)

- PackBox Studio \`3b1b33e\` (MIT), packaging-dieline-generator \`f14d352\` (MIT), SVGnest \`1248dc2\` (MIT):
  ideas only (box-builder architecture, net-area and caliper handling, nesting approach).
- OpenDieline \`1719903\` (no license) and boxes.py \`707c1d6\` (GPL-3.0): conceptual references only.
- Maker.js (Apache-2.0) and Paper.js (MIT) were evaluated and not used. See docs/OPEN_SOURCE_RESEARCH.md.

## Development-only tools (not shipped)

linkedom (ISC), playwright-core (Apache-2.0), esbuild (MIT), TypeScript (Apache-2.0),
Vite (MIT). Elham Fold Studio's SVG import pipeline is used by the local test suite only.
`,h=[{name:"React / React DOM",license:"MIT",note:s("user interface")},{name:"three.js",license:"MIT",note:s("3D preview")},{name:"pdf-lib",license:"MIT",note:s("PDF export")},{name:"polygon-clipping",license:"MIT",note:s("sheet layout collision checks")},{name:"lucide-react",license:"ISC",note:s("icons")},{name:"dxf-parser",license:"MIT",note:s("DXF import")}];function u({onNavigate:t}){return o(),e.jsxs("div",{className:"about-page",children:[e.jsxs("header",{className:"about-head",children:[e.jsx("button",{className:"link-btn",onClick:()=>t("/"),"aria-label":n("Back to the workspace"),children:e.jsx(r,{})}),e.jsxs("span",{className:"about-actions",children:[e.jsx(c,{className:"btn"}),e.jsx("button",{className:"btn",onClick:()=>t("/"),children:n("Back to the workspace")})]})]}),e.jsxs("main",{className:"about-main",children:[e.jsx("h1",{children:n("About {name}",{name:i.name})}),e.jsx("p",{className:"lead",children:n(i.description)}),e.jsxs("section",{className:"about-card",children:[e.jsx("h2",{children:n("Privacy")}),e.jsx("p",{children:n("Everything happens in this browser tab. Your projects are never uploaded: there is no server, no account, no analytics and no AI service. Projects are saved as {ext} files on your own device and autosaved in this browser.",{ext:i.projectExtension})})]}),e.jsxs("section",{className:"about-card",children:[e.jsx("h2",{children:n("What the checks mean")}),e.jsx("p",{children:n("Dielines are generated from geometric construction rules and checked automatically. The checks cannot prove that a package can be manufactured on your equipment with your board: always make and test a physical sample before production.")})]}),e.jsxs("section",{className:"about-card",children:[e.jsx("h2",{children:n("Sister application")}),e.jsxs("p",{children:[n("Export an SVG for Fold Studio and fold it, add artwork and finishes in {name}.",{name:i.sister.name})," ",e.jsx("a",{href:i.sister.url,target:"_blank",rel:"noopener noreferrer",children:i.sister.url})]})]}),e.jsxs("section",{className:"about-card",id:"licenses",children:[e.jsx("h2",{children:n("Open-source licenses")}),e.jsx("p",{children:n("{name} uses construction models and the fold engine of Die Cut Studio (MIT). Its license notice is reproduced below as the license requires.",{name:i.name})}),e.jsx("pre",{className:"license-text",lang:"en",children:l}),e.jsx("h3",{children:n("Libraries in this application")}),e.jsx("ul",{children:h.map(a=>e.jsxs("li",{children:[e.jsx("b",{children:a.name})," — ",a.license," (",n(a.note),")"]},a.name))}),e.jsx("h3",{children:n("Third-party notices")}),e.jsx("pre",{className:"license-text",lang:"en",children:d})]}),e.jsx("p",{className:"muted",children:n("Version {v}",{v:i.version})})]})]})}export{u as AboutPage};
