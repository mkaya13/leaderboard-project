import './style.css';
import { Score } from './Modules/rankClass.js';
import { fetchData } from './Modules/getDataFromCreatedGame.js';
import { enterScoreData } from './Modules/postDataToCreatedGame.js';

const tableContent = document.querySelector('.ranking-table');
const formTag = document.querySelector('.add-to-ranking');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const refreshButton = document.querySelector('.refresh');

let rankingList = [];
let rankingContent = '';
let score = {};

const rankingItems = document.createElement('ul');
rankingItems.className = 'item-list-ul';

const sortThenAdd = () => {
  tableContent.innerHTML = '';
  rankingList.sort((a, b) => b.score - a.score);

  rankingList.forEach((data) => {
    rankingContent += `
          <li>${data.user}: ${data.score}</li>
          `;
  });

  rankingItems.innerHTML = rankingContent;
  tableContent.appendChild(rankingItems);
};

async function returnScoreData() {
  rankingList = await fetchData();
  sortThenAdd();
}

returnScoreData();

// const addScoresToLocalStorage = () => {
//   const str = JSON.stringify(rankingList);
//   localStorage.setItem('storedBookData', str);
// };

const submitDataToAPI = () => {
  formTag.addEventListener('submit', async (event) => {
    event.preventDefault();
    score = new Score(inputName.value, parseFloat(inputScore.value));
    await enterScoreData(score);
  });
};

submitDataToAPI();

const clickRefresh = () => {
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    returnScoreData();
  });
};

clickRefresh();
