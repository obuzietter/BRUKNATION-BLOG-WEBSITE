const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');

const slideWidth = slides[0].clientWidth; // Assuming all slides have the same width
let slideIndex = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    const slideOffset = (index - slideIndex) * slideWidth;
    slide.style.transform = `translateX(${slideOffset}px)`;
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// setInterval(nextSlide, 2000);
