import './style.css';
import { Score } from './Modules/rankClass.js';
import { fetchData } from './Modules/getDataFromCreatedGame.js';

const tableContent = document.querySelector('.ranking-table');
const rankingItems = document.createElement('ul');
const formSubmit = document.querySelector('.form-submit');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const formTag = document.querySelector('.add-to-ranking');

let rankingList = [];
let rankingContent = '';

const sortThenAdd = () => {
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

const addScoresToLocalStorage = () => {
  const str = JSON.stringify(rankingList);
  localStorage.setItem('storedBookData', str);
};

rankingItems.innerHTML = rankingContent;
tableContent.appendChild(rankingItems);
