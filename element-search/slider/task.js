const slides = document.querySelectorAll('.slider__item');
const sliderWrapper = document.querySelector('.slider');
const dots = document.querySelectorAll('.slider__dot');
let slideIndex = 0;

function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
  // console.log("n = "+ n);
  // console.log("slides.length = "+ slides.length);
  // console.log("n + slides.length = "+ (n + slides.length));
  // console.log("slideIndex = "+ slideIndex);
  // slides[slideIndex].classList.remove("slider__item_active");
  slides.forEach(item => {
    item.classList.remove('slider__item_active');
  });
  slides[slideIndex].classList.toggle("slider__item_active");
  dots.forEach((dot, i) => {
    dot.classList.toggle('slider__dot_active', i === slideIndex);
  });
}

showSlide(slideIndex);

document.querySelector('.slider__arrow_prev').addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

document.querySelector('.slider__arrow_next').addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});