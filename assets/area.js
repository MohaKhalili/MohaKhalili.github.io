function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function listItems(items) {
  return (items || []).map((item) => `<li>${escapeHTML(item)}</li>`).join("");
}

const data = window.PORTFOLIO_DATA;
const slug = document.body.dataset.areaSlug;
const area = data.areas.find((item) => item.slug === slug) || data.areas[0];

document.title = `${area.title} · ${data.owner.name}`;
document.querySelector('meta[name="description"]').setAttribute("content", area.summary);
document.documentElement.style.setProperty("--area-color", area.color);

document.querySelector("[data-area-kicker]").textContent = `${area.sectionNumber} · ${data.owner.eyebrow}`;
document.querySelector("[data-area-title]").textContent = area.title;
document.querySelector("[data-area-summary]").textContent = area.summary;
document.querySelector("[data-stat-number]").textContent = area.projects.length;
document.querySelector("[data-stat-label]").textContent = area.projects.length === 1 ? "project in this area" : "projects in this area";
document.querySelector("[data-footer-left]").textContent = data.owner.footer;
document.querySelector("[data-footer-number]").textContent = String(Number(area.sectionNumber) + 1).padStart(2, "0");

const nav = document.querySelector("[data-top-nav]");
nav.innerHTML = data.areas.map((item) => `
  <a style="--area-color: ${item.color}" ${item.slug === slug ? 'aria-current="page"' : ""} href="${item.slug}.html">${escapeHTML(item.shortTitle)}</a>
`).join("");

const projectGrid = document.querySelector("[data-project-list]");
projectGrid.innerHTML = area.projects.map((project) => `
  <article class="project-card" id="project-${escapeHTML(project.number)}" style="--area-color: ${area.color}">
    <header class="project-card-header">
      <div>
        <div class="project-meta">${escapeHTML(project.number)} · ${escapeHTML(project.organization)}</div>
        <h3>${escapeHTML(project.title)}</h3>
        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
      </div>
      <div class="tag-list">
        ${(project.tags || []).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
      </div>
    </header>

    <div class="project-body">
      <section class="project-copy">
        <h4>Role / Focus</h4>
        <p>${escapeHTML(project.focus)}</p>

        <h4>Technical Highlights</h4>
        <ul>${listItems(project.highlights)}</ul>

        <h4>Impact / Result</h4>
        <ul>${listItems(project.impact)}</ul>
      </section>

      <aside class="project-media" aria-label="Project image placeholders">
        ${(project.imagePlaceholders || []).map((label, index) => `
          <div class="media-placeholder">
            <strong>Image ${index + 1}</strong>
            <span>${escapeHTML(label)}</span>
            <small>replace with photo · schematic · test setup · UI screenshot</small>
          </div>
        `).join("")}
      </aside>
    </div>
  </article>
`).join("");

const contact = document.querySelector("[data-contact-strip]");
contact.innerHTML = `
  <div>
    <strong>Need to add your real photos or GitHub links?</strong>
    <p>Edit text in <code>assets/content.js</code> and replace placeholders with images when ready.</p>
  </div>
  <div class="contact-links">
    <a href="${escapeHTML(data.owner.github)}">GitHub</a>
    <a href="${escapeHTML(data.owner.linkedin)}">LinkedIn</a>
  </div>
`;
