## Leaderboard Project

## SETUP PROJECT

- `npm init` --> Start with initializing package.json

- `npm install webpack webpack-cli html-webpack-plugin style-loader css-loader --save-dev` --> Install Webpack packages

- Create a src folder so that webpack can compile source codes (Do not forget to add import `"./style.css";` inside your main js file)

- Create `webpack-config.js` webpack config file and fill it.

- Add `"build": "webpack"` inside package.json scripts.

## Run Webpack

- `npm run build`

## Install Linters

`npm install hint@7.x stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x --save-dev`

- configure `.hintrc`

- configure `.styleintrc.json`

- configure `.eslintrc.json`

## Run Linters

- `npx hint .`
- `npx stylelint "**/*.{css,scss}"`
- `npx eslint .`

## Built With

- HTML

- CSS

- JavaScript

- Webpack

## Author

👤 Mert Kaya

- GitHub: [@mkaya](https://github.com/mkaya13)
- Twitter: [@mkaya133](https://twitter.com/mkaya133)
- LinkedIn: [@mert-kaya](https://www.linkedin.com/in/mert-kaya-0732b717b/)

## 🤝 Contributing

- Contributions, issues, and feature requests are welcome!

- Feel free to check the [issues page](https://github.com/V-Blaze/Awesome_Books/issues).

## Show your support

- Give a ⭐️ if you like this project!

## 📝 License

- This project is [MIT](./LICENSE) licensed.
