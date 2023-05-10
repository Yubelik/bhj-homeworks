const controls = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector(".book");
const sizeOfText = ["book_fs-small", " ", "book_fs-big"];

function changeSize(i) {
    controls.forEach(item => {
        item.classList.remove('font-size_active');
    });
    
    controls[i].classList.add("font-size_active");
	let checkClass = sizeOfText[i];
    book.classList.remove("book_fs-small");
	book.classList.remove("book_fs-big");

	if(i != 1) {
        book.classList.add(checkClass);
    }
}

controls.forEach((element, index) => {
    element.addEventListener('click', (event) => {
    let i = controls.indexOf(element)
    changeSize(i);
    event.preventDefault(); 
    });
  });