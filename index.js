const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./package-lock.json');
const gitInfo = require('./package-lock.json');
const api = require('./package-lock.json');

const questions = [
        {
            type: "input",
            message: "What is your github username?",
            name: "name",
            validate: function (answer) {
                if(answer.length < 1) {
                    return console.log("username is required to continue.")
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "installation",
            default: "npm i"

        },
        {
            type: "input",
            message: "What command should be run to test?",
            name: "test",
            default: "npm run test"
        },
    ]
    
    const promptUser = ()=> {
        return inquirer
        .prompt(questions);
    }
    
    const writeToFile = (fileName, data) => {
        return writeFileAsync(fileName, data);
    }
    
    const init = async () => {
        try{
            console.log("Welcome to the ReadMe generator.\nPlease answer the following questions:")

            const answer = await promptUser();

            const fileContent = generatedMd(answers);

            await writeToFile("./ReamMe/index.js:59:33", fileContent);

            console.log("ReadMe.md created in output folder.");
        } catch (err) {
            console.error("Error creating ReadMe. file not created");
            console.log(err);
        }
    }
    
    init();