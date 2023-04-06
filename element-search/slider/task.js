const sliderWrapper = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
const sliderDots = document.querySelectorAll(".slider__dot");
const sliderLeftBtn = document.querySelector(".slider__arrow_prev");
const sliderRightBtn = document.querySelector(".slider__arrow_next");
const slideWidth = sliderItems[0].clientWidth;
let position = 0;
let slideIndex = 0;

function nextSlide() {
    if (slideIndex < sliderItems.length -1 ){
        slideIndex ++;
    } else {
        slideIndex = 0;
        sliderItems[sliderItems.length -1].classList.remove("slider__item_active");
        sliderItems[slideIndex].classList.add("slider__item_active");
        updateDots();
        return;
    }
  sliderItems[slideIndex-1].classList.remove("slider__item_active"); 
  sliderItems[slideIndex].classList.add("slider__item_active");  
  updateDots();
}

function prevSlide() {
    if (slideIndex <= 0 ){
        slideIndex = sliderItems.length -1;
        sliderItems[0].classList.remove("slider__item_active");
        sliderItems[slideIndex].classList.add("slider__item_active");
        updateDots();
        return;
    } else {
        slideIndex --;
    }
    sliderItems[slideIndex+1].classList.remove("slider__item_active");
    sliderItems[slideIndex].classList.add("slider__item_active");
    // slideIndex--;
  updateDots();
}

function goToSlide(index) {
  slideIndex = index;
    sliderItems.forEach((Items, index) => {
        if (index === slideIndex) {
            Items.classList.add("slider__item_active");
        } else {
            Items.classList.remove("slider__item_active");
        }
        updateDots();
    });
}


function updateDots() {
  sliderDots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add("slider__dot_active");
    } else {
      dot.classList.remove("slider__dot_active");
    }
  });
}

sliderRightBtn.addEventListener("click", nextSlide);
sliderLeftBtn.addEventListener("click", prevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});
