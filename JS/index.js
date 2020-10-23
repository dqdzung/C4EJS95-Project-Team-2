function clickCartMain(e) {
  const item = e.target.parentNode.parentNode.children[0].innerText;
  addCart(item);
}

function clickCartDetail(e) {
  const item =
    e.target.parentNode.parentNode.firstElementChild.firstElementChild
      .innerText;
  addCart(item);
}

function addCart(item) {
  const index = getIndex(item),
    cartItemPrice = products[index].price;
  toCart = { name: item, price: cartItemPrice, quantity: 1 };
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
  cartIcon.style.color = "red";
  console.log(cart);
}

function deleteItemCart(e) {
  const item =
    e.target.parentNode.firstElementChild.firstElementChild.innerText;
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].name) {
      cart.splice(i, 1);
      if (!cart.length) {
        cartIcon.style.color = "white";
      }
      renderCart();
    }
    console.log(cart);
  }
}

function loginEvent() {
  loginButton.addEventListener("click", () => {
    if (loginID.value && loginPassword.value) {
      login(loginID.value, loginPassword.value);
      loginID.value = loginPassword.value = "";
    }
  });
  loginPassword.addEventListener("keyup", (e) => {
    if (loginID.value && loginPassword.value) {
      if (e.key === "Enter") {
        login(loginID.value, loginPassword.value);
        loginID.value = loginPassword.value = "";
      }
    }
  });
  loginID.addEventListener("keyup", (e) => {
    if (loginID.value && loginPassword.value) {
      if (e.key === "Enter") {
        login(loginID.value, loginPassword.value);
        loginID.value = loginPassword.value = "";
      }
    }
  });
}
loginEvent();

function login(user, password) {
  let login = false;
  for (let i = 0; i < users.length; i++) {
    if (user === users[i].id && password === users[i].password) {
      console.log(
        "Logged In - ID:",
        user,
        "PW:",
        password,
        `- ${users[i].role}`
      );
      currentUser = users[i];
      alert("Login successful!");
      login = true;
      showMainPage();
      if (currentUser.role === "user") {
        loginDiv.innerHTML = `Welcome back, ${user}! <div><button onclick="showUserProfile()">Profile</button><button onclick="signOut()">Sign out</button></div>`;
      } else if (currentUser.role === "admin") {
        loginDiv.innerHTML = `Welcome back, ${user}! <div><button onclick="showAdminTools()">Tools</button><button onclick="signOut()">Sign out</button></div>`;
      }
    }
  }
  if (!login) {
    alert("Wrong ID or password!");
  }
}

function signOut() {
  alert("Signing out!");
  loginDiv.innerHTML = `<div onclick="showLoginPage()">
      <span>Login</span><span>/</span><span>Register</span>
    </div>`;
  loginEvent();
  showMainPage();
  currentUser = undefined;
}

function signUp(id, password) {
  let userExist = false;
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      userExist = true;
      console.log(`User "${users[i].id}" already existed`);
    }
  }
  if (userExist) {
    alert(`User ${id} already existed!`);
  } else {
    const newUser = { id: id, password: password, role: "user" };
    users.push(newUser);
    console.log("Created user:", id, "PW:", password);
    alert("Registration completed!");
  }
  console.log(users);
}

regButton.addEventListener("click", () => {
  if (regID.value && regPassword.value) {
    signUp(regID.value, regPassword.value);
    regID.value = regPassword.value = "";
  }
});

function changeUserInfo() {
  for (let i = 0; i < userInfo.length; i++) {
    if (userInfo[i].innerHTML != "(not set)") {
      tempValue = userInfo[i].innerHTML;
      userInfo[i].innerHTML = `
      <input class="user-info-input" type="text" value="${tempValue}">`;
    } else {
      userInfo[i].innerHTML = `
    <input class="user-info-input" type="text">`;
    }
  }
  changeButtonDiv.innerHTML = '<button onclick="saveUserInfo()">Save</button>';
}

function saveUserInfo() {
  for (let i = 0; i < userInfoChange.length; i++) {
    if (!userInfoChange[i].value) {
      userInfoChange[i].value = "(not set)";
    }
    userExtraInfo.push(userInfoChange[i].value);
    currentUser.extraInfo = userExtraInfo;
  }
  for (let j = 0; j < userInfo.length; j++) {
    userInfo[j].innerHTML = currentUser.extraInfo[j];
  }
  changeButtonDiv.innerHTML =
    '<button class="user-profile-btn" onclick="changeUserInfo()">Change</button>';
  confirm("Confirm changes?");
}

function changePassword() {
  const currentPasswordInput = document.getElementById(
      "current-password-input"
    ),
    newPasswordInput = document.getElementById("new-password-input");
  if (
    currentPasswordInput.value === currentUser.password &&
    newPasswordInput.value &&
    currentPasswordInput.value
  ) {
    currentUser.password = newPasswordInput.value;
    confirm("Confirm password change?");
    console.log(currentUser.id, "pw changed to", currentUser.password);
    currentPasswordInput.value = newPasswordInput.value = "";
  } else {
    alert("Wrong password!");
  }
}

displayManager = () => {
  let tbody = document.getElementById("display-table");
  tbody.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    let { name, model, price, brand, spec, description, image } = products[i];
    tbody.innerHTML += `
        <tr>
            <td> ${i + 1}
            <td>${name}</td>
            <td>${model}</td>
            <td>${price}</td>
            <td>${brand}</td>
            <td>${spec.cpu}</td>
            <td>${spec.ram}</td>
            <td>${spec.storage}</td>
            <td>${spec.vga}</td>
            <td>${spec.screen}</td>
            <td>${spec.os}</td>
            <td>${spec.color}</td>       
            <td><span style="display: none;">${description}</span></td>     
            <td><span onmouseover="showImage(event)" onmouseout="hideImage(event)">${image}</span></td>
            <td><button class="show-btn" onclick="show(event)">Show description</button>
                <button class="btn-update" onclick="updateDetail(event)">Update</button><span><button class="btn-del" >Delete</button></span>
            </td>
        </tr>
        `;
  }
  let getDelButtonElement = document.getElementsByClassName("btn-del");
  let delButton = [...getDelButtonElement];
  for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener("click", () => {
      removeProduct(i);
    });
  }
};

const imageData = getImage();
function updateDetail(e) {
  let HTML = "";
  const td = e.target.parentNode.parentNode.children;
  if (e.target.innerHTML === "Update") {
    for (let i = 1; i < td.length - 2; i++) {
      td[i].contentEditable = true;
      td[i].style.border = "solid red";
    }
    for (let i = 0; i < imageData.length; i++) {
      if (imageData[i] != td[13].firstElementChild.innerHTML) {
        HTML += `<option>${imageData[i]}</option>`;
      }
    }
    const imgSelectHTML = `
  <select name="laptop-image">
    <option>${td[13].firstElementChild.innerHTML}</option>
    ${HTML}
  </select>`;
    td[13].innerHTML = imgSelectHTML;
    e.target.innerHTML = "Save";
  } else {
    e.target.innerHTML = "Update";
    const imgValue = td[13].firstElementChild.value;
    for (let i = 1; i < td.length - 2; i++) {
      td[i].contentEditable = false;
      td[i].style.border = "";
    }
    td[13].innerHTML = `<span onmouseover="showImage(event)" onmouseout="hideImage(event)">${imgValue}</span>`;
    const index = td[0].innerHTML - 1;
    products[index] = {
      name: td[1].innerHTML,
      model: td[2].innerHTML,
      price: td[3].innerHTML,
      brand: td[4].innerHTML,
      spec: {
        cpu: td[5].innerHTML,
        ram: td[6].innerHTML,
        storage: td[7].innerHTML,
        vga: td[8].innerHTML,
        screen: td[9].innerHTML,
        os: td[10].innerHTML,
        color: td[11].innerHTML,
      },
      description: td[12].firstElementChild.innerHTML,
      image: imgValue,
    };
  }
}

//them san pham
addProduct = () => {
  let name = document.getElementById("input-name-product").value,
    model = document.getElementById("input-model-product").value,
    price = document.getElementById("input-price-product").value,
    brand = document.getElementById("input-brand-product").value,
    cpu = document.getElementById("input-cpu-product").value,
    ram = document.getElementById("input-ram-product").value,
    storage = document.getElementById("input-storage-product").value,
    vga = document.getElementById("input-vga-product").value,
    screen = document.getElementById("input-screen-product").value,
    os = document.getElementById("input-os-product").value,
    color = document.getElementById("input-color-product").value,
    description = document.getElementById("input-description-product")
      .innerHTML,
    image = document.getElementById("image-select").value;
  spec = { cpu, ram, storage, vga, screen, os, color };
  products.push({ name, model, price, brand, spec, description, image });
  console.log(products);
  displayManager();
  clearInput();
};

function clearInput() {
  const inputDivs = document.getElementsByClassName("input");
  for (let i = 0; i < inputDivs.length; i++) {
    inputDivs[i].value = "";
  }
  document.getElementById("input-description-product").innerHTML = "";
  preview.innerHTML = "Image preview";
  renderImageSelector();
}

function removeProduct(index) {
  products.splice(index, 1);
  displayManager();
}

function displayUser() {
  userViewerDiv.innerHTML = " ";
  userViewerDiv.innerHTML = `
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Password</th>
                </tr>
              </thead>

              <tbody id="display-content">

              </tbody>
            </table>
          `;
  let tbody = document.getElementById("display-content");
  tbody.innerHTML = " ";
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "user") {
      tbody.innerHTML += `
              <tr>
                <td>${i + 1}</td>
                <td>${users[i].id}</td>
                <td>${users[i].password}</td>
              </tr>
            `;
    }
  }
}

function clickDetail(e) {
  const item = e.target.parentNode.parentNode.firstElementChild.innerHTML,
    itemIndex = getIndex(item);
  renderDetail(itemIndex);
}

function getIndex(item) {
  let index;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === item) {
      console.log("index", i);
      index = i;
    }
  }
  return index;
}

function show(e) {
  const target = e.target.parentNode.parentNode.children[12].firstElementChild;
  if (target.style.display != "none") {
    target.style.display = "none";
  } else {
    target.style.display = "inline";
  }
}

function checkout() {
  let HTML = "Receipt";
  modal.style.display = "block";
  for (let i = 0; i < cart.length; i++) {
    HTML += `<p>${cart[i].name} - ${formatCurrency(cart[i].price)} x ${
      cart[i].quantity
    }</p>`;
  }
  console.log(modalContent);
  modalContent.innerHTML =
    HTML +
    `<p>------------------------------------------------</p><p>${cartTotal.innerText}</p>`;
}

function closeModal() {
  modal.style.display = "none";
}

function pay() {
  alert("PAID!");
  modal.style.display = "none";
  cart = [];
  renderCart();
  showMainPage();
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

function sortUp() {
  sortArr.sort(function (a, b) {
    return a.price - b.price;
  });
  renderHTML(sortArr);
}

function sortDown() {
  sortArr.sort(function (a, b) {
    return b.price - a.price;
  });
  renderHTML(sortArr);
}

const imagePreviewContainer = document.getElementById("image-hover-container");
window.onmousemove = function (e) {
  let x = e.clientX,
    y = e.clientY;
  imagePreviewContainer.style.top = y - 50 + "px";
  imagePreviewContainer.style.left = x + 10 + "px";
};

function previewImage() {
  const data = imageSelector.value;
  preview.innerHTML = `<img class="img" src="./assets/${data}" alt="">`;
}
