// Question Bank — mirrored from Notion SD Master Sheet → Question Bank (web-validated 2026).
// `covers` names the portal lesson(s)/module teaching the question's core patterns,
// so coverage is auditable: every question maps to teaching content.
export interface BankQuestion {
  name: string;
  hot?: boolean; // 🔥 most-asked classic
  ai?: boolean; // ✨ modern/AI-era
  diff: string; // E/M/H
  freq: number; // 1–3 stars
  patterns: string;
  covers: string; // lesson(s) that teach this question's patterns
  walkthrough?: 'forged' | 'queued'; // has/gets a full module-4/5 walkthrough
}

export interface BankTier {
  title: string;
  blurb: string;
  questions: BankQuestion[];
}

export const BANK: BankTier[] = [
  {
    title: 'Tier 1 — Warm-ups / Foundations',
    blurb: 'Every onsite loop starts here. Expect one as a screener.',
    questions: [
      { name: 'URL shortener (TinyURL)', hot: true, diff: 'E', freq: 3, patterns: 'base62, ID gen, KV, redirect cache (301/302)', covers: 'M1 framework + estimation; walkthrough 4.2', walkthrough: 'queued' },
      { name: 'Rate limiter', hot: true, diff: 'E/M', freq: 3, patterns: 'token/sliding bucket, Redis INCR+EXPIRE, Lua', covers: 'Walkthrough 4.1', walkthrough: 'forged' },
      { name: 'Unique ID generator', diff: 'E', freq: 2, patterns: 'Snowflake, UUIDv7, monotonicity, clock skew', covers: '2.1 Databases (ID strategies section)' },
      { name: 'Pastebin', diff: 'E', freq: 2, patterns: 'blob+metadata split, TTL, content-hash dedup', covers: '2.5 Blob storage & CDNs' },
      { name: 'Typeahead / autocomplete', hot: true, diff: 'E/M', freq: 3, patterns: 'trie, top-K per prefix, <100ms', covers: '2.6 Search + 3.7 Top-K; walkthrough 4.3', walkthrough: 'queued' },
      { name: 'API gateway', diff: 'E/M', freq: 2, patterns: 'routing, auth, throttle, circuit breaker', covers: '2.4 LBs & gateways' },
    ],
  },
  {
    title: 'Tier 2 — Classics (senior staples)',
    blurb: 'The canonical scale questions — most 45-min rounds come from here.',
    questions: [
      { name: 'Twitter / News feed', hot: true, diff: 'M', freq: 3, patterns: 'fan-out write vs read, hybrid for celebs, sorted sets', covers: '3.2 Fan-out; walkthrough 4.4', walkthrough: 'queued' },
      { name: 'Instagram', hot: true, diff: 'M/H', freq: 3, patterns: 'CDN, feed fan-out, blob, follower graph', covers: '3.2 Fan-out + 2.5 Blob/CDN (feed walkthrough transfers)' },
      { name: 'WhatsApp / Messenger', hot: true, diff: 'M', freq: 3, patterns: 'WebSocket, delivery receipts (at-least-once), presence', covers: '3.1 Realtime; walkthrough 4.5', walkthrough: 'queued' },
      { name: 'Dropbox / Drive', hot: true, diff: 'M', freq: 3, patterns: 'chunk + delta sync, content-hash dedup, conflict resolution', covers: '2.5 Blob + 3.8 sync/conflict; walkthrough 4.6', walkthrough: 'queued' },
      { name: 'Yelp / nearby search', hot: true, diff: 'M', freq: 3, patterns: 'geohash / quadtree, radius search', covers: '3.4 Geospatial; walkthrough 4.7', walkthrough: 'queued' },
      { name: 'Uber / Lyft', hot: true, diff: 'H', freq: 3, patterns: 'geo index (H3), driver matching, WS location stream, surge', covers: '3.4 Geospatial + 3.1 Realtime; walkthrough 4.8', walkthrough: 'queued' },
      { name: 'Ticketmaster', hot: true, diff: 'M', freq: 3, patterns: 'distributed lock, idempotency, virtual waiting room', covers: '3.3 Contention; walkthrough 4.9', walkthrough: 'queued' },
      { name: 'Web crawler', hot: true, diff: 'H', freq: 3, patterns: 'URL frontier, politeness, Bloom dedup, robots.txt', covers: '3.5 Async pipelines; walkthrough 4.10', walkthrough: 'queued' },
      { name: 'Twitter search', diff: 'M', freq: 2, patterns: 'inverted index, shard by term vs doc', covers: '2.6 Search' },
      { name: 'Google Calendar', diff: 'M', freq: 2, patterns: 'RRULE, timezone expansion, conflict detection', covers: 'M1 framework + 2.1 Databases (data modeling)' },
    ],
  },
  {
    title: 'Tier 3 — Modern Product Systems',
    blurb: 'Product-flavored rounds — same patterns, newer skins.',
    questions: [
      { name: 'YouTube / Netflix', hot: true, diff: 'H', freq: 3, patterns: 'async transcode, adaptive bitrate (HLS/DASH), CDN, sharded counters', covers: '3.5 Async pipelines + 2.5 CDN; walkthrough 4.11', walkthrough: 'queued' },
      { name: 'Google Docs', ai: true, diff: 'H', freq: 3, patterns: 'OT vs CRDT, cursor broadcast, version log', covers: '3.8 Collaborative editing; walkthrough 4.13', walkthrough: 'queued' },
      { name: 'Notification system', hot: true, diff: 'M', freq: 3, patterns: 'multi-channel fan-out, retry+backoff, idempotency, priority queue', covers: '3.2 Fan-out + 3.5 Async jobs; walkthrough 4.12', walkthrough: 'queued' },
      { name: 'TikTok', diff: 'M', freq: 2, patterns: 'short-video transcode, two-tower rec, infinite scroll', covers: '3.5 pipelines + 5.5 Recommendations' },
      { name: 'Discord / Slack', diff: 'M/H', freq: 2, patterns: 'WS connection sharding, msg ordering, selective delivery', covers: '3.1 Realtime (WhatsApp walkthrough transfers)' },
      { name: 'Recommendation system', diff: 'M', freq: 2, patterns: 'two-stage (candidate → rank), feature store, A/B', covers: '5.5 Recommendations' },
      { name: 'LeetCode / code judge', diff: 'M', freq: 2, patterns: 'sandboxed exec (container), quotas, async queue', covers: '3.5 Async jobs' },
      { name: 'Airbnb marketplace', diff: 'M', freq: 2, patterns: 'availability calendar lock, double-booking prevent', covers: '3.3 Contention (Ticketmaster walkthrough transfers)' },
      { name: 'Tinder / dating', diff: 'M', freq: 1, patterns: 'geo filter, swipe state, match fan-out', covers: '3.4 Geospatial + 3.2 Fan-out' },
    ],
  },
  {
    title: 'Tier 4 — Infra & Hard Distributed',
    blurb: 'Senior/staff differentiators — infra rounds and "design Redis" questions.',
    questions: [
      { name: 'Distributed cache (Redis)', hot: true, diff: 'H', freq: 3, patterns: 'consistent hashing, eviction, hot-key L1, replication', covers: '3.6 Partitioning + 2.2 Caching; walkthrough 4.14', walkthrough: 'queued' },
      { name: 'Key-value store (Dynamo)', hot: true, diff: 'H', freq: 3, patterns: 'consistent hash + vnodes, quorum, vector clocks, gossip, Merkle', covers: '3.6 Partitioning + 1.3 Consistency; walkthrough 4.15', walkthrough: 'queued' },
      { name: 'Distributed job scheduler', hot: true, diff: 'H', freq: 3, patterns: 'exactly-once lease+heartbeat, DLQ, leader election', covers: '3.3 Contention + 3.5 Async jobs; walkthrough 4.16', walkthrough: 'queued' },
      { name: 'Payment system (Stripe)', hot: true, diff: 'H', freq: 3, patterns: 'idempotency keys, double-entry ledger, reconciliation, webhooks', covers: '3.3 Contention; walkthrough 4.17 (your wheelhouse — fintech day job)', walkthrough: 'queued' },
      { name: 'Metrics / Datadog', diff: 'H', freq: 2, patterns: 'time-series LSM, cardinality explosion, rollup, sliding-window alert', covers: '3.7 Time-series; walkthrough 4.18', walkthrough: 'queued' },
      { name: 'Ad click aggregator', diff: 'H', freq: 2, patterns: 'stream proc (Flink), exactly-once, watermark windows, Lambda/Kappa', covers: '3.7 Time-series + 2.3 Streams' },
      { name: 'S3 / object storage', diff: 'H', freq: 2, patterns: 'erasure coding, placement, multipart, versioning', covers: '2.5 Blob storage + 3.6 Partitioning' },
      { name: 'Distributed lock (Chubby)', diff: 'H', freq: 2, patterns: 'Raft/Paxos, lease + fencing tokens, Redlock critique', covers: '3.3 Contention (consensus section)' },
      { name: 'Top-K / leaderboard', diff: 'H', freq: 2, patterns: 'count-min sketch, sorted sets, windowed aggregation', covers: '3.7 Time-series & Top-K' },
      { name: 'Stock exchange / Robinhood', diff: 'H', freq: 2, patterns: 'in-memory order book, total ordering, microsecond latency', covers: '3.3 Contention + 3.7 (ordering); practice-only' },
      { name: 'Food delivery (DoorDash)', diff: 'H', freq: 2, patterns: 'dispatch matching, ETA (ML), order state machine', covers: '3.4 Geospatial + 3.5 Async (Uber walkthrough transfers)' },
      { name: 'Google Maps / routing', diff: 'H', freq: 2, patterns: 'road graph (A*, contraction hierarchies), traffic ingest', covers: '3.4 Geospatial (routing section); practice-only' },
      { name: 'Zoom / video conf', diff: 'H', freq: 2, patterns: 'WebRTC SFU vs MCU, simulcast, TURN/STUN', covers: '3.1 Realtime (media section); practice-only' },
      { name: 'Flash sale', diff: 'H', freq: 1, patterns: 'inventory reserve under burst, queue ordering, stampede', covers: '3.3 Contention (Ticketmaster walkthrough transfers)' },
    ],
  },
  {
    title: 'Tier 5 — ✨ Modern / AI-era',
    blurb: 'Rising fast — and your day-job edge (LLM integration). Asked by MSFT, Amazon, OpenAI, Anthropic, Google, Datadog.',
    questions: [
      { name: 'ChatGPT / LLM inference serving', ai: true, diff: 'H', freq: 3, patterns: 'GPU bottleneck, KV cache, continuous batching (vLLM), token streaming (SSE), token-budget rate limit', covers: '5.1 LLM inference; walkthrough 5.1', walkthrough: 'queued' },
      { name: 'RAG / semantic search', ai: true, diff: 'H', freq: 3, patterns: 'embeddings, vector DB, ANN, chunking, rerank; ANN 10-50ms vs LLM 500ms+ budgets', covers: '5.2 RAG & vector search; walkthrough 5.2', walkthrough: 'queued' },
      { name: 'Vector database', ai: true, diff: 'H', freq: 2, patterns: 'HNSW/ANN index, shard embeddings, recall vs latency', covers: '5.2 RAG & vector search' },
      { name: 'AI agent platform / LLM gateway', ai: true, diff: 'H', freq: 2, patterns: 'orchestrator + tool gateway, token-budget, model fallback routing, per-tenant cost, OTEL', covers: '5.3 LLM gateway; walkthrough 5.3', walkthrough: 'queued' },
      { name: 'Feature flag / experimentation', ai: true, diff: 'M', freq: 2, patterns: 'hash-based sticky bucketing, SSE config streaming, A/B stats, kill switch', covers: '5.4 Feature flags' },
      { name: 'Distributed tracing', ai: true, diff: 'M/H', freq: 2, patterns: 'trace-id propagation, span ingest, sampling', covers: '3.7 Time-series + 5.3 (OTEL section)' },
      { name: 'Recommendation (two-tower)', ai: true, diff: 'M', freq: 2, patterns: 'candidate gen + ranker, ANN retrieval, feature store, online learning', covers: '5.5 Recommendations' },
    ],
  },
];

export const PAPERS =
  'Tier 6 — Staff-level stretch: Dynamo · Cassandra · Kafka · Bigtable · GFS · HDFS · Chubby · ZooKeeper · Spanner. One paper/week in Act IV, extract the one key idea each.';
