# Hono [![Version](https://img.shields.io/badge/version-4.7-ff5b11)](https://github.com/stackblaze-templates/hono) [![Maintained by StackBlaze](https://img.shields.io/badge/maintained%20by-StackBlaze-blue)](https://stackblaze.com) [![Weekly Updates](https://img.shields.io/badge/updates-weekly-green)](https://github.com/stackblaze-templates/hono/actions) [![Deploy on StackBlaze](https://img.shields.io/badge/Deploy%20on-StackBlaze-orange)](https://stackblaze.com)

<p align="center"><img src="logo.png" alt="Hono" width="120"></p>

An ultrafast web framework for the Edge. Works on Node.js, Deno, Bun, and Cloudflare Workers with zero dependencies.

> **Credits**: Built on [Hono](https://hono.dev) by [Yusuke Wada](https://github.com/honojs). All trademarks belong to their respective owners.

## Deploy on StackBlaze

[![Deploy on StackBlaze](https://img.shields.io/badge/Deploy%20on-StackBlaze-orange)](https://stackblaze.com)

## Local Development

```bash
docker compose up
```

See the project files for configuration details.

## Security

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Port the HTTP server listens on |

Copy `.env.example` to `.env` and adjust values before running. Never commit `.env` to version control.

### Production Checklist

- Set `NODE_ENV=production` when deploying to production environments.
- Run the server behind a reverse proxy (e.g., Nginx, Caddy) that terminates TLS — the app does not handle HTTPS directly.
- Do not expose the server port publicly without TLS termination.

---

### Maintained by [StackBlaze](https://stackblaze.com)

This template is actively maintained by StackBlaze. We perform **weekly automated checks** to ensure:

- **Up-to-date dependencies** — frameworks, libraries, and base images are kept current
- **Security scanning** — continuous monitoring for known vulnerabilities and CVEs
- **Best practices** — configurations follow current recommendations from upstream projects

Found an issue? [Open a ticket](https://github.com/stackblaze-templates/hono/issues).
