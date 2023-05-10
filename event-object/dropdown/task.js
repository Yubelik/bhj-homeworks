<<<<<<< HEAD

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

 toggle.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
      items.forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        toggle.textContent = item.textContent;
        list.classList.remove('dropdown__list_active');
        });
    });
  });
});






  

 





=======
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
const toggle = dropdown.querySelector('.dropdown__toggle');
const list = dropdown.querySelector('.dropdown__list');
const items = dropdown.querySelectorAll('.dropdown__item');
const value = dropdown.querySelector('.dropdown__value');

// Открываем/закрываем список
toggle.addEventListener('click', () => {
  list.classList.toggle('dropdown__list_active');
});

// Закрываем список и устанавливаем новое значение
items.forEach(item => {
  item.addEventListener('click', () => {
    list.classList.remove('dropdown__list_active');
    value.textContent = item.textContent;
    });
});

// Запрещаем переход по ссылке
toggle.addEventListener('click', event => {
  event.preventDefault();
    });
});
>>>>>>> 2b7cb8bfdf374d9f27b12fe33e18f46f0dece7b5
