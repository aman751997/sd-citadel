# 🏰 SD Citadel

Personal system design interview prep portal — a private Hello-Interview. Lessons unlock in order, quizzes are inline, progress lives in localStorage.

## Run locally

```sh
npm install
npm run dev
```

## Add a lesson

1. Drop an MDX file in `src/lessons/` with frontmatter: `title`, `description`, `module` (1–4), `order`, `minutes`.
2. Import `Quiz` from `../components/Quiz.astro` for checkpoints.
3. Remove the matching "coming soon" entry from `src/modules.ts` if one exists.
4. Push to `main` — GitHub Actions deploys to Pages automatically.

## Modules

1. **Foundations** — delivery framework, estimation, core concepts
2. **Key Technologies** — databases, caches, queues, LBs, blob storage, search
3. **Core Patterns** — realtime, fan-out, contention, geospatial, async jobs
4. **Problem Walkthroughs** — full 45-minute fights
