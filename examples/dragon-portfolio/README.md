# Yue's dragon portfolio

Three pages in plain HTML, CSS, and JavaScript:

- `index.html`: home and featured dragon.
- `work.html`: both drawings, an accessible enlarged view, and image downloads.
- `about.html`: introduction and an optional drawing pad with PNG export.

Open `index.html` in a browser. No installation or build step is required.

For a local preview server, run `python -m http.server 4173 --bind 127.0.0.1` in this folder, then visit `http://127.0.0.1:4173`.

Edit `profile.js` to change the name, role, or optional public contact link. Contact is empty by default. Edit page text directly in the HTML files, and update colors in the variables at the beginning of `style.css`.

The original supplied drawings are in `assets/`. The mouse trail fades and can be switched off in the footer. Mouse decoration is disabled for touch input and reduced motion. Drawing-pad sketches download to the visitor's device; they are not uploaded or stored in a shared gallery.
