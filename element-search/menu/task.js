
const items = Array.from(document.querySelectorAll('.menu__item'));

items.forEach(item => {
  const link = item.querySelector('.menu__link');
  link.addEventListener('click', (event) => {
    
    const sublist = item.querySelector('.menu_sub');
    console.log("sublist = "+sublist.innerHTML);
    if (sublist) {
      const activeSublist = document.querySelector('.menu_active');
      event.preventDefault(); // Предотвращаем переход по ссылке
      if (activeSublist && activeSublist !== sublist) {
        activeSublist.classList.remove('menu_active'); // Закрываем предыдущее открытое меню
      }
      sublist.classList.toggle('menu_active'); // Переключаем класс у вложенного меню
    }
  });
});
