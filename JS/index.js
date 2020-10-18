function addCart(e) {
  const item = e.target.parentNode.children[1].innerText;
  let cartItemPrice = 0;
  for (let i = 0; i < products.length; i++) {
    if (item === products[i].name) {
      cartItemPrice = products[i].price;
    }
  }
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
    if (currentPasswordInput.value === currentUser.password && newPasswordInput.value && currentPasswordInput.value) {
      currentUser.password = newPasswordInput.value;
      confirm("Confirm password change?");
      console.log(currentUser.id,"pw changed to",currentUser.password);
      currentPasswordInput.value = newPasswordInput.value = "";
    }
    else { alert("Wrong password!")}
}

displayManager = () => {
  let getDivElement = document.getElementById("inventory-mngmt");
  getDivElement.innerHTML = `
    <div id="edit-product">
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
        <button class="add-product" onclick="addProduct()">Add</button>
    </div>
        <table border="1px black">
            <thead>
                <tr>
                    <th rowspan="2">Name</th>
                    <th rowspan="2">Model</th>
                    <th rowspan="2">Price</th>
                    <th rowspan="2">Brand</th>
                    <th colspan="7">Spec</th>
                    <th rowspan="2">Description</th>
                    <th rowspan="2">Action</th>
                </tr>
                    
                <tr>
                    <th>CPU</th>
                    <th>RAM</th>
                    <th>Storage</th>
                    <th>VGA</th>
                    <th>Screen</th>
                    <th>OS</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody id="display-table">
                
            </tbody>
        </table>
    `;
  let tbody = document.getElementById("display-table");
  tbody.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    let { name, model, price, brand, spec, description } = products[i];
    tbody.innerHTML += `
        <tr>
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
            <td>${description}</td>
            <td>
                <button class="btn-update">Update</button><span><button class="btn-del" >Delete</button></span>
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
  const getUpdateButtonElement = document.getElementsByClassName("btn-update");
  const updateButton = [...getUpdateButtonElement];
  for (let i = 0; i < updateButton.length; i++) {
    updateButton[i].addEventListener("click", () => {
      updateUI(i);
      products.splice(i, 1);
      let getUpdateBtn = document.getElementsByClassName("update-product");
      getUpdateBtn[0].addEventListener("click", () => {
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
            .value;
        let spec = { cpu, ram, storage, vga, screen, os, color };
        let newProduct = { name, model, price, brand, spec, description };
        products.splice(i, 0, newProduct);
        console.log(products);
        displayManager();
      });
    });
  }
};
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
};

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
                <td>${users[i].id}</td>
                <td>${users[i].password}</td>
              </tr>
            `;
    }
  }
};
