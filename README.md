# Mohammad Khalili Project Portfolio Website

This is a static GitHub Pages website generated from the project portfolio PowerPoint.

## Pages

- `index.html` — landing page / first portfolio page with an editable introduction space.
- `battery-technology-automotive.html` — 5 projects.
- `robotics-control.html` — 8 projects.
- `iot-smart-devices.html` — 3 projects.
- `power-electronics-energy.html` — 2 projects.
- `test-equipment.html` — 2 projects.

## How to edit your content

Most text is in:

```text
assets/content.js
```

Update the introduction, email, GitHub, LinkedIn, project descriptions, tags, and placeholder text there.

## How to add project photos

Project pages currently include image placeholder boxes. To add real images:

1. Put your image files in `assets/`.
2. Edit the corresponding project card logic in `assets/area.js`, or replace the placeholder boxes in the HTML layout with `<img>` tags.
3. Recommended image size: 1200 × 800 px or similar landscape screenshots/photos.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `mohammad-khalili.github.io` or `portfolio`.
2. Upload all files from this folder.
3. Go to **Settings → Pages**.
4. Select **Deploy from branch**.
5. Choose the `main` branch and `/root`.
6. Save and wait for GitHub to publish the site.

## Suggested Codex prompt for future edits

```text
This is a static GitHub Pages portfolio website. Please edit assets/content.js and assets/styles.css only unless structural HTML changes are required. Keep the design close to the original PowerPoint portfolio style: light warm background, large dark typography, colored project-area accents, clean cards, and responsive pages.
```
