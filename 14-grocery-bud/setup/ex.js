// ****** SELECT ITEMS **********
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

form.addEventListener('submit', submitItem);
clearBtn.addEventListener('click', clearItem);

function submitItem(e) {
  const value = grocery.value;
  e.preventDefault();
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
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    message('changed', 'success');
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
  console.log(grocery.value);
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
}

function clearItem() {
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach(e => {
      list.removeChild(e);
    });
    message('All removed', 'danger');
    container.classList.remove('show-container');
  }
}

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
  editID = '';
  submitBtn.textContent = 'submit';
}
