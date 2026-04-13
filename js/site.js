(function () {
  const data = window.PORTFOLIO_DATA;

  if (!data) {
    return;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  function setHtml(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = value;
    }
  }

  setText("brand-name", data.profile.name);
  setText("hero-title", data.profile.tagline);
  setText("hero-summary", data.profile.summary);
  setText("product-title", `${data.product.name} · ${data.product.oneLiner}`);
  setText("product-summary", data.product.summary);
  setText("contact-copy", data.contact.blurb);

  setHtml(
    "proof-list",
    data.proofPoints.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
  );

  setHtml(
    "roles-grid",
    data.siteRoles
      .map(
        (item, index) => `
          <article class="surface-card role-card">
            <span class="role-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "product-chips",
    data.product.chips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")
  );

  setHtml(
    "updates-list",
    data.product.updates.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
  );

  setHtml(
    "features-list",
    data.product.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
  );

  setHtml(
    "priority-list",
    data.product.priorities.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
  );

  setHtml(
    "case-study-grid",
    data.caseStudy
      .map(
        (item) => `
          <article class="case-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
            <ul class="feature-list">
              ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "readiness-grid",
    data.readiness
      .map(
        (item) => `
          <article class="readiness-card">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "experience-list",
    data.experience
      .map(
        (item) => `
          <article class="timeline-item">
            <span class="timeline-period">${escapeHtml(item.period)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
            <ul class="feature-list">
              ${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "project-grid",
    data.projects
      .map((project) => {
        const media = project.image
          ? `<div class="project-card__media" style="background-image: linear-gradient(rgba(8, 19, 29, 0.12), rgba(8, 19, 29, 0.45)), url('${escapeHtml(project.image)}');"></div>`
          : `<div class="project-card__media project-card__media--fallback"><span>${escapeHtml(project.title)}</span></div>`;

        const tags = project.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

        const footer = project.link
          ? `
              <a class="cta-link" href="${escapeHtml(project.link)}" ${
                project.external ? 'target="_blank" rel="noreferrer"' : ""
              }>
                ${escapeHtml(project.linkLabel)}
              </a>
            `
          : `<span class="project-status">공개 자료 정리 중</span>`;

        return `
          <article class="project-card">
            ${media}
            <div class="project-card__body">
              <span class="project-period">${escapeHtml(project.period)}</span>
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.summary)}</p>
              <div class="tag-list">${tags}</div>
              <div class="project-card__footer">${footer}</div>
            </div>
          </article>
        `;
      })
      .join("")
  );

  setHtml(
    "paper-list",
    data.papers
      .map(
        (paper) => `
          <article class="paper-card">
            <span class="paper-journal">${escapeHtml(paper.journal)}</span>
            <h3>${escapeHtml(paper.title)}</h3>
            <p>${escapeHtml(paper.summary)}</p>
            <div class="project-card__footer">
              <a class="cta-link" href="${escapeHtml(paper.link)}" target="_blank" rel="noreferrer">논문 보기</a>
            </div>
          </article>
        `
      )
      .join("")
  );

  setHtml(
    "contact-links",
    data.contact.links
      .map((item) => {
        const isExternal = item.href.startsWith("http");
        return `
          <a class="contact-link" href="${escapeHtml(item.href)}" ${isExternal ? 'target="_blank" rel="noreferrer"' : ""}>
            <span class="contact-link__label">${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </a>
        `;
      })
      .join("")
  );
})();
