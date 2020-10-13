const loginDiv = document.getElementById("login-register"),
  regButton = document.getElementById("reg-btn"),
  regID = document.getElementById("reg-id"),
  regPassword = document.getElementById("reg-pw"),
  contentContainerDiv = document.getElementById("content-container"),
  loginPageDiv = document.getElementById("login-page");

function showLoginPage() {
  const att = document.createAttribute("style");
  att.value = "display: none;";
  console.log("login clicked");
  setTimeout(function () {
    contentContainerDiv.setAttributeNode(att);
    loginPageDiv.removeAttribute("style");
  }, 250);
}

function showMainPage() {
  const att = document.createAttribute("style");
  att.value = "display: none;";
  setTimeout(function () {
    loginPageDiv.setAttributeNode(att);
    contentContainerDiv.removeAttribute("style");
  }, 250);
}

function loginEvent() {
  const loginID = document.getElementById("login-id"),
    loginPassword = document.getElementById("login-pw"),
    loginButton = document.getElementById("login-btn");
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
      alert("Login successful!");
      login = true;
      showMainPage();
      loginDiv.innerHTML = `<button onclick="signOut()">Sign out</button> Welcome back, ${user}!`;
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
