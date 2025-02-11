import express from 'express';
import chalk from 'chalk';

const languageGenerator = (req, res) => {
    // blah blah do thing
    console.log(chalk.yellow("Home page loaded."))

    
    const languageList = ["Python", "Java", "Javascript"];
    const randomNum = Math.floor(Math.random() * languageList.length);
    //const randomNum = Math.floor(Math.random() * 3);
    const language = languageList[randomNum];

    console.log(languageList);
    console.log(randomNum);

    console.log(chalk.cyan(`language chosen: ${language}`));
    res.send(`Home page - language chosen: ${language}`)
}

export default {
    languageGenerator
}
