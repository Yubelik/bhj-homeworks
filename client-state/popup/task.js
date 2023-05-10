const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

function closeModal() {
  modal.classList.remove('modal_active');
  document.cookie = 'modal_closed=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT';
}

if (document.cookie.indexOf('modal_closed') === -1) {
  modal.classList.add('modal_active');
  modalClose.addEventListener('click', closeModal);
}