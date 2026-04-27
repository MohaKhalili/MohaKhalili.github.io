function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

const data = window.PORTFOLIO_DATA;
document.title = `${data.owner.name} · ${data.owner.eyebrow}`;

document.querySelector("[data-owner-name]").innerHTML = escapeHTML(data.owner.name).replace(" ", "<br>");
document.querySelector("[data-eyebrow]").textContent = data.owner.eyebrow;
document.querySelector("[data-tagline]").textContent = data.owner.tagline;
document.querySelector("[data-footer-left]").textContent = data.owner.footer;

const intro = document.querySelector("[data-intro]");
intro.innerHTML = `
  <span>${escapeHTML(data.owner.introTitle)}</span>
  <p>${escapeHTML(data.owner.intro)}</p>
`;

const list = document.querySelector("[data-area-list]");
list.innerHTML = data.areas.map((area) => `
  <a class="area-card" style="--area-color: ${area.color}" href="${area.slug}.html" aria-label="Open ${escapeHTML(area.title)}">
    <span class="click-pill" aria-hidden="true">
      <span>Click<br>Here</span>
      <span class="arrow">↗</span>
    </span>
    <span class="area-name">${escapeHTML(area.shortTitle)}</span>
    <span class="project-count">${escapeHTML(area.countLabel)}</span>
  </a>
`).join("");
