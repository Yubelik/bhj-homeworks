const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const rotatorItem = rotator.querySelectorAll('.rotator__case');
  let currentItem = 0;
  setInterval(() => {
    rotatorItem[currentItem].classList.remove('rotator__case_active');
    if (currentItem == rotatorItem.length - 1){
        currentItem = 0;
    } else{
        currentItem++;
    }
    rotatorItem[currentItem].classList.add('rotator__case_active');
  }, 1000);
});