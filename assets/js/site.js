(function () {
  const body = document.body;
  const base = body.dataset.base || "";
  const page = body.dataset.page || "";
  const appSlug = body.dataset.app || "";
  const homeHref = `${base}index.html`;
  const headerRoot = document.querySelector("[data-site-header]");
  const footerRoot = document.querySelector("[data-site-footer]");

  function renderHeader(){
    if(!headerRoot) return;
    const nav = [
      ["home","Home",homeHref],
      ["solutions","Solutions",`${homeHref}#solutions`],
      ["products","Products",`${homeHref}#products`],
      ["about","About",`${base}about/index.html`],
      ["support","Support",`${base}support/index.html`],
      ["privacy","Privacy",`${base}privacy/index.html`],
      ["terms","Terms",`${base}terms/index.html`],
      ["contact","Contact",`${base}contact/index.html`]
    ];
    headerRoot.innerHTML = `<header class="home-nav global-home-nav"><div class="container"><a class="future-brand" href="${homeHref}" aria-label="MKVSNX home"><img class="future-logo-mark" src="${base}assets/icons/mkvsnx-mvx.svg" alt=""><span>MKVSNX</span></a><nav class="future-links" data-future-links aria-label="Primary navigation">${nav.map(([key,label,href])=>`<a href="${href}" ${key===page?'aria-current="page"':''}>${label}</a>`).join('')}</nav><div class="future-actions"><button class="nav-burger" type="button" data-future-menu aria-label="Open menu" aria-expanded="false">☰</button></div></div></header>`;
    const btn=headerRoot.querySelector('[data-future-menu]');
    const menu=headerRoot.querySelector('[data-future-links]');
    if(btn&&menu){btn.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');btn.setAttribute('aria-expanded',String(open));});}
  }

  function renderFooter(){
    if(!footerRoot)return;
    const year=new Date().getFullYear();
    const supportHref=appSlug?`${base}${appSlug}/support.html`:`${base}support/index.html`;
    const privacyHref=appSlug?`${base}${appSlug}/privacy.html`:`${base}privacy/index.html`;
    const termsHref=appSlug?`${base}${appSlug}/terms.html`:`${base}terms/index.html`;
    footerRoot.innerHTML=`<footer class="site-footer"><div class="container"><div class="footer-shell footer-grid"><div><div class="footer-brand-row"><img src="${base}assets/icons/mkvsnx-mvx.svg" alt=""><strong>MKVSNX</strong></div><div class="footer-copy">Apps • Software • AI<br>Focused digital products built to evolve.</div></div><div><strong>Explore</strong><div class="footer-stack"><a href="${base}index.html">Home</a><a href="${base}index.html#solutions">Solutions</a><a href="${base}index.html#products">Products</a><a href="${base}about/index.html">About</a><a href="${supportHref}">Support</a></div></div><div><strong>Legal & Contact</strong><div class="footer-stack"><a href="${privacyHref}">Privacy Center</a><a href="${termsHref}">Terms</a><a href="${base}contact/index.html">Contact</a></div></div><div><strong>Products</strong><div class="footer-stack"><a href="${base}build-book/index.html">Build Book</a><a href="${base}pro-kp-astrology/index.html">Pro KP Astrology</a><span>Reawakening — In Development</span><span>More products — Upcoming</span></div><div class="footer-copy">© ${year} MKVSNX. India.</div></div></div></div></footer>`;
  }

  function setupReveal(scope){
    const items=(scope||document).querySelectorAll('[data-reveal]');
    if(!items.length||!('IntersectionObserver' in window)){items.forEach(i=>i.classList.add('is-visible'));return;}
    const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:.16});
    items.forEach(i=>observer.observe(i));
  }

  function setupRipples(scope){
    (scope||document).querySelectorAll('.button').forEach(button=>{if(button.dataset.rippleBound==='true')return;button.dataset.rippleBound='true';button.addEventListener('click',event=>{const circle=document.createElement('span');circle.className='ripple';const diameter=Math.max(button.clientWidth,button.clientHeight);circle.style.width=`${diameter}px`;circle.style.height=`${diameter}px`;circle.style.left=`${event.clientX-button.getBoundingClientRect().left-diameter/2}px`;circle.style.top=`${event.clientY-button.getBoundingClientRect().top-diameter/2}px`;button.querySelector('.ripple')?.remove();button.appendChild(circle);});});
  }

  async function renderAppCards(){
    const mounts=document.querySelectorAll('[data-app-grid]');
    if(!mounts.length||!window.MKVSNXApps)return;
    const apps=await window.MKVSNXApps.load(base);
    mounts.forEach(mount=>{const mode=mount.dataset.appGrid;const query=(mount.dataset.search||'').trim().toLowerCase();let filtered=mode==='featured'?apps.slice(0,4):apps.slice();if(mode==='coming-soon')filtered=filtered.filter(app=>app.status==='Coming Soon');if(query)filtered=filtered.filter(app=>`${app.name} ${app.category} ${app.description} ${app.features.join(' ')}`.toLowerCase().includes(query));mount.innerHTML=filtered.map(app=>`<article class="app-card" data-reveal><div class="app-icon accent-${app.accent}">${app.icon}</div><div class="pill-row"><span class="pill">${app.category}</span><span class="pill">${app.status}</span></div><h3>${app.name}</h3><p>${app.description}</p><ul class="feature-list">${app.features.slice(0,4).map(feature=>`<li>${feature}</li>`).join('')}</ul><div class="button-row"><a class="button button-primary" href="${base}${app.slug}/${mode==='support'?'support.html':mode==='privacy'?'privacy.html':'index.html'}">${mode==='support'?'Support':mode==='privacy'?'Privacy Policy':'Learn More'}</a><a class="button button-secondary" href="${base}${app.slug}/${mode==='support'?'privacy.html':'support.html'}">${mode==='support'?'Privacy':'Support'}</a></div></article>`).join('');if(!filtered.length)mount.innerHTML='<article class="info-card" data-reveal><h3>No matching apps</h3><p>Try a different search term or browse the full portfolio.</p></article>';setupReveal(mount);setupRipples(mount);});
  }

  function setupSearch(){const input=document.querySelector('[data-app-search]'),mounts=document.querySelectorAll('[data-app-grid-searchable]');if(!input||!mounts.length)return;input.addEventListener('input',()=>{mounts.forEach(m=>m.dataset.search=input.value);renderAppCards();});}

  if(page!=="home"){
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href=`${base}assets/css/site-future.css`;
    document.head.appendChild(css);
  }
  renderHeader();renderFooter();setupReveal();setupRipples();setupSearch();renderAppCards();
})();
