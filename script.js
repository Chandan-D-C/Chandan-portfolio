const header=document.getElementById('header');

/* hero typewriter */
(function(){
  const l1 = document.getElementById('twLine1');
  const l2 = document.getElementById('twLine2');
  const cursor = document.getElementById('twCursor');
  if(!l1 || !l2) return;
  const line1 = "Hi,";
  const line2 = "I am Chandan";
  let i = 0;
  function typeLine1(){
    if(i <= line1.length){
      l1.textContent = line1.slice(0,i);
      i++;
      setTimeout(typeLine1, 90);
    } else {
      i = 0;
      setTimeout(typeLine2, 250);
    }
  }
  function typeLine2(){
    if(i <= line2.length){
      l2.textContent = line2.slice(0,i);
      l2.appendChild(cursor);
      i++;
      setTimeout(typeLine2, 70);
    }
  }
  setTimeout(typeLine1, 500);
})();
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});

const hamburger=document.getElementById('hamburger'),mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');hamburger.setAttribute('aria-expanded',open);});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');hamburger.setAttribute('aria-expanded',false);}));

const revealEls=document.querySelectorAll('.reveal,.stagger');
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.12});
revealEls.forEach(el=>io.observe(el));

const RESUME_URL='Chandan_DC_Resume.pdf';
const downloadIds=['resumeHeroLink','resumeCtaDownload'];
[document.getElementById('resumeNavLink'),document.getElementById('resumeMobileLink'),document.getElementById('resumeHeroLink'),document.getElementById('resumeCtaDownload'),document.getElementById('resumeCtaView')].forEach(el=>{
  if(!el)return;
  el.href=RESUME_URL;
  el.target='_blank';
  el.rel='noopener';
  if(downloadIds.includes(el.id)){el.setAttribute('download','Chandan_DC_Resume.pdf');}
});

/* smooth custom cursor */
if(window.matchMedia('(min-width:901px)').matches){
  const dot=document.getElementById('cursor-dot'), ring=document.getElementById('cursor-ring');
  let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;});
  function loop(){rx+=(mx-rx)*0.16;ry+=(my-ry)*0.16;ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop);}
  loop();
  document.querySelectorAll('a,button,.chip,.icon-card,.project-card,.toolkit-group').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('hover'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('hover'));
  });
  window.addEventListener('mousedown',()=>ring.classList.add('click'));
  window.addEventListener('mouseup',()=>ring.classList.remove('click'));
}
