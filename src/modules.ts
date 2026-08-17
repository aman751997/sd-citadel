// Module registry — the portal's curriculum map.
// Lessons that exist as MDX files render as unlockable; planned entries show as "coming soon".
// Coverage goal: every question in src/bank.ts maps to at least one lesson here.
export interface PlannedLesson {
  title: string;
  description: string;
}

export interface ModuleDef {
  id: number;
  icon: string;
  title: string;
  tagline: string;
  planned: PlannedLesson[]; // shown greyed-out until the MDX file is forged
}

export const MODULES: ModuleDef[] = [
  {
    id: 1,
    icon: '🏛️',
    title: 'Foundations',
    tagline: 'The delivery framework and the math — how every answer is structured.',
    planned: [
      { title: 'Core Concepts: CAP, Consistency Models, Availability Math', description: 'The vocabulary every deep-dive uses — quorums, linearizability, the nines.' },
      { title: 'Networking Essentials', description: 'DNS, TCP vs UDP, TLS, HTTP/2, gRPC — what interviewers expect you to know cold.' },
    ],
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'Key Technologies',
    tagline: 'The toolbox — know each tool cold so design time goes to tradeoffs, not recall.',
    planned: [
      { title: 'Databases: SQL vs NoSQL, Sharding, Replication, ID Generation', description: 'When to pick what, how to defend it — plus Snowflake/UUIDv7 ID strategies.' },
      { title: 'Caching: Redis Patterns, Invalidation, Key Design', description: 'Kill the "just cache it in Redis" hand-wave — your #1 logged gap.' },
      { title: 'Message Queues & Streams: Kafka, SQS, Exactly-Once Myths', description: 'Async patterns, ordering, consumer groups — your day-job edge, sharpened.' },
      { title: 'Load Balancers & API Gateways', description: 'L4 vs L7, health checks, circuit breakers, edge rate limiting.' },
      { title: 'Blob Storage & CDNs', description: 'S3 presigned URLs, chunking, dedup, CDN invalidation — feeds Dropbox/YouTube/Pastebin.' },
      { title: 'Search: Inverted Indexes, Elasticsearch, Tries & Typeahead', description: 'Full-text search, shard-by-term vs doc, top-K per prefix under 100ms.' },
    ],
  },
  {
    id: 3,
    icon: '🧩',
    title: 'Core Patterns',
    tagline: 'Reusable design moves — recognize the pattern, apply the template. These 8 cover ~90% of deep dives.',
    planned: [
      { title: 'Realtime: Polling, SSE, WebSockets (+ media basics)', description: 'Choosing a push model and defending it — chat, presence, live anything.' },
      { title: 'Fan-out: Push vs Pull Feeds', description: 'The celebrity problem, hybrid fan-out — Twitter, Instagram, notifications.' },
      { title: 'Contention: Locks, Idempotency, Exactly-Once, Fencing', description: 'Bookings, payments, inventory, schedulers — the collision zone + Redlock critique.' },
      { title: 'Geospatial Indexing: Geohash, Quadtree, H3', description: '"Find nearby X" — Yelp, Uber, DoorDash, Tinder.' },
      { title: 'Async Jobs & Pipelines: Queues + Workers + Status', description: 'The template behind crawlers, transcoding, code judges, schedulers.' },
      { title: 'Partitioning: Consistent Hashing, Vnodes, Rebalancing', description: 'The infra-round backbone — distributed cache, Dynamo, S3.' },
      { title: 'Time-Series & Aggregation: Rollups, Top-K, Count-Min, Watermarks', description: 'Metrics, leaderboards, ad aggregation, tracing ingest.' },
      { title: 'Sync & Collaboration: Delta Sync, Conflicts, OT vs CRDT', description: 'Dropbox conflict resolution to Google Docs — the hard differentiator.' },
    ],
  },
  {
    id: 4,
    icon: '⚔️',
    title: 'Problem Walkthroughs',
    tagline: 'Full 45-minute fights at the real bar — the Priority 15 that covers ~80% of what gets asked.',
    planned: [
      { title: 'Design a URL Shortener', description: 'The universal warm-up — read-heavy, ID generation, redirect caching.' },
      { title: 'Design Typeahead / Autocomplete', description: 'Trie + top-K per prefix at <100ms.' },
      { title: 'Design Twitter / News Feed', description: 'Fan-out write vs read, hybrid for celebrities — THE canonical scale question.' },
      { title: 'Design WhatsApp', description: 'WebSockets, delivery receipts, at-least-once, presence.' },
      { title: 'Design Dropbox', description: 'Chunking, delta sync, content-hash dedup, conflict resolution.' },
      { title: 'Design Yelp / Nearby Search', description: 'Geohash vs quadtree, radius queries.' },
      { title: 'Design Uber', description: 'H3 geo index, driver matching, live location streams, surge.' },
      { title: 'Design Ticketmaster', description: 'Seat locking, idempotency, virtual waiting room — contention on steroids.' },
      { title: 'Design a Web Crawler', description: 'URL frontier, politeness, Bloom-filter dedup.' },
      { title: 'Design YouTube', description: 'Async transcode pipeline, adaptive bitrate, CDN, sharded view counters.' },
      { title: 'Design a Notification System', description: 'Multi-channel fan-out, retry+backoff, priority queues.' },
      { title: 'Design Google Docs', description: 'OT vs CRDT, cursor broadcast — the hard differentiator.' },
      { title: 'Design a Distributed Cache', description: 'Consistent hashing, eviction, hot keys, replication — "design Redis".' },
      { title: 'Design a Key-Value Store (Dynamo)', description: 'Quorums, vector clocks, gossip, Merkle trees — the infra classic.' },
      { title: 'Design a Distributed Job Scheduler', description: 'Exactly-once via lease+heartbeat, DLQ, leader election — senior must-have.' },
      { title: 'Design a Payment System (Stripe)', description: 'Idempotency keys, double-entry ledger, reconciliation — your fintech wheelhouse.' },
      { title: 'Design Metrics / Datadog', description: 'Time-series storage, cardinality, rollups, alerting.' },
    ],
  },
  {
    id: 5,
    icon: '🤖',
    title: 'AI-Era Systems',
    tagline: 'The rising tier — and your day-job edge. Asked by MSFT, Amazon, OpenAI, Anthropic, Google, Datadog.',
    planned: [
      { title: 'LLM Inference Serving (ChatGPT)', description: 'GPU batching, KV cache, token streaming, token-budget rate limits.' },
      { title: 'RAG & Vector Search', description: 'Embeddings, ANN/HNSW, chunking, rerank, latency budgets.' },
      { title: 'LLM Gateway / AI Agent Platform', description: 'Tool orchestration, model fallback routing, per-tenant cost, OTEL tracing.' },
      { title: 'Feature Flags & Experimentation', description: 'Sticky bucketing, SSE config streaming, kill switches.' },
      { title: 'Recommendation Systems (Two-Tower)', description: 'Candidate gen → ranking, feature stores, ANN retrieval.' },
    ],
  },
];
