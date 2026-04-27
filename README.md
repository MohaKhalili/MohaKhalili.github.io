# Mohammad Khalili — Project Portfolio Website

This is a simple static portfolio website generated from the PowerPoint project portfolio content and images.

## Files

- `index.html` — homepage with hero, introduction space, and experience areas
- `battery-technology-automotive.html`
- `robotics-control.html`
- `iot-smart-devices.html`
- `power-electronics-energy.html`
- `test-equipment.html`
- `assets/data.js` — edit portfolio text, project lists, area names, and the blank introduction field
- `assets/styles.css` — edit colors, spacing, typography, and layout
- `assets/images/` — optimized images extracted from the PowerPoint

## Add your introduction

Open `assets/data.js` and find:

```js
"intro": "",
```

Replace the empty text with your introduction, for example:

```js
"intro": "I am an embedded and control systems engineer focused on battery systems, robotics, IoT devices, and energy technology.",
```

There is no visible “Introduction” title on the homepage.

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload all files from this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save. GitHub will publish the website.
