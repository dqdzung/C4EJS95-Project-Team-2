function renderHTML(array) {
  getElement.innerHTML = " ";
  for (let i = 0; i < array.length; i++) {
    // let {name, price} = array[i];
    // console.log(name, price);
    getElement.innerHTML += `
        <div class="product-container" >
            <img alt="img" width="" height="">
            <p class="name-product">${array[i].name}</p>
            <p class="price-product">${formatCurrency(array[i].price)}</p>
            <button onclick="addCart(event)">Add to cart</button>
            <button onclick="showDetail(event)">Show details</button>
        </div>
        `;
  }
}
renderHTML(products);

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
  userProfileDiv.style.display = "none";
  adminToolsDiv.style.display = "none";
  inventoryManagerDiv.style.display = "none";
  userViewerDiv.style.display = "none";
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
  renderHTML(products);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

function addEventSortBrand() {
  for (let i = 0; i < arrDiv.length; i++) {
    arrDiv[i].addEventListener("click", () => {
      const productBrand = [];
      for (let j = 0; j < products.length; j++) {
        if (arrDiv[i].getAttribute("name") === products[j].brand) {
          productBrand.push(products[j]);
        }
      }
      renderHTML(productBrand);
    });
  }
}
addEventSortBrand();

function showUserProfile() {
  setTimeout(function () {
    hideAll();
    userProfileDiv.style.display = "flex";
  }, 250);
  for (let i = 0; i < userInfo.length; i++) {
    if (currentUser.extraInfo) {
      userInfo[i].innerHTML = currentUser.extraInfo[i];
    } else {
      userInfo[i].innerHTML = "(not set)";
    }
  }
}
function addEventSearchProduct() {
  getSearchInputElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const productSearch = [];
      for (let i = 0; i < products.length; i++) {
        if (
          products[i].name
            .toLowerCase()
            .search(getSearchInputElement.value.toLowerCase()) !== -1
        ) {
          productSearch.push(products[i]);
        }
      }
      if (productSearch.length === 0) {
        alert("Not found brand");
      }
      renderHTML(productSearch);
    }
  });
}
addEventSearchProduct();

function showAdminTools() {
  setTimeout(function () {
    hideAll();
    adminToolsDiv.style.display = "block";
  }, 250);
}

function showManager() {
  setTimeout(function () {
    hideAll();
    inventoryManagerDiv.style.display = "block";
  }, 250);
  displayManager();
}

function showUserViewer() {
  setTimeout(function () {
    hideAll();
    userViewerDiv.style.display = "block";
  }, 250);
  displayUser();
}
