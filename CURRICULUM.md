# Curriculum State — buddy's forge queue

**Protocol (every session):**
1. Read this file + `ls src/lessons/ src/dsa-lessons/` = what exists (never trust memory for this).
2. Ask user / check Notion hub for frontier (last lesson cleared, last mock score, DSA solves).
3. Lesson cleared → run its drill/mock hand-off live, log to Notion (Attempt Log / roadmap toggles + XP Ledger).
4. SD walkthroughs + DSA pattern lessons forge incrementally: keep ≥2 unread ahead of frontier.
5. Tune forged content with latest logged gaps — gap-tuning is why this beats paid portals.
6. DSA solves: update BOTH Notion roadmap and `src/dsa.ts` done flags.

**Forging rules:**
- Sources: Notion SD Master Syllabus/Sheet (SD), Grimoire chapters + roadmap (DSA). Adapt, don't invent.
- SD lesson template: concept → tradeoff table → worked numbers → Mermaid diagram(s) → Quiz (3–4 q with `why`) → drill hand-off. Walkthroughs: six-phase framework with pause-and-fight breaks.
- DSA lesson template (Grimoire style): trigger → forms/sub-patterns with Java code + invariants → recognition table → bug bestiary (user's real bugs) → Quiz → next-problems hand-off.
- After forging: update status here + `src/modules.ts` (SD) or lesson link in `src/dsa.ts` grouping (auto via slug), push (auto-deploys).
- Coverage invariant: every `src/bank.ts` question maps to ≥1 lesson; every `src/dsa.ts` pattern eventually gets a lesson.

**User gap register (tune everything against these):**
- SD: cache hand-waves · layer conflation · silent skips · decomposition-from-scratch · pacing (18-min requirements) · envelope encryption revisit · M:N modeling
- DSA: Recognition Fear (transfer gap — unseen-problem reps mandatory) · variable-state narration at loop exit · TC/SC+invariant before coding

## SD status — THEORY COMPLETE (2026-08-17)

| Module | Lessons | Status |
|--------|---------|--------|
| 1 Foundations | delivery-framework, estimation, core-concepts, networking | ✅ all forged |
| 2 Toolbox | databases, caching, queues-streams, load-balancing, blob-cdn, search | ✅ all forged |
| 3 Warm-up Fights | rate-limiter ✅ · URL shortener, Typeahead | 2 walkthroughs queued |
| 4 Realtime | pattern-realtime ✅ · WhatsApp | walkthrough queued |
| 5 Fan-out | pattern-fanout ✅ · Twitter Feed, Notification System | 2 queued |
| 6 Contention | pattern-contention ✅ · Ticketmaster, Payments, Job Scheduler | 3 queued |
| 7 Geospatial | pattern-geospatial ✅ · Yelp, Uber | 2 queued |
| 8 Async Pipelines | pattern-async-jobs ✅ · YouTube, Web Crawler | 2 queued |
| 9 Partitioning | pattern-partitioning ✅ · Distributed Cache, KV Store | 2 queued |
| 10 Time-Series | pattern-timeseries ✅ · Metrics/Datadog | 1 queued |
| 11 Sync & Collab | pattern-sync-collab ✅ · Dropbox, Google Docs | 2 queued |
| 12 AI-Era | llm-inference, rag, llm-gateway, feature-flags, recsys | ✅ all forged |

**SD walkthrough forge order** (Master Sheet phases): URL Shortener → Typeahead → Dropbox → Twitter → WhatsApp → Yelp → Uber → Ticketmaster → Crawler → YouTube → Notifications → Cache → KV → Scheduler → Payments → Datadog → Google Docs.

## DSA status

- `/dsa/` page: all 20 patterns, 144 problems, LC + LintCode links, done flags mirroring Notion. ✅ live
- Pattern lessons forged: **two-pointers**, **sliding-window** (the taught patterns — drill-design rule respected).
- Queue (per campaign timeline / Grimoire cadence): Prefix Sum → Intervals → Linked Lists → Binary Search → Stacks → … (forge each when its week opens or pattern kicks off, enriched with that week's real bugs).

## Coverage map
`src/bank.ts` (46 SD questions) → all map to forged theory; 17 walkthroughs queued. `src/dsa.ts` (144 problems) → 2/20 pattern lessons forged, rest gated on campaign progress per the recognition-drill doctrine.

## Session log
- 2026-08-17 — v1 shipped: framework, estimation, rate-limiter; portal live; doctrine locked.
- 2026-08-17 — Coverage expansion: /bank page, curriculum → modules, gap register imported.
- 2026-08-17 — **THE GREAT THEORY FORGE**: all 19 remaining SD theory lessons (M1–M2 complete, 8 pattern lessons, 5 AI-era) with Mermaid + quizzes; curriculum restructured PATTERN-FIRST (12 modules — pattern theory + its walkthroughs clubbed, per user directive); files renamed to semantic slugs; DSA wing added (/dsa/: 20 patterns, 144 problems, LC/LintCode links, done flags; two-pointers + sliding-window lessons ported from Grimoire with Java + bestiaries). SD theory scaffolding era CLOSED — only walkthroughs + reps remain.
