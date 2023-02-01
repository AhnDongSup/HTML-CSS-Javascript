// ****** select items **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';
let inputNumber = false;
let numbers = '';
let letters = '';
// ****** event listeners **********

form.addEventListener('submit', Item);
clearBtn.addEventListener('click', clearItem);
window.addEventListener('DOMContentLoaded', setupItems);

function Item(e) {
  e.preventDefault();
  let value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    if (/^\d{8}[^\d]+$/.test(value)) {
      extract(value);
      value = letters;
      inputNumber = true;
    }
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="deadlineCase"></div>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div> 
    `;
    if (inputNumber) {
      const deadlineCase = element.querySelector('.deadlineCase');
      deadlineCase.innerHTML = `
      <article class="gift-info">
        <div class="deadline">
          <div class="deadline-format">
            <div>
              <h4 class="days">34</h4>
              <span>days</span>
            </div>
          </div>
          <div class="deadline-format">
            <div>
              <h4 class="hours">34</h4>
              <span>hours</span>
            </div>
          </div>
          <div class="deadline-format">
            <div>
              <h4 class="minutes">34</h4>
              <span>mins</span>
            </div>
          </div>
          <div class="deadline-format">
            <div>
              <h4 class="seconds">34</h4>
              <span>secs</span>
            </div>
          </div>
        </div>
      </article>
      `;
      const setDeadline = element.querySelector('.gift-info');
      let attr = document.createAttribute('data-id');
      attr.value = numbers;
      setDeadline.setAttributeNode(attr);
      const deadlineFormat = element.querySelectorAll('.deadline-format h4');
      countdown(
        deadlineFormat,
        numbers.substring(0, 2),
        numbers.substring(2, 4),
        numbers.substring(4, 6),
        numbers.substring(6, 8),
      );
    }
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    list.appendChild(element);
    container.classList.add('show-container');
    display('added', 'success');
    addToLocalStorage(id, value, numbers);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = value;
    display('edited', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    display('pls input value', 'danger');
  }
}

function editItem(e) {
  const elementValue = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling.previousElementSibling;
  editFlag = true;
  editID = elementValue.dataset.id;
  grocery.value = editElement.textContent;
  submitBtn.textContent = 'edit';
}
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  display('Item removed', 'danger');
  removeFromLocalStorage(id);
  setBackToDefault();
}

function display(message, state) {
  alert.classList.add(`alert-${state}`);
  alert.textContent = message;
  setTimeout(() => {
    alert.classList.remove(`alert-${state}`);
    alert.textContent = '';
  }, 1000);
}

function setBackToDefault() {
  editFlag = false;
  editID = '';
  grocery.value = '';
  submitBtn.textContent = 'submit';
  inputNumber = false;
  numbers = '';
  letters = '';
}

function clearItem() {
  const element = document.querySelectorAll('.grocery-item');
  element.forEach(e => {
    list.removeChild(e);
  });
  container.classList.remove('show-container');
  display('edited', 'danger');
  localStorage.removeItem('list');
  setBackToDefault();
}

function extract(value) {
  for (const item of value) {
    if (isNaN(item)) {
      letters += item;
    } else {
      numbers += item;
    }
  }
}

function countdown(deadlineFormat, month, day, hour, min) {
  const today = new Date();
  const future = new Date(today.getFullYear(), month - 1, day, hour, min, 0);
  const t = future.getTime() - today.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);
  const value = [days, hours, minutes, seconds];
  deadlineFormat.forEach((item, index) => {
    if (value[index] < 10) {
      item.textContent = `0${value[index]}`;
    } else {
      item.textContent = value[index];
    }
  });
}

setInterval(() => {
  if (list.children.length > 0) {
    const giftInfo = document.querySelectorAll('.gift-info');
    giftInfo.forEach(e => {
      const id = e.dataset.id;
      const deadlineFormat = e.querySelectorAll('.deadline-format h4');
      countdown(deadlineFormat, id.substring(0, 2), id.substring(2, 4), id.substring(4, 6), id.substring(6, 8));
    });
  }
}, 1000);

function addToLocalStorage(id, value, numbers) {
  let items = getLocalStorage();
  const grocery = { id, value, numbers };
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(e => {
    if (e.id === id) {
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
function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(e => {
      LoadItem(e.value, e.id, e.numbers);
    });
    container.classList.add('show-container');
  }
}

function LoadItem(value, id, numbers) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="deadlineCase"></div>
  <div class="btn-container">
    <button class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div> 
  `;
  if (numbers) {
    const deadlineCase = element.querySelector('.deadlineCase');
    deadlineCase.innerHTML = `
    <article class="gift-info">
      <div class="deadline">
        <div class="deadline-format">
          <div>
            <h4 class="days">34</h4>
            <span>days</span>
          </div>
        </div>
        <div class="deadline-format">
          <div>
            <h4 class="hours">34</h4>
            <span>hours</span>
          </div>
        </div>
        <div class="deadline-format">
          <div>
            <h4 class="minutes">34</h4>
            <span>mins</span>
          </div>
        </div>
        <div class="deadline-format">
          <div>
            <h4 class="seconds">34</h4>
            <span>secs</span>
          </div>
        </div>
      </div>
    </article>
    `;
    const setDeadline = element.querySelector('.gift-info');
    let attr = document.createAttribute('data-id');
    attr.value = numbers;
    setDeadline.setAttributeNode(attr);
    const deadlineFormat = element.querySelectorAll('.deadline-format h4');
    countdown(
      deadlineFormat,
      numbers.substring(0, 2),
      numbers.substring(2, 4),
      numbers.substring(4, 6),
      numbers.substring(6, 8),
    );
  }
  const editBtn = element.querySelector('.edit-btn');
  const deleteBtn = element.querySelector('.delete-btn');
  editBtn.addEventListener('click', editItem);
  deleteBtn.addEventListener('click', deleteItem);
  list.appendChild(element);
}
