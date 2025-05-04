// Enregistrement du plugin
gsap.registerPlugin(ScrollTrigger);

// Configuration
const totalPhotos = 100;
const cycleLength = 10000;
const imageEl = document.querySelector('.centered-image');

// ScrollTrigger : Pin de l'image
ScrollTrigger.create({
  trigger: '.image-container',
  start: 'top top',
  end: `+=${cycleLength}`,
  pin: true,
  pinSpacing: true,
});

// Positionner au milieu du scroll pour éviter les bornes
window.scrollTo(0, cycleLength / 2);

// Fonction de mise à jour d'image
function updateImage() {
  const scrollTop = window.scrollY;
  const virtualScroll = scrollTop % cycleLength;
  const imageIndex =
    Math.floor(virtualScroll / (cycleLength / totalPhotos)) + 1;
  imageEl.src = `./public/${imageIndex}.png`;
  requestAnimationFrame(updateImage);
}

updateImage();

// Scroll infini (rebouclage quand on atteint les extrêmes)
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop <= 5) {
    window.scrollTo(0, cycleLength / 2 + 1);
  } else if (scrollTop >= cycleLength - 5) {
    window.scrollTo(0, cycleLength / 2 - 1);
  }
});
