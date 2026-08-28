(function () {
  const body = document.body;
  const base = body.dataset.base || "";
  const page = body.dataset.page || "";
  const appSlug = body.dataset.app || "";
  const homeHref = `${base}index.html`;
  const themeKey = "mkvision-theme";

  const navItems = [
    { key: "home", label: "Home", href: homeHref },
    { key: "apps", label: "Apps", href: page === "home" ? "#apps" : `${homeHref}#apps` },
    { key: "about", label: "About", href: `${base}about/index.html` },
    { key: "support", label: "Support", href: `${base}support/index.html` },
    { key: "privacy", label: "Privacy", href: `${base}privacy/index.html` },
    { key: "terms", label: "Terms", href: `${base}terms/index.html` },
    { key: "contact", label: "Contact", href: `${base}contact/index.html` }
  ];

  const socialItems = [
    { label: "GitHub", href: "https://github.com/mkvision333" },
    { label: "Play Store", href: "https://play.google.com/store/apps/dev?id=MK+VISION" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" }
  ];

  const headerRoot = document.querySelector("[data-site-header]");
  const footerRoot = document.querySelector("[data-site-footer]");

  function getTheme() {
    const saved = localStorage.getItem(themeKey);
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    body.dataset.theme = theme;
    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
      toggle.innerHTML = theme === "dark" ? '<span aria-hidden="true">Sun</span><span>Light</span>' : '<span aria-hidden="true">Moon</span><span>Dark</span>';
    }
  }

  function toggleTheme() {
    const next = body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(themeKey, next);
    applyTheme(next);
  }

  function renderHeader() {
    if (!headerRoot) {
      return;
    }

    headerRoot.innerHTML = `
      <header class="site-header">
        <div class="container nav-shell">
          <a class="brand" href="${homeHref}" aria-label="MKVSNX home">
            <span class="brand-mark">MK</span>
            <span class="brand-text">MKVSNX<small>Apps • Software • AI</small></span>
          </a>
          <div class="nav-actions">
            <button class="button button-secondary theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme"></button>
            <button class="button button-secondary menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
          </div>
          <nav class="nav-links" id="site-nav" aria-label="Primary navigation">
            ${navItems.map((item) => `<a href="${item.href}" ${item.key === page ? 'aria-current="page"' : ""}>${item.label}</a>`).join("")}
          </nav>
        </div>
      </header>
    `;

    const toggle = headerRoot.querySelector(".menu-toggle");
    const nav = headerRoot.querySelector(".nav-links");
    const themeToggle = headerRoot.querySelector("[data-theme-toggle]");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    }
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
      applyTheme(getTheme());
    }
  }

  function renderFooter() {
    if (!footerRoot) {
      return;
    }

    const year = new Date().getFullYear();
    const supportHref = appSlug ? `${base}${appSlug}/support.html` : `${base}support/index.html`;
    const privacyHref = appSlug ? `${base}${appSlug}/privacy.html` : `${base}privacy/index.html`;
    const termsHref = appSlug ? `${base}${appSlug}/terms.html` : `${base}terms/index.html`;
    const appLinks = [
      ["Build Book", `${base}build-book/index.html`],
      ["Pro KP Astrology", `${base}pro-kp-astrology/index.html`],
      ["Weather Atmos 3D", `${base}weather-atmos-3d/index.html`],
      ["APPEL", `${base}appel/index.html`],
      ["Games", `${base}games/index.html`],
      ["Fitness", `${base}fitness/index.html`],
      ["Health", `${base}health/index.html`],
      ["Media", `${base}media/index.html`]
    ];

    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-shell footer-grid">
            <div>
              <strong>Apps</strong>
              <div class="footer-stack">
                ${appLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}
              </div>
            </div>
            <div>
              <strong>Company</strong>
              <div class="footer-stack">
                <a href="${base}about/index.html">About</a>
                <a href="${supportHref}">Support</a>
                <a href="${base}contact/index.html">Contact</a>
                <a href="${privacyHref}">Privacy</a>
                <a href="${termsHref}">Terms</a>
              </div>
            </div>
            <div>
              <strong>Follow</strong>
              <div class="footer-stack">
                ${socialItems.map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`).join("")}
              </div>
            </div>
            <div>
              <strong>MKVSNX</strong>
              <div class="footer-copy">Premium mobile software from India with a privacy-ready structure for every app.</div>
              <div class="footer-copy">Response window: within 3 business days.</div>
              <div class="footer-copy">Copyright ${year} MKVSNX. Made in India.</div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function setupReveal(scope) {
    const items = (scope || document).querySelectorAll("[data-reveal]");
    if (!items.length || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    items.forEach((item) => observer.observe(item));
  }

  function setupRipples(scope) {
    (scope || document).querySelectorAll(".button").forEach((button) => {
      if (button.dataset.rippleBound === "true") {
        return;
      }
      button.dataset.rippleBound = "true";
      button.addEventListener("click", (event) => {
        const circle = document.createElement("span");
        circle.className = "ripple";
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - diameter / 2}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - diameter / 2}px`;
        button.querySelector(".ripple")?.remove();
        button.appendChild(circle);
      });
    });
  }

  async function renderAppCards() {
    const mounts = document.querySelectorAll("[data-app-grid]");
    if (!mounts.length) {
      return;
    }

    const apps = await window.MKVSNXApps.load(base);
    mounts.forEach((mount) => {
      const mode = mount.dataset.appGrid;
      const query = (mount.dataset.search || "").trim().toLowerCase();
      let filtered = mode === "featured" ? apps.slice(0, 4) : apps.slice();
      if (mode === "coming-soon") {
        filtered = filtered.filter((app) => app.status === "Coming Soon");
      }
      if (query) {
        filtered = filtered.filter((app) => {
          const haystack = `${app.name} ${app.category} ${app.description} ${app.features.join(" ")}`.toLowerCase();
          return haystack.includes(query);
        });
      }

      mount.innerHTML = filtered.map((app) => `
        <article class="app-card" data-reveal>
          <div class="app-icon accent-${app.accent}">${app.icon}</div>
          <div class="pill-row">
            <span class="pill">${app.category}</span>
            <span class="pill">${app.status}</span>
          </div>
          <h3>${app.name}</h3>
          <p>${app.description}</p>
          <ul class="feature-list">
            ${app.features.slice(0, 4).map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <div class="button-row">
            <a class="button button-primary" href="${base}${app.slug}/${mode === "support" ? "support.html" : mode === "privacy" ? "privacy.html" : "index.html"}">${mode === "support" ? "Support" : mode === "privacy" ? "Privacy Policy" : "Learn More"}</a>
            <a class="button button-secondary" href="${base}${app.slug}/${mode === "support" ? "privacy.html" : "support.html"}">${mode === "support" ? "Privacy" : "Support"}</a>
          </div>
        </article>
      `).join("");

      if (!filtered.length) {
        mount.innerHTML = `<article class="info-card" data-reveal><h3>No matching apps</h3><p>Try a different search term or browse the full portfolio from the Apps section.</p></article>`;
      }

      setupReveal(mount);
      setupRipples(mount);
    });
  }

  function setupSearch() {
    const input = document.querySelector("[data-app-search]");
    const mounts = document.querySelectorAll("[data-app-grid-searchable]");
    if (!input || !mounts.length) {
      return;
    }

    const applySearch = () => {
      mounts.forEach((mount) => {
        mount.dataset.search = input.value;
      });
      renderAppCards();
    };

    input.addEventListener("input", applySearch);
  }

  renderHeader();
  renderFooter();
  applyTheme(getTheme());
  setupReveal();
  setupRipples();
  setupSearch();
  renderAppCards();
})();
