/* eslint-disable no-console */

import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '';

const gameConfig = JSON.parse(fs.readFileSync('../gameIdConfig.json'));
const API_PATH = `${BASE_URL}games/${gameConfig.gameID}/scores/`;

async function enterScoreData(enterUser, enterScore) {
  const object = {
    user: enterUser,
    score: enterScore,
  };

  const sendData = fetch(API_PATH, {
    method: 'post',
    body: JSON.stringify(object),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  return sendData;
}

async function getCreateGameResponse() {
  await enterScoreData('Emre', 97);
  await enterScoreData('Ahmet', 53);
  await enterScoreData('Cemre', 75);
}

getCreateGameResponse();
