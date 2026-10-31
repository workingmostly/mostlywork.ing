# mostlywork.ing

A static site with no build step, served by Vercel from the repository root.

- `index.html`: the homepage
- `404.html`: shown for any path that doesn't exist
- `styles.css`: shared by both pages
- `fonts/`: self-hosted [Instrument Sans](https://github.com/Instrument/instrument-sans) and [DM Mono](https://github.com/googlefonts/dm-mono), both under the SIL Open Font License
- `fonts/trjn-davinci-*-trial.woff2`: [TRJN DaVinci](http://virgileflores.com/typefoundry) by Virgile Flores: Bold for the main heading, Italic for project names. **This is the trial version**: replace it with licensed web font files before the site goes live.
- `og.png`: the link preview image (1200×630), a render of the homepage's headline
- `apple-touch-icon.png`, `favicon.*`: icons

To preview locally, run a static server from the repository root, for example:

```bash
python3 -m http.server 8000
```
