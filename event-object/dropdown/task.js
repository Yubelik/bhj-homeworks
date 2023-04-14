    // Находим все блоки с выпадающим списком
const dropdowns = document.querySelectorAll(".dropdown");

    // Для каждого блока навешиваем обработчики событий
dropdowns.forEach(dropdown => {
    // Находим элементы внутри блока
    const toggle = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');
  const value = dropdown.querySelector('.dropdown__link');

 // Открываем/закрываем список
 toggle.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
    // event.preventDefault();
  });

  // Закрываем список и устанавливаем новое значение
  items.forEach(item => {
    item.addEventListener('click', () => {
      toggle.textContent = item.textContent;
      list.classList.remove('dropdown__list_active');
      
      console.log(toggle.textContent);
      debugger;
    });
  });


});






  

 





