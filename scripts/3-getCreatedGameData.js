/* eslint-disable no-console */

import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '';

const gameConfig = JSON.parse(fs.readFileSync('../gameIdConfig.json'));
const API_PATH = `${BASE_URL}games/${gameConfig.gameID}/scores/`;

async function fetchData() {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.log(error));

  return fetchedData;
}

async function returnScoreData() {
  const responseData = await fetchData();
  console.log(responseData);
}

returnScoreData();
