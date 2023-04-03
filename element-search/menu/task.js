
const menuLinks = document.querySelectorAll('.menu_sub');
console.log(menuLinks.length);
console.log(menuLinks);
menuLinks.forEach((link) => {
  link.onclick = function() {
    console.log("onclick");
    const menu = link.closest('menu');
    const isActive = menu.classList.contains('menu_active');
    const subMenu = link.querySelector('.menu_sub');
    
    if (subMenu) {
        console.log("subMenu");
      subMenu.classList.add('.menu_active');
      return false;
    }
    
    if (isActive) {
        console.log("isActive");
      menu.classList.remove('.menu_active');
    } else {
        iconsole.log("else");
      const menus = document.querySelectorAll('menu');
      menus.forEach((m) => m.classList.remove('.menu_active'));
      menu.classList.add('menu_active');
    }
  };
});
