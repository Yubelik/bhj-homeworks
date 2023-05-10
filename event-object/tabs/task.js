const tabNavi = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');


tabNavi.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabNavi.forEach(t => t.classList.remove('tab_active'));
      tabContent.forEach(c => c.classList.remove('tab__content_active'));
      tab.classList.add('tab_active');
      tabContent[index].classList.add('tab__content_active');
    });
  });