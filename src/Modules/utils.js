import { fetchData } from './getDataFromCreatedGame.js';
import { Score } from './rankClass.js';
import { enterScoreData } from './postDataToCreatedGame.js';

export const updateEventMessage = (formTag, messageTag, res) => {
  messageTag.innerText = res;
  formTag.appendChild(messageTag);
  setTimeout(() => {
    formTag.removeChild(formTag.lastChild);
  }, 3000);
};

export const sortThenAdd = (
  tableContent,
  rankingContent,
  rankingList,
  rankingItems,
) => {
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

export const returnScoreData = async (tableContent, rankingContent, rankingList, rankingItems) => {
  rankingList = await fetchData();
  sortThenAdd(tableContent, rankingContent, rankingList, rankingItems);
};

export const submitDataToAPI = (formTag, score, inputName, inputScore, res, messageTag) => {
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

export const clickRefresh = (tableContent, rankingContent, rankingList,
  rankingItems, refreshButton, messageTag, refreshContainer) => {
  refreshButton.addEventListener('click', (event) => {
    event.preventDefault();
    messageTag.innerText = 'Refreshed successfully!';
    messageTag.style = 'background-color:green; color:white;';
    refreshContainer.appendChild(messageTag);
    setTimeout(() => {
      refreshContainer.removeChild(refreshContainer.lastChild);
    }, 3000);
    returnScoreData(tableContent, rankingContent, rankingList, rankingItems);
  });
};

export default {
  updateEventMessage,
  sortThenAdd,
  returnScoreData,
  submitDataToAPI,
  clickRefresh,
};
