import express from 'express';
import chalk from 'chalk';
import controller from "./controller.js"

const { languageGenerator } = controller;

const app = express();
const PORT = 3009;

app.get("/", languageGenerator)

app.listen(PORT, console.log(chalk.cyan(`Server runnning on port ${PORT} at http://localhost:${PORT}`)));