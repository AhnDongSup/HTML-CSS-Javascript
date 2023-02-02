choice_case = ['r', 's', 'p'];

document.getElementById('r').addEventListener('click', () => {
  choiceItem('r');
});
document.getElementById('s').addEventListener('click', () => {
  choiceItem('s');
});
document.getElementById('p').addEventListener('click', () => {
  choiceItem('p');
});

choiceItem = item => {
  const computerChoice = choice_case[Math.floor(Math.random() * 3)];
  const sum = item + computerChoice;
  switch (sum) {
    case 'rs':
    case 'sp':
    case 'pr':
      playerWin(item, computerChoice);
      EffectItem(item, 'W');
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      equal(item, computerChoice);
      EffectItem(item, 'E');
      break;
    case 'rp':
    case 'sr':
    case 'ps':
      playerLose(item, computerChoice);
      EffectItem(item, 'L');
      break;
  }
};

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_div_p = document.querySelector('.result p');
const player = 'player'.fontsize(2).sub();
const computer = 'computer'.fontsize(2).sub();

playerWin = (playerChoice, computerChoice) => {
  const counter = parseInt(userScore_span.textContent) + 1;
  userScore_span.textContent = counter;
  result_div_p.innerHTML = `${modify(playerChoice)}${player} ⚔️ ${modify(computerChoice)}${computer} you win🎉`;
};
equal = (playerChoice, computerChoice) => {
  result_div_p.innerHTML = `${modify(playerChoice)}${player} ⚔️ ${modify(computerChoice)}${computer} same result`;
};
playerLose = (playerChoice, computerChoice) => {
  const counter = parseInt(computerScore_span.textContent) + 1;
  computerScore_span.textContent = counter;
  result_div_p.innerHTML = `${modify(playerChoice)}${player} ⚔️ ${modify(computerChoice)}${computer} you Lose☠️`;
};

modify = item => {
  if (item === 'r') {
    return 'rock';
  } else if (item === 's') {
    return 'scissors';
  } else {
    return 'paper';
  }
};

EffectItem = (item, result) => {
  const element = document.getElementById(item);
  if (result === 'W') {
    Timeout(element.classList, 'choice-win');
  } else if (result === 'L') {
    Timeout(element.classList, 'choice-lose');
  } else {
    Timeout(element.classList, 'choice-equal');
  }
};

Timeout = (item, value) => {
  item.add(value);
  setTimeout(() => {
    item.remove(value);
  }, 1000);
};
