import app from './app';

const serverless = require("serverless-http");
const handler = serverless(app);

export = handler;
