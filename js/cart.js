const cart = () => {
  const cartButton = document.getElementById("cart-button"); // корзина
  const modalCart = document.querySelector(".modal-cart");
  const close = document.querySelector(".close");
  const modalBody = document.querySelector(".modal-body");
  const counter = modalCart.querySelector(".counter");
  const makeOffer = modalCart.querySelector(".button-primary");
  const clearCart = modalCart.querySelector(".clear-cart");
  const modalPricetag = modalCart.querySelector(".modal-pricetag");

  // https://jsonplaceholder.typicode.com/posts

  const renderCart = (data) => {
    modalBody.innerHTML = "";

    let sum = 0;

    data.forEach(({ name, price, id, count }) => {
      const cartDiv = document.createElement("div");
      cartDiv.classList.add("food-row");

      cartDiv.innerHTML = `
      <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
              <button class="counter-button minus" data-index="${id}">-</button>
              <span class="counter">${count}</span>
              <button class="counter-button plus" data-index="${id}">+</button>
            </div>
      `;
      //   console.log(cartDiv);

      // console.dir(price);

      modalBody.append(cartDiv);

      sum += price * count;
      modalPricetag.textContent = sum + " " + "₽";
    });
  };

  cartButton.addEventListener("click", () => {
    if (localStorage.getItem("cart")) {
      renderCart(JSON.parse(localStorage.getItem("cart")));
    }

    modalCart.classList.add("is-open");
  });

  close.addEventListener("click", () => {
    modalCart.classList.remove("is-open");
  });

  const plus = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));

    renderCart(cartArray); // обновление значения count
  };

  const minus = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.count > 0) {
        if (item.id === id) {
          item.count--;
        }
      } else {
        item.count = 0;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderCart(cartArray); // обновление значения count
  };

  modalBody.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("plus")) {
      plus(e.target.dataset.index);
    } else if (e.target.classList.contains("minus")) {
      minus(e.target.dataset.index);
    }
  });

  // оформить заказ
  const resetCart = () => {
    modalBody.innerHTML = "";
    localStorage.removeItem("cart");
    modalCart.classList.remove("is-open");

    window.location.reload();
  };

  makeOffer.addEventListener("click", () => {
    const cartArray = localStorage.getItem("cart");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: cartArray,
    })
      .then((response) => {
        if (response.ok) {
          console.log("заказ создан");
          resetCart();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  clearCart.addEventListener("click", resetCart);
};

cart();
