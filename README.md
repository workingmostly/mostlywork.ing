# mostlywork.ing

A static site with no build step, served by Vercel from the repository root.

- `index.html`: the homepage
- `404.html`: shown for any path that doesn't exist
- `styles.css`: shared by both pages
- `fonts/`: self-hosted [Instrument Sans](https://github.com/Instrument/instrument-sans), under the SIL Open Font License
- `fonts/trjn-davinci-*-trial.woff2`: [TRJN DaVinci](http://virgileflores.com/typefoundry) by Virgile Flores: Semibold for the main heading, Italic for project names. **This is the trial version**: replace it with licensed web font files before the site goes live.
- `mat.svg`: the cutting mat's wear (grain, specks and fine scratches), tiled over the page
- `light/`: the window light that falls across the mat. `patch.webp` is the patch of sun through the window (over the ambient light, which is drawn in CSS, and multiplied over the page), `glow.webp` the sun's lift (screened over it), and `near.webp` and `far.webp` the leaf shadows from a plant on the sill and a tree outside, which sway
- `mat.svg` and the `light/` images are inlined at the end of `styles.css`, so the lit mat is painted complete in the very first frame. After changing one, inline it there again
- `og.png`: the link preview image (1200×630), a render of the homepage's headline
- `apple-touch-icon.png`, `favicon.*`: icons

To preview locally, run a static server from the repository root, for example:

```bash
python3 -m http.server 8000
```
