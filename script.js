gsap.registerPlugin(ScrollTrigger);

// Pin de l’image
ScrollTrigger.create({
  trigger: '.image-container',
  start: 'top top',
  end: '+=10000', // Longue zone scrollable
  pin: true,
  pinSpacing: true,
});

// Paramètres
const totalPhotos = 100;
const imageEl = document.querySelector('.centered-image');

// Fonction pour changer l’image selon la position de scroll
function updateImage() {
  const scrollTop = window.scrollY;
  const imageIndex = (Math.floor(scrollTop / 10) % totalPhotos) + 1;
  imageEl.src = `public/${imageIndex}.png`;
  requestAnimationFrame(updateImage);
}

window.addEventListener('scroll', () => {
  const max = document.body.scrollHeight - window.innerHeight;
  if (window.scrollY >= max - 5) {
    window.scrollTo(0, 0); // Revenir en haut automatiquement
  }
});

updateImage();
