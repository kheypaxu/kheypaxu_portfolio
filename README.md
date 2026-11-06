# kheypaxu portfolio

A responsive Next.js App Router portfolio for Nicole Khey Bengaora. Typography: Sora + DM Sans. Includes a persistent theme switch, mobile navigation, a services carousel, technology filters, and GitHub links.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` for production and `npm run typecheck` for TypeScript validation.

## Personalize

Edit `data/portfolio.ts` for the name, GitHub profile, project descriptions, technology tags, and repository links. Intro copy, work-style notes, and services are in `app/page.tsx`. The toolkit and authentic SVG brand logos are centralized in `components/TechIcon.tsx` (Simple Icons and VS Code Icons via React Icons). Contact currently links to the real GitHub profile; replace with your preferred contact destination when ready.

Projects: VISAIA (thesis, with separate mobile and dashboard repository links), Revia, BigBrew POS, Mabuh-AI, and NexaCare. Descriptions summarize the products without claiming individual responsibilities. Sources: local VISAIA, Revia and NexaCare source files; https://github.com/cictapps/mabuh-ai and https://github.com/xelpaxu/BIGBREW-POS. Revia and NexaCare remotes point to `nicssskie`. The local NexaCare code uses SQLite; BigBrew uses MariaDB. Add your exact roles and dates later. VISAIA and BigBrew use existing project imagery; Revia, Mabuh-AI and NexaCare use explicitly labeled interface illustrations in `components/ProjectPreview.tsx`.

Layout inspired by https://rondeobalos.com/, personalized with blush and rose accents, a floral mark, a subtle grid in both themes, alternating projects, a services carousel, and technology tabs. Typography: Sora + DM Sans (Google Fonts with local fallbacks). Nicole's illustration comes from Revia's `readme_assets/Nicole.jpg`, identified by its team README. Framer Motion handles the hero entrance, project interactions, and technology filtering; MotionConfig and useReducedMotion honor reduced-motion preferences. Colors and responsive styling live in `app/pink.css` over the original layout rules in `app/globals.css`.

