// Module registry — the portal's curriculum map.
// Lessons that exist as MDX files render as unlockable; planned entries show as "coming soon".
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
      { title: 'Core Concepts: CAP, Consistency, Availability', description: 'The vocabulary every deep-dive uses.' },
      { title: 'Networking Essentials', description: 'DNS, TCP vs UDP, TLS, HTTP/2 — what interviewers expect you to know.' },
    ],
  },
  {
    id: 2,
    icon: '⚙️',
    title: 'Key Technologies',
    tagline: 'The toolbox — know each tool cold so design time goes to tradeoffs, not recall.',
    planned: [
      { title: 'Databases: SQL vs NoSQL, Sharding, Replication', description: 'When to pick what, and how to defend it.' },
      { title: 'Caching: Redis Patterns, Invalidation, Key Design', description: 'Kill the "just cache it in Redis" hand-wave.' },
      { title: 'Message Queues & Streams: Kafka, SQS', description: 'Async patterns, ordering, exactly-once myths.' },
      { title: 'Load Balancers & API Gateways', description: 'L4 vs L7, health checks, rate limiting at the edge.' },
      { title: 'Blob Storage & CDNs', description: 'S3 presigned URLs, CDN invalidation, edge caching.' },
      { title: 'Search: Elasticsearch & Inverted Indexes', description: 'Full-text search, typeahead, relevance basics.' },
    ],
  },
  {
    id: 3,
    icon: '🧩',
    title: 'Core Patterns',
    tagline: 'Reusable design moves — recognize the pattern, apply the template.',
    planned: [
      { title: 'Real-time Updates: Polling, SSE, WebSockets', description: 'Choosing a push model and defending it.' },
      { title: 'Fan-out: Push vs Pull Feeds', description: 'The celebrity problem and hybrid fan-out.' },
      { title: 'Contention: Locks, Idempotency, Exactly-Once', description: 'Bookings, payments, inventory — the collision zone.' },
      { title: 'Geospatial Indexing', description: 'Geohash, quadtrees, "find nearby X" problems.' },
      { title: 'Long-running Jobs: Queues + Workers + Status', description: 'The async job template that fits 20 problems.' },
    ],
  },
  {
    id: 4,
    icon: '⚔️',
    title: 'Problem Walkthroughs',
    tagline: 'Full 45-minute fights, start to finish, at the bar interviewers actually hold.',
    planned: [
      { title: 'Design a URL Shortener', description: 'The classic opener — read-heavy, ID generation, redirects.' },
      { title: 'Design Ticketmaster', description: 'Contention on steroids — seat locking, virtual queues.' },
      { title: 'Design WhatsApp', description: 'Realtime messaging, presence, delivery guarantees.' },
      { title: 'Design a News Feed', description: 'Fan-out, ranking, pagination at scale.' },
      { title: 'Design Uber', description: 'Geospatial matching, location updates, surge.' },
    ],
  },
];
