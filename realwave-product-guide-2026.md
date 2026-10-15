# Realwave Product Guide — 2026

Agent knowledge for Grok, Grok Build, Grok Bot, Cursor, and Hermes.
Source of truth: the 2026 Realwave site (Edge / Vue / Intelligence / Operate).
Supersedes `productguide.md`, `realwave_productguide4.md`, `realwave_contextguide.md`, and `content-realwave.md`.

If an older file and this file disagree, this file wins. Do not revive retired product names to “match the old guide.”

---

## How to use this file

- Customer-facing copy, proposals, decks, and site edits use the **canonical names** below.
- Answer in outcomes (process while you record, exceptions, one glass), not a SKU catalog.
- Do not invent metrics, customers, or roadmap items that are not in **Facts you may state** or **Do not claim**.
- Shorthand exists only in the legacy map so you can *read* old docs. Do not *write* it.

---

## What Realwave is

Realwave is an intelligent video platform: process the stream while it is recorded, then operate the instance so it does not fall back to a dark recorder.

One line: **Process while you record.**

Parent: **Realwave is a product of ePlus.** The moat is not the camera. It is a thousand customer-facing engineers (Elite 150, CRN 2026 MSP 500) plus the ePlus infrastructure bench (NVIDIA, Nutanix, NetApp, Cisco, Palo Alto). Do not narrate an acquisition story, date, or legal structure beyond that sentence.

Audience: IT, security / GSOC, and operations leaders. Verticals on the site: Retail, Logistics, Transit, Campus, Healthcare, Financial, SLED.

Contact for the 2026 site: **john@realwave.com**. Vue trial / cloud: **https://vue.realwave.io/**. Public site: realwave.io (preview may be a Vercel URL; do not treat a preview URL as the brand domain).

---

## Canonical stack

Four layers. Not four products with a “Real” prefix. Order is fixed.

| Layer | Say | Is | Is not |
|---|---|---|---|
| **Edge** | Where the stream becomes a decision. | Sensors and compute: AI cameras, REX / GPU servers, LiDAR, camera-to-cloud. Inference runs here. | The brains. The operator glass. A mandate to rip out existing cameras. |
| **Vue** | The system operators live in. | Enterprise VMS (Network Optix OEM). Flex GRID, archive, failover, hive, maps, mobile, video wall. Access events (IMRON) on the same timeline. Complete as **video-only**. | A second analytics product. A checkbox you cannot turn off. |
| **Intelligence** | Engineered into the deployment. | The layer designed per site: which models, which POS and access joins, which rules, who updates them. Skillsets: **Track, Face, Plate**. OT fusion: POS, access, rules. | Camera firmware. A VMS feature pack. A frozen detector SKU. |
| **Operate** | Your instance. Watched. | Private instances, hybrid placement, health, notify, archive, per-program dashboards, 24/7. Software + Operate sell to every site. | A shared gadget cloud. A reporting SKU named Insights. Extra SOW hours pretending to be a product. |

Stack sentence: **Process. Unify. Engineer. Operate.**

Why Vue and Intelligence are separate: most installs are video-only, and Vue is complete without Intelligence. Detectors baked into a camera or a server are one-size. Tailored workflows require a layer with its own lifecycle — models, joins, rules — that lands on the **same glass**, not a second client.

Hardware rule: **Hardware is optional. Placement is not.** Bring your own ONVIF cameras. Add Realwave cameras and GPU servers when the use case needs them. Size inference for the busy minute (shift change, refund rush, forced door), not the idle-hour average. An architecture that is fine on average and collapses at peak is still dark data.

---

## Legacy names — read, do not write

| Retired | Maps to | Notes |
|---|---|---|
| RealEdge, REX as a brand family | **Edge** | REX is still a server name inside Edge (edge-to-cloud exchange). Not a fifth product. |
| RealVue | **Vue** | Say “Network Optix OEM” once, as trust. Do not lead with it. |
| RealIntelligence, IQ | **Intelligence** | |
| RealTrack, RealFace, RealPlate | **Track, Face, Plate** | Capabilities under Intelligence. No “Real” prefix. |
| RealInsights, IX, IX Dashboards | **Operate** (dashboards, notify, archive, workflows) plus **Vue** forensic search | Insights is not a layer. Do not call Operate “IX”. |
| RealCloud | Camera-to-cloud, private instances, hybrid placement | Not a product name. Outbound-only path; no port-forward hobby. |
| Professional Services as a fifth pillar | **Operate** | 24/7, health, onboarding, model training, POS/access pipelines live here. |
| Edge + Vue + IQ + IX | Edge, Vue, Intelligence, Operate | Kill the letter codes. **Ops** is the only spoken short form, and only if the room already says “ops.” Never OX, IX, or a checkmark as the name. |

---

## Three jobs

Sell jobs, not six identical industry pages. These are the solution anchors.

1. **Proactive GSOC** — Intrusion, access, aggression, remote verification, forensics. Video is the unifying screen. Track + LiDAR for anonymous 3D detection and video verify. IMRON door events open Vue cameras. Face where policy allows. Forensics is smart motion, bookmarks, metadata search, usable export.
2. **OT exception monitoring** — POS, process, PPE, diversion. Business systems fused with video so an exception is a clip and a transaction. Refund / sweethearting, self-checkout mismatch, PPE and process rules, pharmacy and high-value zones. This is why Intelligence is not a VMS checkbox.
3. **Flow management** — Queues, yards, occupancy, traffic. People and vehicles counted while the site is busy. Time-to-service, dock wait and occupancy, plate and trailer ID against a manifest, privacy-first LiDAR counts, approaches and wrong-way. Not a smart-city poster.

Retail, logistics, transit, campus, healthcare, financial, and SLED are **where** those jobs show up. Do not invent a fourth primary job.

---

## What each layer contains today

### Edge

- AI cameras: 4K, on-device detection when the WAN is thin. Serverless camera-to-cloud is a **placement**, not a mandate. Realwave-branded, NDAA-conscious options, or the cameras already on the wall.
- Servers and GPU: REX and GPU-ready appliances when recording and inference share a box. Sized for peak.
- LiDAR: privacy-first 3D detection for perimeter and occupancy, used with video verify.
- Camera-to-cloud: outbound-only. Small sites can skip a local server. Large sites keep local record-and-process and send what Operate needs.

### Vue

- OEM of Network Optix. Enterprise VMS: Flex GRID (up to 64), failover, hive, maps, LDAP, video wall, one-click updates, native desktop and mobile, web for admin.
- 45,000+ devices, 790+ manufacturers, ONVIF. No rip-and-replace mandate.
- Unified management: IMRON UnityIS (Mercury, dormakaba, open panel list) as events on the Vue timeline.
- Feature groups operators actually use: install, live, record, review, rules, users, mobile, health, developers. Prefer that grouping over a long feature dump.
- Trial: 30-day, vue.realwave.io.

### Intelligence

Video AI, now:

- **Track** — people, vehicles, loitering, bags, direction, dwell, zones. GSOC and flow workhorse.
- **Face** — watchlists and attributes on the Vue glass, where policy allows. Demographics fused with POS only carefully.
- **Plate** — LPR, trailer, and container IDs.

OT fusion, now:

- **POS** — 167+ systems. Named on the site: Micros, Aloha, Radiant, Ruby, Gilbarco, Sicom, PAR.
- **Access** — IMRON; door events on the same timeline as video.
- **Rules** — exception workflows that bookmark, notify, and escalate. Not a detector demo.

Standard models are part of the Intelligence engagement. Custom model training is scoped work under Operate, not a surprise SKU.

### Operate

- **Private instances** — dedicated, not a shared tenancy. For finance, healthcare, campus, and anyone who will not put video on a one-size public cloud.
- **Hybrid placement** — edge, customer data center, or cloud, per workflow. Some detection stays on the camera. Some correlation stays on campus. Some reporting bursts to cloud.
- **Health, notify, archive** — pipeline lag, dropped inference, storage saturation, model drift. Alerts to the people who own the exception. Archive that still processes, not a cold tape.
- **Dashboards, honestly** — KPI boards exist and are built per program (sales, loyalty, exceptions, occupancy). The out-of-box board is not the product. Do not sell “IX Dashboards beta.”
- **Pricing** — per channel, not per seat. Monthly, annual, or 3-year. Reseller program. Quotes are scoped. No public rate card.

---

## Facts you may state

Attribute them. Do not round them into a bigger claim.

| Fact | Attribution |
|---|---|
| 45,000+ supported devices, 790+ camera manufacturers | Network Optix / Vue compatibility, not a Realwave-only catalog |
| 5 million cameras on the Nx platform | **Network Optix figure, not a Realwave installed base.** The old “4 million cameras” line is retired. |
| 167+ POS integrations | Intelligence library. Only name Micros, Aloha, Radiant, Ruby, Gilbarco, Sicom, PAR unless a newer list is provided. |
| Plate and container ID 99%; trailer ID 95% | Production use, not a lab slide |
| LiDAR + video: up to 80% fewer false alarms | LiDAR-plus-video deployments only. Do not generalize to “80% less scrubbing.” |
| ~1,000 customer-facing engineers; Elite 150, CRN 2026 MSP 500 | ePlus Operate story |
| Public logos on the 2026 site | County of San Diego, New Jersey Turnpike Authority, Exxon, Robbinsville Public Schools |

Verbal-only references from the prior guide (do **not** put on a slide or a webpage unless the user explicitly clears them): Yesway, Famous Footwear, FedEx. Exxon moved to the public logo set. Spirit Airlines appeared in the 2025 guide and is **not** on the 2026 site — do not volunteer it.

---

## Partners (open stack)

Say them as the open stack, not as a logo wall that implies exclusivity.

- Platform: Network Optix
- Cameras: Axis, Hanwha, Digital Watchdog (and BYO ONVIF)
- Sensors: Quanergy
- Compute: NVIDIA, Velasea
- Analytics engines used inside Intelligence: VCA, CVEDIA, Vaxtor
- Physical security / access: IMRON, DMP
- Infrastructure conversation (Operate, not a camera SKU): NVIDIA, Nutanix, NetApp, Cisco, Palo Alto

---

## On deck — direction, not a SKU

You may say these are direction. You may not put them on a buy page or in a proposal as shipping.

- Edge harness: best model for this camera, scene, and accelerator, without a forklift.
- Natural-language investigation across cameras and time. Labeled beta, not a product.
- Native operator clients stay first for walls and PTZ; web for admin.

Retired roadmap lines from the 2025 guides (do not repeat unless the user re-confirms they shipped): “prompt-based IX,” “LP Agent” as a named product, “full IX dashboard rollout,” Cisco/Nutanix “full-stack integrations” as done.

---

## Voice

Confident, specific, outcome-oriented. Short sentences. Name the workflow.

Prefer: process while you record, dark data, one glass, exception, placement, private instance, video-only is complete, engineered per site.

Avoid: ride the wave, game-changing, ultimate, peace of mind, serverless as a religion, Real*, IQ, IX, RealCloud, “the third wave” as a headline, six lookalike vertical pages, invented ROI.

Old visual system (ocean blue `#0077B7`, Open Sans, no gradients) is **retired for the website**. The 2026 site follows the ePlus system (navy, teal, Lato). This file is not a brand-standards PDF. Do not restyle the site back to the 2025 palette.

---

## Proposal shape (if asked)

1. The job (GSOC, OT exception, or flow) and the client’s exception.
2. What they keep (cameras, access, POS) and what changes (the stream is processed).
3. Vue as the glass, video-only if that is all they need.
4. Intelligence only if a workflow is defined — models, joins, rules.
5. Edge only if we are also the iron, placed for peak.
6. Operate: private instance, health, notify, archive, 24/7.
7. One proof point with attribution. One next step: demo or scoped quote.

Do not open with four Real* columns.
