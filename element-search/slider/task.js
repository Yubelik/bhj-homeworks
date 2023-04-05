const sliderWrapper = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");
const sliderLeftBtn = document.querySelector(".slider__arrow_prev");
const sliderRightBtn = document.querySelector(".slider__arrow_next");
const slideWidth = sliderItems[0].clientWidth;
let position = 0;
let slideIndex = 0;

// const buttonPrev = document.querySelector(".slider__arrow_prev");
// buttonPrev.onclick = function () {
//   const slider__item = document.querySelector(".slider__item");
//   slider__item.classList.add("slider__item_active");
// };

// const buttonNext = document.querySelector(".slider__arrow_next");
// buttonPrev.onclick = function () {
//   const slider__item = document.querySelector(".slider__item");
//   slider__item.classList.add("slider__item_active");
// };

function nextSlide() {
  if (slideIndex > sliderItems.length -1) {
    sliderItems[slideIndex].classList.remove("slider__item_active");
    slideIndex = 0;
  }
  slideIndex++;
  sliderItems[slideIndex-1].classList.remove("slider__item_active");
  console.log("slideIndex = " + slideIndex);
  sliderItems[slideIndex].classList.add("slider__item_active");
  updateDots();
}

function prevSlide() {
  if (slideIndex <= 0) {
    slideIndex = sliderItems.length -1;
    // sliderItems[0].classList.remove("slider__item_active");
    // if (slideIndex == 5) slideIndex=4;
  }
  console.log("slideIndex До = " + slideIndex);
  sliderItems[slideIndex-1].classList.remove("slider__item_active");
  
  console.log("slideIndex = " + slideIndex);
  sliderItems[slideIndex].classList.add("slider__item_active");
  slideIndex--;
  updateDots();
}

function goToSlide(index) {
  slideIndex = index;
  position = -(slideWidth * (slideIndex - 1));
  sliderWrapper.style.transform = `translateX(${position}px)`;
  updateDots();
}

function updateDots() {
  sliderDots.forEach((dot, index) => {
    if (index === slideIndex - 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

sliderRightBtn.addEventListener("click", nextSlide);
sliderLeftBtn.addEventListener("click", prevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index + 1);
  });
});
