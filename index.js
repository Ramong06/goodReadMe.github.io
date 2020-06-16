const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your name?",
    default: "Ramon"
},
{
    type: "input",
    name: "location",
    message: "Where are you from?",
    default: "Houston"
  },
  {
    type: "input",
    name: "color",
    message: "What is your favorite color?",
    default: "red"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
  },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(process.cwd() + fileName, data);
}

// function to initialize program
function init() {
inquirer.prompt(questions).then(responses => {
    writeToFile('readMe.md', generateMarkdown(responses));
})
}

// function call to initialize program
init();


//create github repo


