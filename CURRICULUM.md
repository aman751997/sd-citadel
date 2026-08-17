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
- Walkthroughs (module 4) follow the six-phase delivery framework exactly, with "pause and fight this phase" breaks.
- After forging: update lesson status here, remove the matching planned entry in `src/modules.ts`, push (auto-deploys).

## Status

### Module 1 — Foundations
| # | Lesson | Status | Source |
|---|--------|--------|--------|
| 1.1 | Delivery Framework | ✅ forged | SD Master Sheet delivery framework |
| 1.2 | Estimation | ✅ forged | 2026-07-12 estimation tutorial (4-axis) |
| 1.3 | Core Concepts: CAP, consistency, availability | 🔜 NEXT | Master Syllabus fundamentals |
| 1.4 | Networking essentials | queued | Master Syllabus |

### Module 2 — Key Technologies
| # | Lesson | Status | Source |
|---|--------|--------|--------|
| 2.1 | Databases: SQL vs NoSQL, sharding, replication | queued | Master Syllabus |
| 2.2 | Caching: Redis patterns, invalidation, key design | queued | Master Syllabus + user's #1 logged gap (cache hand-wave) |
| 2.3 | Queues & streams: Kafka, SQS | queued | Master Syllabus + user's day-job Kafka experience |
| 2.4 | Load balancers & API gateways | queued | Master Syllabus |
| 2.5 | Blob storage & CDNs | queued | Master Syllabus |
| 2.6 | Search: Elasticsearch, inverted indexes | queued | Master Syllabus |

### Module 3 — Core Patterns
| # | Lesson | Status | Source |
|---|--------|--------|--------|
| 3.1 | Realtime: polling, SSE, WebSockets | queued | Patterns Library |
| 3.2 | Fan-out: push vs pull feeds | queued | Patterns Library |
| 3.3 | Contention: locks, idempotency, exactly-once | queued | Patterns Library |
| 3.4 | Geospatial indexing | queued | Patterns Library |
| 3.5 | Long-running jobs: queue + workers + status | queued | Patterns Library |

### Module 4 — Problem Walkthroughs
| # | Lesson | Status | Source |
|---|--------|--------|--------|
| 4.1 | Rate Limiter | ✅ forged | user's paused 2026-05-05 mock constraints |
| 4.2 | URL Shortener | queued | Question Bank — user's Jul 19 gate problem |
| 4.3 | Ticketmaster | queued | Question Bank |
| 4.4 | WhatsApp | queued | Question Bank |
| 4.5 | News Feed | queued | Question Bank |
| 4.6 | Uber | queued | Question Bank |

Queue order may be re-cut any session based on Attempt Log gaps — note the change here when it happens.

## Session log (append one line per forge/change)
- 2026-08-17 — v1 shipped: 1.1, 1.2, 4.1 forged; portal live; doctrine locked (portal = only SD study surface).
