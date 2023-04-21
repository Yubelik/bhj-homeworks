const slides = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
let slideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('slider__item_active'));


function showSlide(n) {
  slideIndex = (n + slides.length) % slides.length;
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