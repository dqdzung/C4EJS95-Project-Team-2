function renderHTML(array) {
  getElement.innerHTML = " ";
  for (let i = 0; i < array.length; i++) {
    // let {name, price} = array[i];
    // console.log(name, price);
    getElement.innerHTML += `
    <div class="product-container">
      <div class="image-container"><img class="img" src="./assets/${
        array[i].image
      }" alt=""></img></div>
      <div class="product-inner-container">
        <div class="name-product">${array[i].name}</div>
        <div class="price-product">${formatCurrency(array[i].price)}</div>
        <div class="product-btn-container">
          <button onclick="clickCartMain(event)">Add to cart</button>
          <button onclick="clickDetail(event)">Show details</button>
        </div>
      </div>  
    </div>`;
  }
}
renderHTML(products);

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += `<li><div class="cart-item-inner"><span>${
      cart[i].name
    }</span><span> - ${formatCurrency(cart[i].price)}</span><span> x ${
      cart[i].quantity
    }</span></div><button onclick="deleteItemCart(event)">X</button></li>`;
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
  getDivDetail.style.display = "none";
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
      for (let j = 0; j < sortArr.length; j++) {
        if (arrDiv[i].getAttribute("name") === sortArr[j].brand) {
          productBrand.push(sortArr[j]);
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
      for (let i = 0; i < sortArr.length; i++) {
        if (
          sortArr[i].name
            .toLowerCase()
            .search(getSearchInputElement.value.toLowerCase()) !== -1
        ) {
          productSearch.push(sortArr[i]);
        }
      }
      if (productSearch.length === 0) {
        alert("Not found brand");
      } else {
        renderHTML(productSearch);
      }
      getSearchInputElement.value = "";
    }
  });
}
addEventSearchProduct();

function showAdminTools() {
  setTimeout(function () {
    hideAll();
    adminToolsDiv.style.display = "flex";
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

function showDetailPage() {
  setTimeout(function () {
    hideAll();
    getDivDetail.style.display = "flex";
  }, 250);
}

function renderDetail(index) {
  showDetailPage();
  getDivDetail.innerHTML = "";
  getDivDetail.innerHTML = `
    <div id="product-spec"> 
      <div id="detail-page-div1">
        <div class="price-product">${products[index].name}</div>
        <div class="detail-image-container"><img class="img" src="./assets/${
          products[index].image
        }" alt=""></img></div>
      </div>
      <div id="detail-page-div2">
        <h3>Thông số kĩ thuật</h3>
        <ul>
          <li>CPU: ${products[index].spec.cpu}</li>
          <li>RAM: ${products[index].spec.ram}</li>
          <li>Storage: ${products[index].spec.storage}</li>
          <li>VGA: ${products[index].spec.vga}</li>
          <li>Screen: ${products[index].spec.screen}</li>
          <li>OS: ${products[index].spec.os}</li>
          <li>Color: ${products[index].spec.color}</li>
        </ul>
        <div class="price-product">${formatCurrency(
          products[index].price
        )}</div>
        <button onclick="clickCartDetail(event)">Add to cart</button>
      </div>
    </div>
    <div id="product-description">
      <h3>Mô tả</h3>
      <div>${products[index].description}</div>
    </div>`;
}

function renderSlide() {
  console.log("hello");
  let HTML = "";
  for (let i = 0; i < products.length; i++) {
    HTML += `
    <div class="mySlides fade">
    <div class="numbertext">(${i + 1}/${products.length + 1})</div>
    <img class="banner-img" src="./assets/${
      products[i].image
    }" style="height:100%">
    <div class="text">${products[i].name}</div>
    </div>  
    `;
  }
  bannerDiv.innerHTML = HTML;
}
renderSlide();

function getImage() {
  const arr = [];
  for (let i = 0; i < products.length; i++) {
    const data = products[i].image;
    arr.push(data);
  }
  return arr;
}

function renderImageSelector() {
  const data = getImage();
  let HTML = "";
  for (let i = 0; i < data.length; i++) {
    HTML += `<option class="image-preview">${data[i]}</option>`;
  }
  imageSelector.innerHTML = `<option disabled selected>(Choose an image)</option>` + HTML;
}
renderImageSelector();
