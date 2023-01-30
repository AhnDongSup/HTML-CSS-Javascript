// ****** SELECT ITEMS **********
{
  /* <article class="grocery-item" data-id="">
<p class="title">${groceryValue}</p>
<div class="btn-container">
  <button class="edit-btn">
    <i class="fas fa-edit"></i>
  </button>
  <button class="delete-btn">
    <i class="fas fa-trash"></i>
  </button>
</div>
</article> */
}
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

window.addEventListener('DOMContentLoaded', setupItems);

form.addEventListener('submit', Item);

function Item(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `;
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    list.appendChild(element);

    container.classList.add('show-container');
    message('added', 'success');
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    message('edited', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    message('pls input value', 'danger');
    setBackToDefault();
  }
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  message('item removed', 'danger');

  setBackToDefault();
  removeFromLocalStorage(id);
}

clearBtn.addEventListener('click', () => {
  const element = document.querySelectorAll('.grocery-item');
  element.forEach(e => {
    list.removeChild(e);
  });
  message('ALL removed', 'danger');
  container.classList.remove('show-container');
  setBackToDefault();
  localStorage.removeItem('list');
});
function message(content, state) {
  alert.classList.add(`alert-${state}`);
  alert.textContent = content;
  setTimeout(() => {
    alert.classList.remove(`alert-${state}`);
    alert.textContent = '';
  }, 1000);
}

function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  submitBtn.textContent = 'submit';
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
function editLocalStorage(editID, value) {
  let items = getLocalStorage();
  items = items.map(e => {
    if (e.id === editID) {
      e.value = value;
    }
    return e;
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(e => {
    if (e.id !== id) {
      return e;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(e => {
      LoadItem(e.value, e.id);
    });
  }
  container.classList.add('show-container');
}

function LoadItem(value, id) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
    <button class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  `;
  const editBtn = element.querySelector('.edit-btn');
  const deleteBtn = element.querySelector('.delete-btn');
  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);
  list.appendChild(element);
}
