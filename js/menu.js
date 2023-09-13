const restourant = "tanuki";
const cardsMenu = document.querySelector(".cards-menu");

// изменение данных в заголовке ресторана
const changeTitle = (restaurant) => {
  const restaurantTitle = document.querySelector(".restaurant-title"); // name
  const rating = document.querySelector(".rating"); // stars
  const price = document.querySelector(".price"); // price
  const category = document.querySelector(".category"); // kitchen

  restaurantTitle.textContent = restaurant.name;
  rating.textContent = restaurant.stars;
  price.textContent = restaurant.price;
  category.textContent = restaurant.kitchen;
};

// добавление в корзину
const cartArray = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const addToCart = (cartItem) => {
  if (cartArray.some((item) => item.id === cartItem.id)) {
    cartArray.map((item) => {
      if (item.id === cartItem.id) {
        item.count++;
      }

      return item;
    });
  } else cartArray.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cartArray));
};

// отрисовка позиций меню
const renderItems = (data) => {
  data.forEach((item) => {
    const { name, description, id, price, image } = item;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img
          src="${image}"
          alt="${name}"
          class="card-image"
        />
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title card-title-reg">${name}</h3>
          </div>
          <div class="card-info">
            <div class="ingredients">${description}</div>
          </div>
          <div class="card-buttons">
            <button class="button button-primary button-add-cart">
              <span class="button-card-text">В корзину</span>
              <span class="button-cart-svg"></span>
            </button>
            <strong class="card-price-bold">${price} ₽</strong>
          </div>
        </div>
    `;

    const inCartBtn = card.querySelector(".button-card-text");
    inCartBtn.addEventListener("click", () => {
      const cartItem = {
        id: id,
        name: name,
        price: price,
        count: 1,
      };

      addToCart(cartItem);
    });

    cardsMenu.append(card);
  });
};

if (localStorage.getItem("restaurant")) {
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));

  changeTitle(restaurant);
  fetch(`./db/${restaurant.products}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderItems(data);
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  // window.location.href("/");
  window.location.assign("/");
}
