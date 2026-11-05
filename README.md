# mostlywork.ing

A static site with no build step, served by Vercel from the repository root.

- `index.html`: the homepage
- `404.html`: shown for any path that doesn't exist
- `styles.css`: shared by both pages
- `fonts/`: self-hosted [Inter Tight](https://github.com/rsms/inter-tight) (heading and product names) and [Instrument Sans](https://github.com/Instrument/instrument-sans) (everything else), both under the SIL Open Font License
- `og.png`: the link preview image (1200×630), a render of the homepage's headline
- `apple-touch-icon.png`, `favicon.*`: icons

To preview locally, run a static server from the repository root, for example:

```bash
python3 -m http.server 8000
```
