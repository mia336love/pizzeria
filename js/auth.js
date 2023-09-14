const modalAuth = document.querySelector(".modal-auth"); // модальное окно авторизации
const closeAuth = document.querySelector(".close-auth"); // крестик

const buttonAuth = document.querySelector(".button-auth"); // войти
const buttonOut = document.querySelector(".button-out"); // выйти
const cartButton = document.querySelector(".button-cart"); // корзина
const userName = document.querySelector(".user-name");

const logInForm = document.getElementById("logInForm"); // submit на отправку данных пользователя
const inputLogin = document.getElementById("login"); // user login
const inputPassword = document.getElementById("password"); // user password

const authModalWind = () => {
  // const modalDialog = document.createElement("div");
  // modalDialog.classList.add();

  const display = `
  <div class="modal-dialog modal-dialog-auth">
        <button class="close-auth">&times;</button>
        <form id="logInForm">
          <fieldset class="modal-body">
            <legend class="modal-title">Авторизация</legend>
            <label class="label-auth">
              <span>Логин</span>
              <input id="login" type="text" />
            </label>
            <label class="label-auth">
              <span>Пароль</span>
              <input id="password" type="password" />
            </label>
          </fieldset>
          <!-- /.modal-body -->
          <div class="modal-footer">
            <div class="footer-buttons">
              <button class="button button-primary button-login" type="submit">
                Войти
              </button>
            </div>
          </div>
        </form>
        <!-- /.modal-footer -->
      </div>
  `;

  modalAuth.append(display);
};

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
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    login(user);
  }
});

if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}

// const validation = (obj) => {
//   obj.onkeyup()= "if(/[0-9,./+=!@#$%^&*';:?<>]/.test(this.value)){this.value='';}"
// };

// validation(inputLogin)

// inputLogin.addEventListener("keyup", validation);
// inputPassword.addEventListener("keyup", validation);
