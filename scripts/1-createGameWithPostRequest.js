import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || '';

const createGame = async (gameName) => {
  const object = {
    name: gameName,
  };
  const sentData = fetch(BASE_URL.concat('games/'), {
    method: 'post',
    body: JSON.stringify(object),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);

  return sentData;
};

let gameIdObject = {};

const getCreateGameResponse = async () => {
  const responseData = await createGame('BC');
  gameIdObject = { gameID: responseData.result.slice(14, 34) };
  console.log(responseData);
  console.log(JSON.stringify(gameIdObject));
};

const storeGameIdData = () => {
  fs.writeFile('gameConfig.json', JSON.stringify(gameIdObject), (err) => {
    if (err) throw err;

    console.log(
      `.gameConfig.js file was succesfully created and gameID ${gameIdObject.gameID} was stored inside!`,
    );
  });
};

await getCreateGameResponse();
storeGameIdData();
