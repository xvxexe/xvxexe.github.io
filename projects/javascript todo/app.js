const alert = document.querySelector(".alert");
const form = document.querySelector("form");
const toDo = document.getElementById("toDo");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".toDo-container");
const list = document.querySelector(".list-container");
const clearBtn = document.querySelector(".clear-btn");

let editElement;

let editFlag = false;

let editId = "";

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearList);
window.addEventListener("DOMContentLoaded", setUpItems);

function addItem(e) {
  e.preventDefault();
  const value = toDo.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editFlag === false) {
    createListItem(id, value);
    displyAlert("item added", "success");
    container.classList.add("show-container");

    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    displyAlert("value changed", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displyAlert("enter value", "danger");
  }
}

function displyAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function clearList() {
  const items = document.querySelectorAll(".toDo-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displyAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

function setBackToDefault() {
  toDo.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  displyAlert("item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  toDo.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

function addToLocalStorage(id, value) {
  const toDo = { id, value };
  let items = getLocalStorage();
  items.push(toDo);
  localStorage.setItem("list", JSON.stringify(items));

  console.log(items);
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("toDo-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
    <button class="edit-btn">edit</button>
    <button class="delete-btn">X</button>
  </div>
  `;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
}
