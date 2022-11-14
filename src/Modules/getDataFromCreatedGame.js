import { gameIDObject, baseURLObject } from '../../gameIdConfig.js';

const BASE_URL = baseURLObject.baseUrl;
const API_PATH = `${BASE_URL}games/${gameIDObject.gameID}/scores/`;

export async function fetchData() {
  const fetchedData = fetch(API_PATH, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => error);

  return fetchedData;
}

export default {
  fetchData,
};
