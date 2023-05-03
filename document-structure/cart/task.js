const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

let cart = {};

function addToCart(event) {

  let product = event.target.parentNode.parentNode.parentNode;
  let productId = product.dataset.id;
  const productImage = product.querySelector('.product__image').src;
  const productQuantity = parseInt(product.querySelector('.product__quantity-value').innerText);

  if (productId in cart) {
    // Увеличиваем количество товара
    cart[productId].count += productQuantity;
    cartProducts.querySelector('[data-id="' + productId + '"] .cart__product-count').innerText = cart[productId].count;
  } else {
    // Создаем новый элемент товара в корзине
    let cartProduct = document.createElement('div');
    cartProduct.className = 'cart__product';
    cartProduct.setAttribute('data-id', productId);

    let cartProductImage = document.createElement('img');
    cartProductImage.className = 'cart__product-image';
    cartProductImage.src = productImage;
    cartProduct.appendChild(cartProductImage);

    let cartProductCount = document.createElement('div');
    cartProductCount.className = 'cart__product-count';
    cartProductCount.innerText = productQuantity;
    cartProduct.appendChild(cartProductCount);

    cartProducts.appendChild(cartProduct);

    cart[productId] = {
      id: productId,
      image: productImage,
      count: productQuantity
    };
  }

}

function decreaseQuantity(event) {
  const quantityValue = event.target.parentNode.querySelector('.product__quantity-value');
  let quantity = parseInt(quantityValue.innerText);

  if (quantity > 1) {
    quantity--;
    quantityValue.innerText = quantity;
  }
}

function increaseQuantity(event) {
  const quantityValue = event.target.parentNode.querySelector('.product__quantity-value');
  let quantity = parseInt(quantityValue.innerText);

  quantity++;
  quantityValue.innerText = quantity;
}

for (let i = 0; i < products.length; i++) {
  products[i].querySelector('.product__add').addEventListener('click', addToCart);
}

const quantityDec = document.querySelectorAll('.product__quantity-control_dec');
const quantityInc = document.querySelectorAll('.product__quantity-control_inc');

for (let i = 0; i < quantityDec.length; i++) {
  quantityDec[i].addEventListener('click', decreaseQuantity);
  quantityInc[i].addEventListener('click', increaseQuantity);
}