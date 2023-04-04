

const buttonPrev = document.querySelector(".slider__arrow_prev");
buttonPrev.onclick = function() {
    const slider__item = document.querySelector(".slider__item");
    slider__item.classList.add("slider__item_active");
}

const buttonNext = document.querySelector(".slider__arrow_next");
buttonPrev.onclick = function() {
    const slider__item = document.querySelector(".slider__item");
    slider__item.classList.add("slider__item_active");
}