let indice = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function mostrarSlide(n) {
  if (n >= totalSlides) indice = 0;
  if (n < 0) indice = totalSlides - 1;

  const slider = document.getElementById("slider");
  slider.style.transform = `translateX(${-indice * 100}%)`;
}

function cambiarSlide(n) {
  indice += n;
  mostrarSlide(indice);
}

// Auto-play cada 4 segundos
setInterval(() => {
  indice++;
  mostrarSlide(indice);
}, 4000);

// Mostrar el primero al cargar
mostrarSlide(indice);
