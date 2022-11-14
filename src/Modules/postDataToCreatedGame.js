import { gameIDObject, baseURLObject } from '../../gameIdConfig.js';

const BASE_URL = baseURLObject.baseUrl;
const API_PATH = `${BASE_URL}games/${gameIDObject.gameID}/scores/`;

export async function enterScoreData(score) {
  const response = fetch(API_PATH, {
    method: 'post',
    body: JSON.stringify(score),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);

  return response;
}

export default { enterScoreData };
