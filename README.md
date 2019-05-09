# lemon-typescript-template

# Prerequisite

## serverless

```bash
$ npm install -g serverless
```

## nvm

```bash
$ nvm use
Found '/Users/tak/workspace/lemoncloud/api/lemon-typescript-template/.nvmrc' with version <8.10.0>
Now using node v8.10.0 (npm v5.6.0)
```

# How to use

## Instalation

```bash
$ npm install
```

## Build for typescript

```bash
$ npm run build
```

## Development

```bash
$ npm run start
```

## Test

```bash
$ npm run test
```

# TODO
- [ ] tslint to eslint
- [ ] prettier 
- [ ] serverless

# Setup

```bash
$ nvm use
$ npm init 
$ npm install --save body-parser cors dotenv express morgan serverless-http winston
$ npm install --save-dev typescript ts-jest serverless nodemon jest husky concurrently
$ npm install --save-dev @types/cors @types/dotenv @types/jest @types/morgan @types/winston
```

## eslint, prettier

```bash
$ npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
$ npm install prettier eslint-config-prettier --save-dev
$ npm install @types/supertest --save-dev
```

# VSCode plugins
- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [tslint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): deprecated
