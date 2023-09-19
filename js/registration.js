// 1. на модальное окно входа добавить ссылку на регистрацию
// 2. прописать моадльно окно для регистрации
// 3. инпуты: логин, пароль, мб почта
// 4. создать пустой массив regUsers
// 5. получить данные из инпута, записать их в объект regUser
// 6. запушить regUser в массив regUsers
// 5. localstorage.setItem('regUsers', regUsers)

// сравнить почту по textcontent

const modalDialogAuth = document.querySelector(".modal-dialog-auth");
const modalFooter = modalDialogAuth.querySelector(".modal-footer");
const footerButtons = modalDialogAuth.querySelector(".footer-buttons");

const regBtn = document.createElement("a");
regBtn.classList.add("reg-btn");
regBtn.textContent = "Зарегистрироваться";

// const registration = () => {
//   // event.preventDefault();

//   let regUser = {
//     login: inputLogin.value,
//     password: inputPassword.value,
//   };
// };

// testBtn.innerHTML = `
//     <button class="button button-primary button-login" type="submit">
//         test btn
//     </button>
// `;
// modalFooter.append(testBtn);

footerButtons.append(regBtn);

console.log(modalFooter);

// testBtn.addEventListener("click", () => {
//   console.log("regggg");
// });
