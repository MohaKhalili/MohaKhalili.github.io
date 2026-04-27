(function () {
  const data = window.PORTFOLIO_DATA;
  const currentAreaSlug = document.body.dataset.area || "";
  const isHome = document.body.dataset.page === "home";
  const areaBySlug = Object.fromEntries(data.areas.map((area) => [area.slug, area]));
  const activeArea = currentAreaSlug ? areaBySlug[currentAreaSlug] : null;

  if (activeArea) {
    document.documentElement.style.setProperty("--accent", activeArea.accent);
    document.documentElement.style.setProperty("--accent-soft", hexToRgba(activeArea.accent, 0.12));
    document.title = `${activeArea.title} | ${data.owner.name}`;
  }

  function hexToRgba(hex, alpha) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function escapeHTML(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function pageFor(area) {
    return `${area.slug}.html`;
  }

  function renderNav() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const links = data.areas
      .map((area) => {
        const active = currentAreaSlug === area.slug ? "active" : "";
        return `<a class="${active}" href="${pageFor(area)}">${escapeHTML(shortAreaName(area.title))}</a>`;
      })
      .join("");

    nav.innerHTML = `
      <a class="brand" href="index.html" aria-label="${escapeHTML(data.owner.name)} home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>${escapeHTML(data.owner.name)}</span>
      </a>
      <nav class="nav-links" aria-label="Portfolio sections">
        <a class="${isHome ? "active" : ""}" href="index.html">Home</a>
        ${links}
      </nav>
    `;
  }

  function shortAreaName(title) {
    return title
      .replace("Battery Technology & Automotive", "Battery")
      .replace("Robotics & Control", "Robotics")
      .replace("IoT & Smart Devices", "IoT")
      .replace("Power Electronics & Energy", "Energy");
  }

  function renderFooter() {
    const footer = document.querySelector("[data-footer]");
    if (!footer) return;
    footer.innerHTML = `
      <div class="footer-inner">
        <strong>${escapeHTML(data.owner.name)}</strong>
        <span>${escapeHTML(data.owner.tagline)}</span>
      </div>
    `;
  }

  function tagList(tags) {
    return `<ul class="tags">${tags.map((tag) => `<li>${escapeHTML(tag)}</li>`).join("")}</ul>`;
  }

  function imageMarkup(images, className = "") {
    const gridClass = images.length > 1 ? "media-grid" : "";
    return `
      <div class="project-media ${gridClass} ${className}">
        ${images
          .map(
            (image) =>
              `<img src="${escapeHTML(image.src)}" alt="${escapeHTML(image.alt)}" loading="lazy">`
          )
          .join("")}
      </div>
    `;
  }

  function renderHome() {
    const root = document.querySelector("[data-home]");
    if (!root) return;

    const intro = data.owner.intro && data.owner.intro.trim()
      ? `<p class="intro-copy">${escapeHTML(data.owner.intro)}</p>`
      : `<div class="intro-space" aria-label="Personal introduction space"></div>`;

    const areaCards = data.areas
      .map(
        (area) => `
          <a class="area-card" style="--area-accent:${area.accent}" href="${pageFor(area)}">
            <img src="${escapeHTML(area.image)}" alt="${escapeHTML(area.title)} project image" loading="lazy">
            <span class="card-meta">${escapeHTML(area.countLabel)}</span>
            <h3>${escapeHTML(area.title)}</h3>
            <p>${escapeHTML(area.summary)}</p>
            <span class="card-link">View projects <span aria-hidden="true">→</span></span>
          </a>
        `
      )
      .join("");

    root.innerHTML = `
      <section class="hero" aria-labelledby="hero-title">
        <div>
          <p class="eyebrow">${escapeHTML(data.owner.eyebrow)}</p>
          <h1 id="hero-title">${escapeHTML(data.owner.name)}</h1>
          <p class="lead">${escapeHTML(data.owner.tagline)}</p>
          ${intro}
          <div class="hero-actions">
            <a class="button primary" href="#experience-areas">Explore projects</a>
            <a class="button secondary" href="${pageFor(data.areas[0])}">Start with Battery</a>
          </div>
        </div>
        <div class="hero-photo-card">
          <img class="hero-photo" src="${escapeHTML(data.owner.heroImage)}" alt="${escapeHTML(data.owner.name)} presenting">
        </div>
      </section>

      <section class="section" id="experience-areas" aria-labelledby="areas-title">
        <div class="section-header">
          <p class="eyebrow">Experience Areas</p>
          <h2 id="areas-title">Project work across embedded, control, energy, and sensing systems.</h2>
          <p>${escapeHTML(data.owner.tagline)}</p>
        </div>
        <div class="area-grid">
          ${areaCards}
        </div>
      </section>
    `;
  }

  function renderAreaPage() {
    const root = document.querySelector("[data-area-page]");
    if (!root || !activeArea) return;

    const projects = data.projects[activeArea.slug] || [];
    const projectMarkup = projects
      .map(
        (project) => `
          <article class="project-card">
            ${imageMarkup(project.images)}
            <div class="project-content">
              <h3>${escapeHTML(project.title)}</h3>
              <p class="project-summary">${escapeHTML(project.summary)}</p>
              <p class="context">${escapeHTML(project.context)}</p>
              ${tagList(project.tags)}
              <div class="detail-grid">
                <section class="detail-section full">
                  <h4>Role / Focus</h4>
                  <p>${escapeHTML(project.role)}</p>
                </section>
                <section class="detail-section">
                  <h4>Technical Highlights</h4>
                  <ul>${project.highlights.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
                </section>
                <section class="detail-section">
                  <h4>Impact / Result</h4>
                  <ul>${project.impact.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
                </section>
              </div>
            </div>
          </article>
        `
      )
      .join("");

    root.innerHTML = `
      <a class="back-link" href="index.html">← Back to home</a>
      <section class="area-hero" aria-labelledby="area-title">
        <div>
          <span class="area-kicker">${escapeHTML(activeArea.countLabel)}</span>
          <h1 id="area-title">${escapeHTML(activeArea.title)}</h1>
          <p class="lead">${escapeHTML(activeArea.summary)}</p>
        </div>
        <div class="area-photo-card">
          <img class="area-photo" src="${escapeHTML(activeArea.image)}" alt="${escapeHTML(activeArea.title)} representative project image">
        </div>
      </section>
      <section class="project-list" aria-label="${escapeHTML(activeArea.title)} projects">
        ${projectMarkup}
      </section>
    `;
  }

  renderNav();
  renderFooter();
  renderHome();
  renderAreaPage();
})();