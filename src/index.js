import './style.css';
import { Score } from './Modules/rankClass.js';

const tableContent = document.querySelector('.ranking-table');
const rankingItems = document.createElement('ul');
const formSubmit = document.querySelector('.form-submit');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const formTag = document.querySelector('.add-to-ranking');

const rankingList = [
  {
    Name: 'Mert',
    Score: 125,
  },
  {
    Name: 'Emre',
    Score: 78,
  },
  {
    Name: 'Ali',
    Score: 77,
  },
  {
    Name: 'Muhammed',
    Score: 42,
  },
  {
    Name: 'Nani',
    Score: 50,
  },
  {
    Name: 'Haward',
    Score: 100,
  },
];

const addScoresToLocalStorage = () => {
  const str = JSON.stringify(rankingList);
  localStorage.setItem('storedBookData', str);
};

let rankingContent = '';

const sortThenAdd = () => {
  rankingList.sort((a, b) => b.Score - a.Score);

  rankingList.forEach((score) => {
    rankingContent += `
          <li>${score.Name}: ${score.Score}</li>
          `;
  });

  if (rankingList.length === 6) {
    addScoresToLocalStorage(rankingList);
  }

  const rankingData = JSON.parse(localStorage.getItem('storedBookData'));

  rankingItems.innerHTML = rankingData;
  tableContent.appendChild(rankingItems);
};

sortThenAdd();

rankingItems.innerHTML = rankingContent;
tableContent.appendChild(rankingItems);

formSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputName.value !== '' && inputScore.value.match(/[0-9]/gi)) {
    rankingContent = '';
    const score = new Score(inputName.value, inputScore.value);
    rankingList.push(score);

    addScoresToLocalStorage();

    sortThenAdd();

    inputName.value = '';
    inputScore.value = '';

    rankingItems.innerHTML = rankingContent;
  } else {
    const warningParagraph = document.createElement('p');
    warningParagraph.innerText = 'Please fill the required fields correctly!';
    warningParagraph.style = 'text-align: center; background-color: red;';
    formTag.appendChild(warningParagraph);
    setTimeout(() => {
      formTag.removeChild(formTag.lastChild);
    }, 3000);
  }
});
