const planetMercury = document.querySelector('#planet-mercury');
planetMercury.animate([
  { transform: 'rotate(0deg) translateX(90px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(90px) rotate(-360deg)' }
], {
  duration: 10860,
  easing: 'linear',
  iterations: Infinity
});

const planetVenus = document.querySelector('#planet-venus');
planetVenus.animate([
  { transform: 'rotate(0deg) translateX(135px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(135px) rotate(-360deg)' }
], {
  duration: 13620,
  easing: 'linear',
  iterations: Infinity
});

const planetEarth = document.querySelector('#planet-earth');
planetEarth.animate([
  { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' }
], {
  duration: 19380,
  easing: 'linear',
  iterations: Infinity
});

const planetMars = document.querySelector('#planet-mars');
planetMars.animate([
  { transform: 'rotate(0deg) translateX(220px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(220px) rotate(-360deg)' }
], {
  duration: 26140,
  easing: 'linear',
  iterations: Infinity
});

const planetJupiter = document.querySelector('#planet-jupiter');
planetJupiter.animate([
  { transform: 'rotate(0deg) translateX(260px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(260px) rotate(-360deg)' }
], {
  duration: 48154,
  easing: 'linear',
  iterations: Infinity
});

const planetSaturn = document.querySelector('#planet-saturn');
planetSaturn.animate([
  { transform: 'rotate(0deg) translateX(305px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(305px) rotate(-360deg)' }
], {
  duration: 59560,
  easing: 'linear',
  iterations: Infinity
});

const planetUranus = document.querySelector('#planet-uranus');
planetUranus.animate([
  { transform: 'rotate(0deg) translateX(350px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(350px) rotate(-360deg)' }
], {
  duration: 70040,
  easing: 'linear',
  iterations: Infinity
});

const planetNeptune = document.querySelector('#planet-neptune');
planetNeptune.animate([
  { transform: 'rotate(0deg) translateX(400px) rotate(0deg)' },
  { transform: 'rotate(360deg) translateX(400px) rotate(-360deg)' }
], {
  duration: 95740,
  easing: 'linear',
  iterations: Infinity
});
