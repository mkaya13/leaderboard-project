import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '';

const gameConfig = JSON.parse(fs.readFileSync('./gameConfig.json'));
console.log(gameConfig);
const API_PATH = `${BASE_URL}games/${gameConfig.gameID}/scores/`;

const fetchData = async () => {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.log(error));

  return fetchedData;
};

const returnScoreData = async () => {
  const responseData = await fetchData();
  console.log(responseData);
};

returnScoreData();
