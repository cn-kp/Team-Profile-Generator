const generateHTML = require("./src/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

const questions = [
  {
    type: "list",
    message: "Which of the following roles does this employee have?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager"],
  },
  {
    type: "input",
    messgae: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    messgae: "What is the email of the employee?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the employee's ID?",
    name: "id",
  },
  {
    type: "input",
    name: "github",
    message: "What is the Engineer's GitHub?",
    when: (input) => input.role === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "What is the Intern's school?",
    when: (input) => input.role === "Intern",
  },
  {
    type: "input",
    name: "school",
    message: "What is the Manager's office number?",
    when: (input) => input.role === "Manager",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Do you want to add more employee?",
    default: false,
  },
];

var team = [];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Your team-cards is created");
    }
  });
}

async function init() {
  await inquirer.prompt(questions).then((userInput) => {
    team.push(userInput);
    console.log(team);
    if (userInput.addEmployee == true) {
      inquirer.prompt(questions).then((userInput) => {
        team.push(userInput);
      });
    }
    console.log(team);
    writeToFile(`./dist/team-cards.html`, generateHTML(team));
  });
}

init();
