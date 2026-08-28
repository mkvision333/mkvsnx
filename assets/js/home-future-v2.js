(function(){
  const visual=document.querySelector('[data-hero-3d]');
  if(!visual)return;
  const glow=visual.querySelector('.hero-pointer-glow');
  const chips=[...visual.querySelectorAll('.float-chip')];
  const orbs=[...visual.querySelectorAll('.orb,.cube')];
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  let tx=0,ty=0,cx=0,cy=0,vx=0,vy=0,lastX=0,lastY=0,lastT=performance.now();
  function pointer(e){
    const r=visual.getBoundingClientRect();
    const nx=(e.clientX-r.left)/r.width;
    const ny=(e.clientY-r.top)/r.height;
    tx=(nx-.5)*2; ty=(ny-.5)*2;
    const now=performance.now(); const dt=Math.max(16,now-lastT);
    vx=(e.clientX-lastX)/dt; vy=(e.clientY-lastY)/dt; lastX=e.clientX;lastY=e.clientY;lastT=now;
    visual.style.setProperty('--mx',`${nx*100}%`);visual.style.setProperty('--my',`${ny*100}%`);
  }
  visual.addEventListener('pointermove',pointer,{passive:true});
  visual.addEventListener('pointerleave',()=>{tx=0;ty=0;vx*=.4;vy*=.4;if(glow)glow.style.opacity='.55'});
  visual.addEventListener('pointerenter',()=>{if(glow)glow.style.opacity='1'});

  function frame(){
    cx+=(tx-cx)*.055; cy+=(ty-cy)*.055; vx*=.94;vy*=.94;
    chips.forEach((chip,i)=>{
      const depth=(i+1)*5;
      chip.style.setProperty('--chip-x',`${cx*depth}px`);
      chip.style.setProperty('--chip-y',`${cy*depth*.65}px`);
    });
    orbs.forEach((item,i)=>{
      const depth=4+(i%3)*3;
      item.style.translate=`${cx*depth}px ${cy*depth*.7}px`;
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
