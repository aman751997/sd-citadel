# Curriculum State — buddy's forge queue

**Protocol (every SD session):**
1. Read this file + `ls src/lessons/` = what exists (never trust memory for this).
2. Ask user / check Notion hub for frontier (last lesson cleared, last mock score).
3. Frontier cleared a lesson → run its drill/mock hand-off live, log to Notion Attempt Log + XP Ledger.
4. Runway < 2 unread lessons → forge next queued lesson BEFORE session ends, push to main.
5. Tune every forged lesson with the user's latest logged gaps (Attempt Log) — generic content is what paid portals have; gap-tuned content is why this beats them.

**Forging rules:**
- Source of truth for content: Notion SD Master Syllabus + SD Master Sheet (patterns library, Priority 15, question bank). Adapt, don't invent — if a fact isn't in the syllabus or verifiable, it doesn't go in a lesson.
- Template per lesson: concept → tradeoff table → worked example with numbers → checkpoint Quiz (3–4 q, `why` on every answer) → drill/mock hand-off at the end.
- Walkthroughs (modules 4–5) follow the six-phase delivery framework exactly, with "pause and fight this phase" breaks.
- Diagrams: inline SVG per architecture from lesson 1.3 onward.
- After forging: update status here, remove matching planned entry in `src/modules.ts`, push (auto-deploys).
- Coverage invariant: every question in `src/bank.ts` maps to ≥1 lesson (`covers` field). Adding a bank question → check the mapping still holds.

**User gap register (tune lessons/mocks against these — from Notion Master Sheet):**
- Cache hand-waves (no key/TTL/invalidation) · conflates orthogonal layers · skips instead of reasoning aloud · component decomposition from scratch under time · time management (18 min on requirements in Vault mock) · envelope encryption KEK/DEK (new topic, needs revisit) · M:N data modeling

## Status

### Module 1 — Foundations
| # | Lesson | Status |
|---|--------|--------|
| 1.1 | Delivery Framework | ✅ forged |
| 1.2 | Estimation | ✅ forged |
| 1.3 | Core Concepts: CAP, consistency models, availability math | 🔜 NEXT |
| 1.4 | Networking essentials | queued |

### Module 2 — Key Technologies
| # | Lesson | Status |
|---|--------|--------|
| 2.1 | Databases: SQL vs NoSQL, sharding, replication, ID gen | queued |
| 2.2 | Caching: Redis patterns, invalidation, key design | queued (user's #1 gap) |
| 2.3 | Queues & streams: Kafka, SQS, exactly-once myths | queued (day-job edge) |
| 2.4 | Load balancers & API gateways | queued |
| 2.5 | Blob storage & CDNs | queued |
| 2.6 | Search: inverted indexes, tries, typeahead | queued |

### Module 3 — Core Patterns (8 patterns ≈ 90% of deep dives)
| # | Lesson | Status |
|---|--------|--------|
| 3.1 | Realtime: polling, SSE, WebSockets (+ media basics) | queued |
| 3.2 | Fan-out: push vs pull | queued |
| 3.3 | Contention: locks, idempotency, exactly-once, fencing | queued |
| 3.4 | Geospatial: geohash, quadtree, H3 | queued |
| 3.5 | Async jobs & pipelines | queued |
| 3.6 | Partitioning: consistent hashing, vnodes | queued |
| 3.7 | Time-series & aggregation: rollups, top-K, count-min, watermarks | queued |
| 3.8 | Sync & collaboration: delta sync, conflicts, OT vs CRDT | queued |

### Module 4 — Problem Walkthroughs (Priority 15 + crawler + notifications)
Rate Limiter ✅ forged. Queued, in study-sequence order (Master Sheet phases):
- **Phase 1 (decomposition reps — user's gap):** URL Shortener → Typeahead → Dropbox
- **Phase 2 (scale patterns):** Twitter Feed → WhatsApp → Yelp → Uber → Ticketmaster → Web Crawler → YouTube → Notification System
- **Phase 3 (infra depth):** Distributed Cache → KV Store (Dynamo) → Job Scheduler → Payment System → Metrics/Datadog
- **Phase 4 (hard differentiator):** Google Docs

### Module 5 — AI-Era Systems (user's day-job edge; Act IV per timeline)
| # | Lesson | Status |
|---|--------|--------|
| 5.1 | LLM inference serving (ChatGPT) | queued |
| 5.2 | RAG & vector search | queued |
| 5.3 | LLM gateway / agent platform | queued |
| 5.4 | Feature flags & experimentation | queued |
| 5.5 | Recommendations (two-tower) | queued |

**Default forge order:** finish M1 → interleave M2/M3 pairs (technology + the pattern that uses it) → walkthrough after each 2–3 lesson cluster (Phase 1 problems first) → M5 before Act IV / any AI-heavy company interview. Re-cut freely per Attempt Log gaps; note changes here.

## Coverage map
`src/bank.ts` mirrors the Notion Question Bank (46 questions, 6 tiers incl. papers note) with per-question `covers` mapping → rendered at `/bank/`. All 46 map to lessons above. Practice-only outliers (no dedicated walkthrough, covered by pattern lessons + mock): Stock Exchange, Google Maps routing, Zoom/WebRTC.

## Session log (append one line per forge/change)
- 2026-08-17 — v1 shipped: 1.1, 1.2, 4.1 forged; portal live; doctrine locked (portal = only SD study surface).
- 2026-08-17 — Coverage expansion: Question Bank page (/bank/) added, 46 questions mirrored from Notion with covers-mapping; curriculum grown to 5 modules / 38 lessons (M3 → 8 patterns, M4 → 17 walkthroughs incl. full Priority 15, new M5 AI-era); gap register imported from Master Sheet (incl. Vault mock findings: decomposition, pacing, envelope encryption).
