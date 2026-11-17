# Kazi Nazim — Visual Designer Portfolio

Homepage built from the Figma design (Claude-design › Page 3 › Home, 1440px) using plain HTML, CSS and JavaScript. There's no build step.

## Run it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Structure

```
index.html          Homepage markup, section by section (navbar → footer)
about.html          About page (Figma: Page 3 › About): Who AM I, bio card, career stats, work experience
works.html          Works page (Figma: Page 3 › Work): all 8 project cards
contact.html        Contact page (Figma: Page 3 › Contact): contact form (prototype: validates, doesn't send yet)
css/styles.css      Design tokens, components, sections, responsive rules
js/main.js          Mobile menu, scroll-spy, ticker, testimonials carousel, newsletter form
assets/images/      Photos and illustrations exported from Figma
assets/icons/       SVG icons, logos and background patterns exported from Figma
assets/fonts/       Display font files
```

## Display font (Gondens DEMO)

The headings use **Gondens DEMO**. Add the licensed font files to `assets/fonts/` with these names (any subset of formats works):

```
GondensDEMO-Regular.woff2
GondensDEMO-Regular.woff
GondensDEMO-Regular.otf
GondensDEMO-Regular.ttf
```

Until they're added, the page uses League Gothic (SIL Open Font License, self-hosted) scaled with `size-adjust` to roughly match Gondens. Expect a few 404s for the missing Gondens files in the console until then.

## Responsive behaviour

Figma only has a desktop frame for this page, so smaller sizes are adapted from it:

- **> 1360px**: matches the 1440 design.
- **≤ 1180px**: the card grids become fluid.
- **≤ 900px**: hamburger menu, and the About, Works, Testimonials and footer sections stack.
- **≤ 640px**: the hero switches to its own phone composition.

## Editing content

- **Testimonials**: copy a `<li class="testimonial">` block in `index.html`. The arrows step through all of them (two at a time on desktop, one on smaller screens).
- **Projects / clients**: copy a `<li>` in `.works__grid` or `.clients__list`. The homepage shows a 4-project preview; works.html lists them all.
- **Work experience** (about.html): copy a `<li class="job">` block in `.experience__list`.
- **Links**: project, client and social links currently point to `#`. Replace them with the real URLs.
