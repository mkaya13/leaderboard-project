## Leaderboard Project

- Summary of the project: Create an API via sending a post request to the endpoint of the API with node.js. Grab the response and save it inside the files. Then in the user interface add scores to created API endpoint. Click to refresh to see the added data inside the API endpoint.

## Live Demo

[Click here for live demo](https://mkaya13.github.io/leaderboard-project/dist/index.html)

## Tasks

- Project basically allows you to create an API endpoint called with a post request an returns the corresponding gameID with `1-createGameWithPostRequest.js` node.js.

- Then you can fill the corresponding game with either `2-fillGamePostRequest.js` node.js or you can update the score from user interface.

- Refresh button allows you to send a get request to the API that you created.

- Submit button allows you to send a post request that will add the name and score features to created API endpoint in json data format.

## SETUP PROJECT

- `npm install` --> For uploading all the necessary packages.

  or

- `npm init` --> Start with initializing package.json

- `npm install webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader --save-dev` --> Install Webpack packages

- Create a src folder so that webpack can compile source codes (Do not forget to add import `"./style.css";` inside your main js file)

- Create `webpack-config.js` webpack config file and fill it.

- Add `"build": "webpack", "watch": "webpack --watch", "start": "webpack serve --open"` inside package.json scripts.

- `npm install luxon --save-dev` --> date package

- `npm install fs node-fetch dotenv` --> packages for maintaining environment variables, writing them on respective files and running script functions inside script folder as node.js

## Run Webpack

- `npm run build`
- `npm start`

## Install Linters

`npm install hint@7.x stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x --save-dev`

- configure `.hintrc`

- configure `.styleintrc.json`

- configure `.eslintrc.json`

## Run Linters

- `npx hint .`
- `npx stylelint "**/*.{css,scss}"`
- `npx eslint .`

## Install node-fetch, dontenv, fs Modules

- `npm install node-fetch dotenv fs`

## Environment Variables

- Create a .env file in home path and add API Base Url.

## Node Modules

- Add `"type": "module"` inside package.json

- Run `scripts/1-createGameWithPostRequest.js` to create a Game inside the API.

- Then read the gameID from `gameIdConfig.json` and create and fill the `gameIdConfig.js` so that it can export the gameID inside `index.html`.

- Run `scripts/2-fillGamePostRequest.js` to add inputs on the created game API endpoint.

- Run `scripts/3-getCreatedGameData.js` to read the data entered inside created game API endpoint.

## Built With

- HTML

- CSS

- JavaScript

- webpack

- luxon

- dotenv

- fs

- node-fetch

## Author

???? Mert Kaya

- GitHub: [@mkaya](https://github.com/mkaya13)
- Twitter: [@mkaya133](https://twitter.com/mkaya133)
- LinkedIn: [@mert-kaya](https://www.linkedin.com/in/mert-kaya-0732b717b/)

## ???? Contributing

- Contributions, issues, and feature requests are welcome!

- Feel free to check the [issues page](https://github.com/mkaya13/leaderboard-project/issues).

## Show your support

- Give a ?????? if you like this project!

## ???? License

- This project is [MIT](./LICENSE) licensed.
