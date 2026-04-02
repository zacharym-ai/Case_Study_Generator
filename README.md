# Zoek Case Study Generator

Internal tool for generating polished, print-ready marketing case studies matching Zoek's brand.

## Features

- **3 Case Study Templates**: SEO, Paid Advertising, Facebook Leads Campaign
- **AI Writing Assistant**: Uses Claude Sonnet to polish rough notes into professional copy
- **Live Preview**: Real-time preview panel as you type
- **Draft System**: Save and load drafts using localStorage
- **PDF Export**: Print-ready output via browser print dialog

## Deploy to Netlify

### Option 1 — Netlify Drop (fastest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `zoek-case-study-generator` folder onto the page
3. Done — you get a live URL immediately

### Option 2 — GitHub + Netlify (recommended for team use)

```bash
# 1. Initialize git repo
cd zoek-case-study-generator
git init
git add .
git commit -m "Initial commit: Zoek Case Study Generator"

# 2. Create a GitHub repo (via github.com or GitHub CLI)
gh repo create zoek-case-study-generator --private --source=. --push

# 3. Connect to Netlify
# Go to app.netlify.com → Add new site → Import from Git
# Select your repo → Deploy
```

Netlify will auto-deploy on every push to `main`.

## Usage

1. **Select template** from the left sidebar (SEO, Paid Ads, or Facebook Leads)
2. **Fill in client details** — name, industry, location, dates
3. **Enter challenge & solution notes** → click "✨ Polish with AI" to generate professional copy
4. **Add metrics** — the big callout numbers that appear on the case study
5. **Add keyword rankings** (SEO only)
6. **Fill Before & After bullets**
7. Click **👁 Preview** to see the live case study
8. Click **💾 Save Draft** to save your work
9. Click **⬇ Export PDF** → Chrome print dialog → Save as PDF

## Tech Stack

- Pure HTML/CSS/JavaScript (no framework, no build step)
- Google Fonts: Syne + Plus Jakarta Sans
- Anthropic Claude API for AI copy polish
- localStorage for draft persistence

## Notes

- No backend required — runs entirely in the browser
- The Anthropic API is called directly from the browser (no API key needed in this setup — Anthropic handles auth via the proxy)
- Internal use only — no authentication layer
