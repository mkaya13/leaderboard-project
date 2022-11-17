import './style.css';
import { returnScoreData, submitDataToAPI, clickRefresh } from './Modules/utils.js';
import { showDateTime } from './Modules/dateModul.js';

const tableContent = document.querySelector('.ranking-table');
const formTag = document.querySelector('.add-to-ranking');
const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const refreshButton = document.querySelector('.refresh');
const refreshContainer = document.querySelector('.subtitle-and-refresh');

const rankingList = [];
const rankingContent = '';
const score = {};

const rankingItems = document.createElement('ul');
rankingItems.className = 'item-list-ul';
let res;
const messageTag = document.createElement('p');

returnScoreData(tableContent, rankingContent, rankingList, rankingItems);

submitDataToAPI(formTag, score, inputName, inputScore, res, messageTag);

clickRefresh(tableContent, rankingContent, rankingList,
  rankingItems, refreshButton, messageTag, refreshContainer);

setInterval(showDateTime, 1000);
