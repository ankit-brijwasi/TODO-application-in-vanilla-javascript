let items = [];

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const createElements = item => {
  let itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");

  let textContainer = document.createElement("div");
  textContainer.classList.add("item-1");
  let btnContainer = document.createElement("div");
  btnContainer.classList.add("item-2");

  let name = document.createTextNode(item.name);
  textContainer.appendChild(name);

  let btn = document.createElement("button");
  btn.classList.add("material-icons", "btn");
  btn.appendChild(document.createTextNode("delete"));
  btnContainer.appendChild(btn);

  btn.addEventListener("click", event => remove(item.id));

  itemContainer.appendChild(textContainer);
  itemContainer.appendChild(btnContainer);

  container.appendChild(itemContainer);
};

items.map(item => createElements(item));

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  container.innerHTML = "";
  items.push({
    id: new Date().getSeconds(),
    name: document.querySelector("input").value
  });
  items.map(item => createElements(item));
});
const remove = id => {
  container.innerHTML = "";
  items = items.filter(item => item.id !== Number(id));
  items.map(item => createElements(item));
};
