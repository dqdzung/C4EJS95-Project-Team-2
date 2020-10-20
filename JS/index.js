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
    let { name, model, price, brand, spec, description } = products[i];
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
            <td><button class="show-btn" onclick="show(event)">Show</button>
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

function updateDetail(e) {
  const tableRowChildren = e.target.parentNode.parentNode.children;
  if (e.target.innerHTML === "Update") {
    for (let i = 1; i < tableRowChildren.length - 1; i++) {
      tableRowChildren[i].contentEditable = true;
      tableRowChildren[i].style.border = "solid red";
    }
    e.target.innerHTML = "Save";
  } else {
    for (let i = 1; i < tableRowChildren.length - 1; i++) {
      tableRowChildren[i].contentEditable = false;
      tableRowChildren[i].style.border = "";
    }
    e.target.innerHTML = "Update";
    const index = tableRowChildren[0].innerHTML - 1;
    products[index] = {
      name: tableRowChildren[1].innerHTML,
      model: tableRowChildren[2].innerHTML,
      price: tableRowChildren[3].innerHTML,
      brand: tableRowChildren[4].innerHTML,
      spec: {
        cpu: tableRowChildren[5].innerHTML,
        ram: tableRowChildren[6].innerHTML,
        storage: tableRowChildren[7].innerHTML,
        vga: tableRowChildren[8].innerHTML,
        screen: tableRowChildren[9].innerHTML,
        os: tableRowChildren[10].innerHTML,
        color: tableRowChildren[11].innerHTML,
      },
      description: tableRowChildren[12].innerHTML,
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
    description = document.getElementById("input-description-product").value;
  spec = { cpu, ram, storage, vga, screen, os, color };
  products.push({ name, model, price, brand, spec, description });
  console.log(products);
  displayManager();
  clearInput();
};

function clearInput() {
  const inputDivs = document.getElementsByClassName("input");
  for (let i = 0; i < inputDivs.length; i++) {
    inputDivs[i].value = "";
  }
}

function removeProduct(index) {
  products.splice(index, 1);
  displayManager();
}
function updateUI(index) {
  //update UI
  const getDivEdit = document.getElementById("edit-product");
  getDivEdit.innerHTML = " ";
  getDivEdit.innerHTML = `
    <input id="input-name-product" type="text" placeholder="Enter name">
    <input id="input-model-product" type="text" placeholder="enter model">
    <input id="input-price-product" type="text" placeholder="enter price">
    <input id="input-brand-product" type="text" placeholder="enter brand">
    <input id="input-cpu-product" type="text" placeholder="enter cpu">
    <input id="input-ram-product" type="text" placeholder="enter ram">
    <input id="input-storage-product" type="text" placeholder="enter storage">
    <input id="input-vga-product" type="text" placeholder="enter vga">
    <input id="input-screen-product" type="text" placeholder="enter screen">
    <input id="input-os-product" type="text" placeholder="enter os">
    <input id="input-color-product" type="text" placeholder="enter color">
    <input id="input-description-product" type="text" placeholder="enter description">
    <button class="update-product">Update</button>
    `;
  let { name, model, price, brand, spec, description } = products[index];
  document.getElementById("input-name-product").value = name;
  document.getElementById("input-model-product").value = model;
  document.getElementById("input-price-product").value = price;
  document.getElementById("input-brand-product").value = brand;
  document.getElementById("input-cpu-product").value = spec.cpu;
  document.getElementById("input-ram-product").value = spec.ram;
  document.getElementById("input-storage-product").value = spec.storage;
  document.getElementById("input-vga-product").value = spec.vga;
  document.getElementById("input-screen-product").value = spec.screen;
  document.getElementById("input-os-product").value = spec.os;
  document.getElementById("input-color-product").value = spec.color;
  document.getElementById("input-description-product").value = description;
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
