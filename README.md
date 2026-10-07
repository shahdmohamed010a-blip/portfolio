# Shahd Mohamed Abo-Elmkarem — Portfolio

A responsive static portfolio built with semantic HTML, CSS, and vanilla JavaScript. It has no framework, package installation, backend, or build step.

## Project structure

```text
.
├── .github/workflows/pages.yml   # Automatic GitHub Pages deployment
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── hero.css
│   ├── projects.css
│   ├── footer.css
│   └── mobile.css
├── js/
│   ├── data.js                   # Portfolio content and links
│   └── main.js                   # Rendering and interactions
├── index.html
├── robots.txt
└── sitemap.xml
```

## Run locally

From the repository root:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Edit content

Most content is in `js/data.js`, including profile information, skills, experience, projects, services, social links, and the public site URL. Layout and interactions are in `js/main.js`; styles are split by area under `css/`.

All asset paths are relative so the site works correctly from the GitHub Pages repository subdirectory.

## Publish with GitHub Pages

1. Make the GitHub repository **Public**.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main`.
5. The workflow in `.github/workflows/pages.yml` publishes the site automatically.

Expected live URL:

`https://shahdmohamed010a-blip.github.io/portfolio/`

The workflow can also be started manually from the repository’s **Actions** tab.

## Public repository checklist

- Contact email and phone number in `js/data.js` are intentionally public.
- Do not commit API keys, passwords, private documents, or environment files.
- Replace any external project image URL if its owner does not allow hotlinking.
- Update `canonicalUrl`, `robots.txt`, and `sitemap.xml` if the final domain changes.
