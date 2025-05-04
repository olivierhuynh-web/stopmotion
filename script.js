gsap.registerPlugin(ScrollTrigger);

// Initialise Lenis
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothTouch: false,
});

// Boucle d'animation avec Lenis + update GSAP + update image
function raf(time) {
  lenis.raf(time);
  updateImage();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Scroll infini avec ScrollTrigger
ScrollTrigger.create({
  trigger: '.image-container',
  start: 'top top',
  end: '+=10000',
  pin: true,
  pinSpacing: true,
});

// Configuration
const totalPhotos = 100;
const imageEl = document.querySelector('.centered-image');
const cycleLength = 10000;

window.scrollTo(0, cycleLength / 2);

// Image en fonction du scroll
function updateImage() {
  const scrollTop = window.scrollY;
  const virtualScroll = scrollTop % cycleLength;
  const imageIndex =
    (Math.floor(virtualScroll / (cycleLength / totalPhotos)) % totalPhotos) + 1;
  imageEl.src = `public/${imageIndex}.png`;
}

// Scroll infini
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop <= 10) {
    window.scrollTo(0, cycleLength / 2 + 1);
  } else if (scrollTop >= cycleLength - 10) {
    window.scrollTo(0, cycleLength / 2 - 1);
  }
});
