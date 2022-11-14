import { gameIDObject, baseURLObject } from '../../gameIdConfig.js';

const BASE_URL = baseURLObject.baseUrl;
const API_PATH = `${BASE_URL}games/${gameIDObject.gameID}/scores/`;

export async function enterScoreData(score) {
  const sendData = fetch(API_PATH, {
    method: 'post',
    body: JSON.stringify(score),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  return sendData;
}

// async function getCreateGameResponse() {
//   await enterScoreData('Emre', 97);
//   await enterScoreData('Ahmet', 53);
//   await enterScoreData('Cemre', 75);
// }
//
// getCreateGameResponse();

export default { enterScoreData };
