
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
});
