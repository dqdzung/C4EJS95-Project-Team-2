function renderHTML() {
  getElement.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    // let {name, price} = products[i];
    // console.log(name);
    getElement.innerHTML += `
        <div class="product-container" >
            <img alt="img" width="" height="">
            <p class="name-product">${products[i].name}</p>
            <p class="price-product">${formatCurrency(products[i].price)}</p>
            <button onclick="addCart(event)">Add to cart</button>
        </div>
        `;
  }
}
renderHTML();

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += `<li><span>${
      cart[i].name
    }</span> <span>- ${formatCurrency(cart[i].price)}</span> <span> x ${
      cart[i].quantity
    }</span> <button onclick="deleteItemCart(event)">X</button></li>`;
    total += cart[i].price * cart[i].quantity;
  }
  cartTotal.innerText = `Total: ${formatCurrency(total)}`;
}

function showCart() {
  setTimeout(function () {
    hideAll();
    cartPageDiv.style.display = "flex";
    renderCart();
  }, 250);
}

function hideAll() {
  contentContainerDiv.style.display = "none";
  loginPageDiv.style.display = "none";
  cartPageDiv.style.display = "none";
}

function showLoginPage() {
  setTimeout(function () {
    hideAll();
    loginPageDiv.style.display = "flex";
  }, 250);
}

function showMainPage() {
  setTimeout(function () {
    hideAll();
    contentContainerDiv.style.display = "flex";
  }, 250);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "VND",
  }).format(number);
}
