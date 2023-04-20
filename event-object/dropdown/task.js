
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






  

 





