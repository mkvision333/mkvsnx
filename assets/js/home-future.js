(function(){
  const visual=document.querySelector('[data-hero-3d]');
  const space=document.querySelector('[data-hero-space]');
  if(!visual||!space)return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  let targetX=-5,targetY=-8,currentX=-5,currentY=-8;
  let dragging=false,lastX=0,lastY=0,dragX=0,dragY=0;
  const clamp=(n,min,max)=>Math.min(Math.max(n,min),max);

  function setFromPointer(e){
    const r=visual.getBoundingClientRect();
    const nx=(e.clientX-r.left)/r.width-.5;
    const ny=(e.clientY-r.top)/r.height-.5;
    targetY=clamp(nx*20+dragY,-24,24);
    targetX=clamp(-ny*15+dragX,-18,18);
    visual.style.setProperty('--px',`${nx*18}px`);
    visual.style.setProperty('--py',`${ny*14}px`);
  }

  visual.addEventListener('pointermove',e=>{
    if(dragging){
      dragY=clamp(dragY+(e.clientX-lastX)*.22,-20,20);
      dragX=clamp(dragX-(e.clientY-lastY)*.18,-15,15);
      lastX=e.clientX;lastY=e.clientY;
    }
    setFromPointer(e);
  });
  visual.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;visual.setPointerCapture?.(e.pointerId)});
  visual.addEventListener('pointerup',()=>dragging=false);
  visual.addEventListener('pointercancel',()=>dragging=false);
  visual.addEventListener('pointerleave',()=>{if(!dragging){targetX=-5;targetY=-8}});

  function tick(){
    currentX+=(targetX-currentX)*.075;
    currentY+=(targetY-currentY)*.075;
    space.style.setProperty('--rx',`${currentX}deg`);
    space.style.setProperty('--ry',`${currentY}deg`);
    requestAnimationFrame(tick);
  }
  tick();

  const burger=document.querySelector('[data-future-menu]');
  const links=document.querySelector('[data-future-links]');
  burger?.addEventListener('click',()=>{
    const open=links?.classList.toggle('is-open');
    burger.setAttribute('aria-expanded',String(!!open));
  });
})();
