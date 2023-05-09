let arr = [
  "bread",
  "milk",
  "apples",
  "grapefruit",
  " cat food",
  "chees",
  "wine",
];

let main = document.getElementById("main");
let buttonAdd = document.getElementsByClassName("add")[0];
let buttonRemove = document.getElementsByClassName("remove")[0];
let buttonClear = document.getElementsByClassName("clear")[0];

buttonClear.addEventListener("click", () => {
  let items = main.getElementsByClassName("products-list-items show");
  for (let i = 0; i < items.length / 2 + 2; i++) {
    for (let i of items) {
      i.classList.remove("show");
      i.classList.add("hide");
    }
  }
});

buttonAdd.addEventListener("click", () => {
  let items = main.getElementsByClassName("products-list-items hide");
  let new2 = items[items.length - 1];
  if (new2.classList.contains("hide")) {
    new2.classList.remove("hide");
    new2.classList.add("show");
    items[length - 1] = new2;
  } else {
    alert("error");
  }
});

buttonRemove.addEventListener("click", () => {
  let item = main.getElementsByClassName("products-list-items show")[0];
  if (item.classList.contains("show")) {
    item.classList.remove("show");
    item.classList.add("hide");
  } else {
    alert("error");
  }
});

// buttonClear.addEventListener("click", () => {
//     let item = main.getElementsByClassName("products-list show")[0];
//     item.classList.remove("show");
//     item.classList.add("hide");
//   });
