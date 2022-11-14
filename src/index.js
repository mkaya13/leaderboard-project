import './style.css';
import { Score } from './Modules/rankClass.js';
import { fetchData } from './Modules/getDataFromCreatedGame.js';
import { enterScoreData } from './Modules/postDataToCreatedGame.js';
import { updateEventMessage } from './Modules/utils.js';

const tableContent = document.querySelector('.ranking-table');
const formTag = document.querySelector('.add-to-ranking');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const refreshButton = document.querySelector('.refresh');
const refreshContainer = document.querySelector('.subtitle-and-refresh');

let rankingList = [];
let rankingContent = '';
let score = {};

const rankingItems = document.createElement('ul');
rankingItems.className = 'item-list-ul';

const sortThenAdd = () => {
  tableContent.innerHTML = '';
  rankingContent = '';
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

let res;
const messageTag = document.createElement('p');

const submitDataToAPI = () => {
  formTag.addEventListener('submit', async (event) => {
    event.preventDefault();
    score = new Score(inputName.value, parseFloat(inputScore.value));
    res = await enterScoreData(score);
    if (res.result === 'Leaderboard score created correctly.') {
      messageTag.style = 'background-color:green; color:white;';
      updateEventMessage(formTag, messageTag, res.result);
    } else {
      messageTag.innerText = 'Fix your input please!';
      messageTag.style = 'background-color:red; color:white;';
      formTag.appendChild(messageTag);
      setTimeout(() => {
        formTag.removeChild(formTag.lastChild);
      }, 3000);
    }
    inputName.value = '';
    inputScore.value = '';
  });
};

submitDataToAPI();

const clickRefresh = () => {
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    messageTag.innerText = 'Refreshed successfully!';
    messageTag.style = 'background-color:green; color:white;';
    refreshContainer.appendChild(messageTag);
    setTimeout(() => {
      refreshContainer.removeChild(refreshContainer.lastChild);
    }, 3000);
    returnScoreData();
  });
};

clickRefresh();
