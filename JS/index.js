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
