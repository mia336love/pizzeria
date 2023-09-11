const restourant = "tanuki";

const renderItems = (data) => {};

fetch(`./db/${restourant}.json`)
  .then((res) => {
    return res.json;
  })
  .then((data) => {
    renderItems(data);
  })
  .catch((err) => {
    console.log(err);
  });
