const container = document.getElementById('crackers');
const colors = ['#ff4d4d','#ffd166','#6bf178','#4dd7ff','#c77dff','#ff9f1c'];

function spawnFirework(xPercent){
  const count = 28 + Math.floor(Math.random()*12);
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'spark';
    const color = colors[Math.floor(Math.random()*colors.length)];
    el.style.background = color;
    el.style.left = (xPercent + (Math.random()*10-5)) + '%';
    el.style.bottom = (5 + Math.random()*5) + '%';
    el.style.transform = `translateX(${(Math.random()*200-100)}px)`;
    el.style.animationDelay = (Math.random()*0.2)+'s';
    el.style.boxShadow = `0 0 12px ${color}, 0 0 30px ${color}`;
    container.appendChild(el);
    setTimeout(()=> el.remove(), 1600);
  }
}

setInterval(()=> spawnFirework(Math.random()*90+5), 900);

