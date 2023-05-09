const editor = document.getElementById("editor"); 
const clearButton = document.getElementById("clear-button");
// Загрузка текста из локального хранилища при загрузке страницы
editor.value = localStorage.getItem("text") || "";

// Сохранение текста в локальном хранилище при изменении значения текстового поля
editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});

// Очистка поля редактора при нажатии на кнопку "Очистить содержимое"
clearButton.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("text");
});