const revealElems = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  revealElems.forEach(elem => {
    const { top, bottom } = elem.getBoundingClientRect();

    if (top <= windowHeight && bottom >= 0) {
      elem.classList.add('reveal_active');
    } else {
      elem.classList.remove('reveal_active');
    }
  });
});