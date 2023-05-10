<<<<<<< HEAD

const items = Array.from(document.querySelectorAll('.menu__item'));

items.forEach(item => {
  const link = item.querySelector('.menu__link');
  link.addEventListener('click', (event) => {
    const sublist = item.querySelector('.menu_sub');
    if (sublist) {
      const activeSublist = document.querySelector('.menu_active');
      event.preventDefault(); 
      if (activeSublist && activeSublist !== sublist) {
        activeSublist.classList.remove('menu_active'); 
      }
      sublist.classList.toggle('menu_active'); 
    }
  });
=======
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
>>>>>>> 2b7cb8bfdf374d9f27b12fe33e18f46f0dece7b5
});
