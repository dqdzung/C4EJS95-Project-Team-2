const productContainer = document.getElementById("product-container");

let cart = [];
const cartList = document.getElementById("cart"),
  cartTotal = document.getElementById("cart-total");

const cartPageDiv = document.getElementById("cart-page");

function showCart() {
  setTimeout(function () {
    hideAll();
    cartPageDiv.style.display = "flex";
    renderCart();
  }, 250);
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += `<li><span>${cart[i].name}</span> <span>$${cart[i].price}</span> <span> x ${cart[i].quantity}</span> <button onclick="deleteItemCart(event)">X</button></li>`;
    total += cart[i].price * cart[i].quantity;
  }
  cartTotal.innerText = `Total: $${total}`;
}

function addCart(e) {
    const item = e.target.parentNode.children[1].innerText,
    price = (e.target.parentNode.children[2].innerText),
    toCart = { name: item, price: price, quantity: 1 };
  let itemExisted = false;
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].name) {
      cart[i].quantity++;
      itemExisted = true;
      renderCart();
    }
  }
  if (!itemExisted) {
    cart.push(toCart);
    renderCart();
  }
  console.log(cart);
}

function deleteItemCart(e) {
  const item = e.target.parentNode.firstElementChild.innerText;
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].name) {
      cart.splice(i, 1);
      itemExisted = true;
      renderCart();
    }
    console.log(cart);
  }
}
