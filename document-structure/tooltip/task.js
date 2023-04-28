var hasTooltip = document.querySelectorAll('.has-tooltip');

for (var i = 0; i < hasTooltip.length; i++) {
  hasTooltip[i].addEventListener('click', function(event) {
    event.preventDefault();
    
    var title = this.getAttribute('title');
    var tooltip = document.querySelector('.tooltip');
    
    tooltip.innerHTML = title;
    tooltip.classList.add('tooltip_active');
    tooltip.style.top = (event.pageY + 10) + 'px';
    tooltip.style.left = (event.pageX + 10) + 'px';
  });
  
  hasTooltip[i].addEventListener('mouseout', function() {
    var tooltip = document.querySelector('.tooltip');
    
    tooltip.classList.remove('tooltip_active');
  });
}