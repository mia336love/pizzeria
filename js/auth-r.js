const modalAuth = document.querySelector(".modal-auth"); // модальное окно авторизации
const closeAuth = document.querySelector(".close-auth"); // крестик

const buttonAuth = document.querySelector(".button-auth"); // войти
const buttonOut = document.querySelector(".button-out"); // выйти
const cartButton = document.querySelector(".button-cart"); // корзина
const userName = document.querySelector(".user-name");

const logInForm = document.getElementById("logInForm"); // submit на отправку данных пользователя
const inputLogin = document.getElementById("login"); // user login
const inputPassword = document.getElementById("password"); // user password

const modalDialogAuth = document.querySelector(".modal-dialog-auth");
const modalFooter = modalDialogAuth.querySelector(".modal-footer");
const footerButtons = modalDialogAuth.querySelector(".footer-buttons");

const regBtn = document.createElement("a");
regBtn.classList.add("reg-btn");
regBtn.textContent = "Зарегистрироваться";

footerButtons.append(regBtn);

// ----------------------------------------------------------------------------------------------------

buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

const login = (user) => {
  buttonAuth.style.display = "none";

  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  userName.textContent = user.login;
  cartButton.style.display = "flex";

  modalAuth.style.display = "none";
};

const logout = () => {
  buttonAuth.style.display = "flex";

  buttonOut.style.display = "none";
  userName.style.display = "none";
  cartButton.style.display = "none";

  localStorage.removeItem("user");
};
buttonOut.addEventListener("click", logout);

logInForm.addEventListener("submit", () => {
  event.preventDefault();

  let user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };

  if (user.login == "" || user.password == "") {
    alert("Пожалуйста, заполните все поля");
  } else if (user.password.length < 8 || user.password.length > 20) {
    alert("Неправильная длина пароля");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("regUsers");
    login(user);
  }
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}

// regBtn.addEventListener("submit", () => {
//   event.preventDefault();

//   let regUsers = [];

//   let user = {
//     login: inputLogin.value,
//     password: inputPassword.value,
//   };

//   if (user.login == "" || user.password == "") {
//     alert("Пожалуйста, заполните все поля");
//   } else if (user.password.length < 8 || user.password.length > 20) {
//     alert("Неправильная длина пароля");
//   } else {
//     regUsers.push(user);
//     let regUsersString = JSON.stringify(regUsers);
//     localStorage.setItem("reg-users", regUsersString);
//     // localStorage.setItem("user", JSON.stringify(user));
//     // login(user);
//   }
// });

logInForm.addEventListener("submit", () => {
  event.preventDefault();
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}

// const validation = (obj) => {
//   obj.onkeyup()= "if(/[0-9,./+=!@#$%^&*';:?<>]/.test(this.value)){this.value='';}"
// };

// validation(inputLogin)

// inputLogin.addEventListener("keyup", validation);
// inputPassword.addEventListener("keyup", validation);
