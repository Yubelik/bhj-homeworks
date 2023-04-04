const modalMain = document.querySelector("#modal_main");
modalMain.classList.add("modal_active");

const closeModal = document.querySelector(".modal__close");
closeModal.onclick = function() {
 modalMain.classList.remove("modal_active");
}

const show = document.querySelector(".show-success");
show.onclick = function() {
    const modalSuccessShow = document.querySelector("#modal_success");
    modalSuccessShow.classList.add("modal_active");
   }

// const closeModal = document.querySelector(".modal__close");
// closeModal.onclick = function() {
//  modalMain.classList.remove("modal_active");
// }