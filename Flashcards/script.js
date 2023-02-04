const createBox_div = document.querySelector('.create-box');
const question_label = document.getElementById('question');
const answer_label = document.getElementById('answer');
const flashcards_div = document.getElementById('flashcards');

showCreateCardBox = () => {
  createBox_div.style.display = 'block';
};
hideCreateBox = () => {
  createBox_div.style.display = 'none';
  question_label.value = '';
  answer_label.value = '';
};
let getLocalStorage = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
addFlashcard = () => {
  items = {
    question: question_label.value,
    answer: answer_label.value,
  };
  getLocalStorage.push(items);
  localStorage.setItem('items', JSON.stringify(getLocalStorage));
  question_label.value = '';
  answer_label.value = '';
  Item(items, getLocalStorage.length - 1);
};
delFlashcards = () => {
  // localStorage.removeItem('items');
  localStorage.clear();
  const allflashcard = document.querySelectorAll('.flashcard');
  allflashcard.forEach(e => {
    flashcards_div.removeChild(e);
  });
  getLocalStorage = [];
};
Item = (items, lastAppendBefore) => {
  const flashcard = document.createElement('div');
  const question = document.createElement('h2');
  const answer = document.createElement('h2');
  const del = document.createElement('button');
  question.setAttribute('style', 'padding:15px; border-top:1px solid red; margin-top:30px;');
  answer.setAttribute('style', 'display:none; color:red; text-align:center');
  flashcard.className = 'flashcard';
  flashcard.addEventListener('click', () => {
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
  del.className = 'fa-minus';
  del.addEventListener('click', () => {
    getLocalStorage.splice(lastAppendBefore, 1);
    localStorage.setItem('items', JSON.stringify(getLocalStorage));
    window.location.reload();
  });
  question.textContent = items.question;
  answer.textContent = items.answer;
  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);
  flashcards_div.appendChild(flashcard);
};
getLocalStorage.forEach(Item);
