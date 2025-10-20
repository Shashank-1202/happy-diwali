const container = document.getElementById('crackers');
const lampsContainer = document.getElementById('lamps');
const confettiContainer = document.getElementById('confetti');
const tagline = document.getElementById('tagline');

tagline.textContent = "Wishing you a minimal deployment error";

const colors = ['#ff4d4d','#ffd166','#6bf178','#4dd7ff','#c77dff','#ff9f1c'];

function spawnFirework(xPercent) {
  const count = 30 + Math.floor(Math.random()*15);
  for(let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'spark';
    const color = colors[Math.floor(Math.random()*colors.length)];
    el.style.background = color;
    el.style.left = (xPercent + (Math.random()*10-5)) + '%';
    el.style.bottom = (10 + Math.random()*10) + '%';
    el.style.transform = `translateX(${(Math.random()*200-100)}px)`;
    el.style.animationDelay = (Math.random()*0.3)+'s';
    el.style.boxShadow = `0 0 15px ${color}, 0 0 40px ${color}`;
    container.appendChild(el);
    setTimeout(()=> el.remove(), 1800);
  }
}

function createLamps() {
  for(let i=0;i<6;i++){
    const diya = document.createElement('div');
    diya.classList.add('diya');
    const flame = document.createElement('div');
    flame.classList.add('flame');
    diya.appendChild(flame);
    lampsContainer.appendChild(diya);
  }
}

function spawnConfetti(){
  const el = document.createElement('div');
  el.className = 'confetti-piece';
  el.style.left = Math.random()*100+'%';
  el.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  el.style.animationDuration = (2+Math.random()*3)+'s';
  confettiContainer.appendChild(el);
  setTimeout(()=> el.remove(), 5000);
}

// Change tagline every 5 seconds
setInterval(()=> {
  tagline.textContent = taglines[Math.floor(Math.random()*taglines.length)];
}, 5000);

createLamps();
setInterval(()=> spawnFirework(Math.random()*90+5), 800);
setInterval(spawnConfetti, 300);

