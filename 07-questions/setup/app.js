// // 1
// const questions = document.querySelectorAll('.question');

// questions.forEach(function (question) {
//   const btn = question.querySelector('.question-btn');

//   btn.addEventListener('click', function () {
//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

//2
const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');
btns.forEach(function (e) {
  console.log(e);
  e.addEventListener('click', function (item) {
    const btn = item.currentTarget.parentElement.parentElement;
    questions.forEach(function (items) {
      if (items !== btn) {
        items.classList.remove('show-text');
      }
    });
    btn.classList.toggle('show-text');
  });
});
// article 태그 안에 속한 버튼의 부모의 부모요소를 선택하여 모든 태그에 새로운 클래스명을 붙임
