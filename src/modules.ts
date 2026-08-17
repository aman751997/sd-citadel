// Module registry — pattern-first curriculum: each pattern module = theory lesson + its walkthroughs.
// Learn the pattern deeply → its whole question family falls. Planned entries show as "coming soon".
export interface PlannedLesson {
  title: string;
  description: string;
}

export interface ModuleDef {
  id: number;
  icon: string;
  title: string;
  tagline: string;
  planned: PlannedLesson[];
}

export const MODULES: ModuleDef[] = [
  {
    id: 1, icon: '🏛️', title: 'Foundations',
    tagline: 'The framework, the math, the vocabulary — how every answer is structured.',
    planned: [],
  },
  {
    id: 2, icon: '⚙️', title: 'The Toolbox',
    tagline: 'Six technologies known cold, so design time goes to tradeoffs, not recall.',
    planned: [],
  },
  {
    id: 3, icon: '🥊', title: 'Warm-up Fights',
    tagline: 'First full walkthroughs using only Foundations + Toolbox. Also: the questions every loop opens with.',
    planned: [
      { title: 'Design a URL Shortener', description: 'The universal warm-up — read-heavy, ID generation, redirect caching.' },
      { title: 'Design Typeahead / Autocomplete', description: 'Trie + top-K at <100ms — search lesson, weaponized.' },
    ],
  },
  {
    id: 4, icon: '📡', title: 'Realtime & Messaging',
    tagline: 'Server-push, connection state, delivery guarantees. Unlocks: WhatsApp, Discord/Slack, Zoom signaling, live anything.',
    planned: [
      { title: 'Design WhatsApp', description: 'The pattern\'s showcase walkthrough — WS, receipts, presence, catch-up.' },
    ],
  },
  {
    id: 5, icon: '📣', title: 'Fan-out & Feeds',
    tagline: 'Push vs pull vs hybrid. Unlocks: Twitter/News feed, Instagram, notifications, TikTok feed.',
    planned: [
      { title: 'Design Twitter / News Feed', description: 'THE canonical scale question — hybrid fan-out + ranking.' },
      { title: 'Design a Notification System', description: 'Fan-out meets per-channel pipelines, retries, priorities.' },
    ],
  },
  {
    id: 6, icon: '🔒', title: 'Contention & Exactly-Once',
    tagline: 'Locks, idempotency, ledgers. Unlocks: Ticketmaster, payments, job scheduler, Airbnb, flash sales.',
    planned: [
      { title: 'Design Ticketmaster', description: 'Seat holds, waiting room — contention\'s showcase.' },
      { title: 'Design a Payment System (Stripe)', description: 'Idempotency keys + ledger + reconciliation — your fintech wheelhouse.' },
      { title: 'Design a Distributed Job Scheduler', description: 'Leases, heartbeats, DLQ — the senior must-have.' },
    ],
  },
  {
    id: 7, icon: '🗺️', title: 'Geospatial',
    tagline: 'Geohash, quadtree, H3. Unlocks: Yelp, Uber, DoorDash, Tinder.',
    planned: [
      { title: 'Design Yelp / Nearby Search', description: 'Static objects: geo index + cell caching.' },
      { title: 'Design Uber', description: 'Moving objects: live location grid + matching with holds.' },
    ],
  },
  {
    id: 8, icon: '🏭', title: 'Async Jobs & Pipelines',
    tagline: 'Queue + workers + status, staged pipelines. Unlocks: YouTube, web crawler, code judge, exports.',
    planned: [
      { title: 'Design YouTube', description: 'The canonical pipeline: chunked transcode fan-out + CDN.' },
      { title: 'Design a Web Crawler', description: 'Self-feeding frontier + politeness + Bloom dedup.' },
    ],
  },
  {
    id: 9, icon: '🧱', title: 'Partitioning & Storage Infra',
    tagline: 'Consistent hashing, vnodes, quorums. Unlocks: distributed cache, Dynamo KV store, S3.',
    planned: [
      { title: 'Design a Distributed Cache', description: '"Design Redis" — ring, eviction, hot keys, replication.' },
      { title: 'Design a Key-Value Store (Dynamo)', description: 'Quorums, vector clocks, gossip, Merkle — the infra classic.' },
    ],
  },
  {
    id: 10, icon: '📈', title: 'Time-Series & Aggregation',
    tagline: 'Rollups, sharded counters, top-K sketches. Unlocks: Datadog, ad aggregator, leaderboards, tracing.',
    planned: [
      { title: 'Design Metrics / Datadog', description: 'Ingest firehose, cardinality, rollups, alerting.' },
    ],
  },
  {
    id: 11, icon: '✍️', title: 'Sync & Collaboration',
    tagline: 'Conflicts, OT, CRDTs. Unlocks: Dropbox, Google Docs, offline-first apps.',
    planned: [
      { title: 'Design Dropbox', description: 'Chunking + delta sync + conflicted copies.' },
      { title: 'Design Google Docs', description: 'OT sequencer + WS rooms — the hard differentiator.' },
    ],
  },
  {
    id: 12, icon: '🤖', title: 'AI-Era Systems',
    tagline: 'Your day-job edge. Unlocks: ChatGPT serving, RAG, LLM gateways, flags, recsys — the rising tier.',
    planned: [],
  },
];
