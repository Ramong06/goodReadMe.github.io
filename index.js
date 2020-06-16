const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your project",
},
{
    type: "input",
    name: "description",
    message: "Describe ReadMe",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Table of Contents",
    default: "I II III IV V"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
  },
  {
    type: "input",
    name: "Contributing",
    message: "List all Contributors",
  },
  {
    type: "input",
    name: "Usage",
    message: "Describe Usage",
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


