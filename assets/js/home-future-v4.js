(function(){
  const header=document.querySelector('.home-nav');
  const navLinks=[...document.querySelectorAll('.future-links a[href^="#"]')];
  const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const visual=document.querySelector('[data-hero-3d]');
  const shine=visual?.querySelector('.mvx-specular');
  let shineBusy=false;

  const setHeader=()=>header?.classList.toggle('is-scrolled',window.scrollY>18);
  setHeader();window.addEventListener('scroll',setHeader,{passive:true});

  if('IntersectionObserver' in window&&sections.length){
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible)return;
      navLinks.forEach(a=>a.classList.toggle('is-active',a.getAttribute('href')==='#'+visible.target.id));
    },{rootMargin:'-25% 0px -60%',threshold:[.05,.2,.5]});
    sections.forEach(s=>observer.observe(s));
  }

  /* Re-trigger the glass sweep once per genuine pointer entry, never as a loop. */
  if(visual&&shine&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    visual.addEventListener('pointerenter',()=>{
      if(shineBusy)return;
      shineBusy=true;
      shine.style.animation='none';
      void shine.offsetWidth;
      shine.style.animation='mvxShineHover 1.05s cubic-bezier(.2,.7,.2,1) 1 both';
      window.setTimeout(()=>{shineBusy=false},1100);
    });
  }

  document.querySelectorAll('.future-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('[data-future-links]')?.classList.remove('is-open')));
})();
