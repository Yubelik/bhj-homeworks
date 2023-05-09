const menuLinks = document.querySelectorAll(".menu__item");
const isActive = false;
menuLinks.forEach((link) => {
  link.onclick = function() {
    // const menu = link.closest(".menu");
    const subMenu = link.querySelector(".menu_sub");
    const clickNo = link.querySelector(".menu__link");
    const isActive = subMenu.classList.contains("menu_active");
    console.log("subMenu = "+subMenu);
    console.log("isActive = "+isActive);

    if (!isActive) {
      subMenu.classList.add("menu_active");
       return false;
    }
    if (clickNo.classList.contains("menu__link")) { //запрет перехода по ссылкам
      // console.log("click");
      const menus = document.querySelectorAll(".menu");
      menus.forEach((m) => {
        // console.log('m1 = '+m.className);
        // m.classList.remove("menu_active")
        // console.log('m2 = '+m.className);
        // debugger;
      });
      return false;
    } 
  };
});
