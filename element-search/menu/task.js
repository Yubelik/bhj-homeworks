const menuLinks = document.querySelectorAll(".menu__item");

menuLinks.forEach((link) => {
  link.onclick = function() {
    const menu = link.closest(".menu");
    const subMenu = link.querySelector(".menu_sub");
    const child = menu.querySelector(".menu_active");
    const isActive = menu.contains(child);

    if (subMenu) {
      subMenu.classList.add("menu_active");
      return false;
    }
    // console.log("isActive = " + isActive);
    // if (isActive) {

    //   menu.classList.remove(".menu_active");
    // } else {
      window.open( link.childNodes[1].href);
      const menus = document.querySelectorAll(".menu");
      menus.forEach((m) => m.classList.remove(".menu_active"));
    // }
   };
});
