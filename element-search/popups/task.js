const modalMain = document.querySelector("#modal_main");
modalMain.classList.add("modal_active");



const show = document.querySelector(".show-success");
show.onclick = function() {
    const modalSuccessShow = document.querySelector("#modal_success");
    modalMain.classList.remove("modal_active");
    modalSuccessShow.classList.add("modal_active");
   }

document.querySelectorAll(".modal__close")
  .forEach(el => el.addEventListener("click",  function(e){ 
    this.parentNode.parentNode.classList.remove("modal_active"); 
  }));