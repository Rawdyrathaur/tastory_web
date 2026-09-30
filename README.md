# TabRevo

Marketing website for **TabRevo** — a local-first Chrome extension (with a PWA companion) that helps you save, organize, schedule, and revisit the web.

Your tabs aren't bookmarks. They're unfinished business.

## Production

- **Domain:** https://tabrevo.duckdns.org (points to `140.238.244.49`)
- **Mirror:** GitHub Pages, auto-deployed on every push to `main`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/` — serve that directory from any web server (e.g. Nginx, Caddy) on the production host.
