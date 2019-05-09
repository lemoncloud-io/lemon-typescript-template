# lemon-typescript-template

# Done
- eslint
- prettier
- editorconfig
- gitignore
- nvmrc
- testing(jest)
- tsconfig
- husky & lint-staged

# Prerequisite

### serverless

```sh
$ npm install -g serverless
$ npm install -g nodemone
$ npm install -g eslint
```

### nvm

```sh
$ nvm use
Found '/Users/tak/workspace/lemoncloud/api/lemon-typescript-template/.nvmrc' with version <8.10.0>
Now using node v8.10.0 (npm v5.6.0)
```

----

# How to use

### Instalation

```sh
$ npm install
```

### Build for typescript

```sh
$ npm run build
```

### Development

```sh
$ npm start
```

### Test

```sh
$ npm test
$ npm run dev:test # 개발할 때 사용, --watchAll 추가됨
```

### Lint

```sh
$ npm run lint
```

---

# TODO
- [x] tslint to eslint
- [x] prettier 
- [ ] serverless

# Setup

```sh
$ nvm use
$ npm init 
$ npm install --save body-parser cors dotenv express morgan serverless-http winston
$ npm install --save-dev typescript ts-jest serverless nodemon jest husky concurrently
$ npm install --save-dev @types/cors @types/dotenv @types/jest @types/morgan @types/winston

# eslint, prettier
$ npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
$ npm install prettier eslint-config-prettier --save-dev
$ npm install @types/supertest --save-dev
```

# VSCode plugins

- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [eslint](https://github.com/Microsoft/vscode-eslint)
- [prettier](https://github.com/prettier/prettier-vscode)

# How to setup VSCode

- eslint, prettier plugin 설치
- vscode의 ```settings.json``` 오픈 후 아래 코드 추가
```json
    ...

    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
    "prettier.eslintIntegration": true,
    "javascript.format.enable": false,
    "eslint.autoFixOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    ...
```
