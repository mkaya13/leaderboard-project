import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '';

const gameConfig = JSON.parse(fs.readFileSync('./gameConfig.json'));
const API_PATH = `${BASE_URL}games/${gameConfig.gameID}/scores/`;

const enterScoreData = async (enterUser, enterScore) => {
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
};

const getCreateGameResponse = async () => {
  await enterScoreData('Michael', 97);
  await enterScoreData('Nani', 53);
  await enterScoreData('Brad', 75);
};

getCreateGameResponse();
