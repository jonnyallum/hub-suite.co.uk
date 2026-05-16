# hub-suite.co.uk

Marketing landing for the JonnyAI **HubSuite** — the daddy site that sells all three hubs (Compliance · Care · FM Control).

## Stack

- Next.js 15 (`output: 'export'`) + React 19 + Tailwind 3.4
- Shared `hub-brand` design system as a git submodule at `/brand`
- Dark default, light toggle, system-aware

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` — builds the static export and FTP-uploads `out/` to Hostinger's `public_html/` for hub-suite.co.uk.

Secrets required on the GitHub repo:

| Secret | Value |
|---|---|
| `FTP_USERNAME` | `u384342620.hub-suite.co.uk` |
| `FTP_PASSWORD` | Hostinger FTP password |

Server: `92.112.189.250` · port 21 · target `/public_html/`.

Trigger a manual deploy: `gh workflow run "Deploy to Hostinger"`.

## Local dev

```bash
git clone git@github.com:jonnyallum/hub-suite.co.uk.git
cd hub-suite.co.uk
git submodule update --init --recursive
npm install
npm run dev
```

## Updating the brand

The `/brand` directory is a submodule pointing at https://github.com/jonnyallum/hub-brand. To pull brand updates:

```bash
cd brand && git pull origin main && cd ..
git add brand && git commit -m "brand: bump"
git push
```
