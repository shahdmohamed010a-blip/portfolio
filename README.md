# Shahd — Full-Stack Developer Portfolio

A responsive static portfolio built with semantic HTML, CSS, and vanilla JavaScript. No build tools or backend required.

## Run locally

Serve this folder with a local development server, such as VS Code Live Server, or run `python -m http.server 8000` from this folder and open http://localhost:8000. Internet access is needed for Google Fonts; system fonts provide a fallback.

## Edit content

All portfolio content lives in `js/data.js`. Update `personalInfo`, `skills`, `experience`, `projects`, `services`, `certifications`, `socialLinks`, and `content`. The rendering code is in `js/main.js`; styling is in `css/style.css` and `css/responsive.css`.

- Photo: add `assets/images/profile/shahd-profile.jpg`, or update `personalInfo.photo`. No fake portrait is supplied.
- Project images: add `assets/images/projects/project-1-cover.webp` and screenshots such as `project-1-1.webp`. Repeat for each project or change its paths. Missing images show intentional placeholder blocks.
- Project links: replace `liveUrl`, `githubUrl`, and `caseStudyUrl` with actual URLs. `#` and empty values hide buttons.
- Video/demo: set an optional `videoUrl` to a real hosted demo URL; it appears as a Watch demo link.
- CV: place your PDF under `assets/` and set `personalInfo.cvUrl`, for example `assets/shahd-cv.pdf`.
- Social links: replace each `socialLinks` URL with your GitHub/LinkedIn profile URL.
- New project: add an object to the `projects` array with a unique ID, title, category, `categories` array, type, description, technologies, and optional featured flag. The final `.map()` provides standard image paths and placeholder links. Set image, gallery, liveUrl, githubUrl, caseStudyUrl, and videoUrl directly on an entry to override its defaults.
- Certificates: add entries to `certifications`, with title, organization, optional date, image, and URL. Custom image, date, and URL fields on an entry override the defaults. Real certificate images automatically enable preview buttons; real URLs show certificate links.
- SEO: set `personalInfo.canonicalUrl` to the final public HTTPS URL and `socialImage` to an absolute public image URL. Unconfigured values are omitted. Update static metadata in `index.html` if changing your professional positioning.

Asset paths are relative so deployment in a subdirectory works. Use optimized WebP project images; keep filenames matched to the configuration. Do not supply sensitive content in this public configuration.

## Behavior

Projects support category filtering, detail dialogs, screenshot lightboxes, and optional links. Native dialogs provide keyboard focus containment and Escape behavior. Missing screenshots cannot open lightboxes. Navigation works on mobile and highlights visible sections. Animation respects reduced-motion preferences.

The contact form validates required fields and email format, then opens an email draft via `mailto:`. It does not send messages or claim delivery. A configured email app is required; the direct email link remains available. Integrate a form endpoint if server-side delivery is wanted later.

## Deploy

Upload the folder to any static host, such as GitHub Pages, Netlify, or Cloudflare Pages. Use the repository root as the publish directory, with no build command. Configure the final canonical and social image URLs before public release. Add real CV, screenshots, certificates, and links when available, then verify them on the deployed domain.

## Review checklist

Check widths 1440, 1280, 1024, 768, 430, 390, and 375 pixels; filter each project category; open/close dialogs with keyboard and Escape; replace an image to confirm gallery previews; check CV/social/project links; test email drafts using your preferred email client. No project metrics, testimonials, clients, or URLs have been fabricated.

