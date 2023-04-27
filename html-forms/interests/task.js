const parentCheckboxes = document.querySelectorAll('.interests > ul > .interest > label > .interest__check');

parentCheckboxes.forEach(parentCheckbox => {
  parentCheckbox.addEventListener('change', () => {
    const childCheckboxes = parentCheckbox.closest('.interest').querySelectorAll('.interests_active > .interest > label > .interest__check');
    childCheckboxes.forEach(childCheckbox => {
      childCheckbox.checked = parentCheckbox.checked;
    });
  });
});

