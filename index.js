const generateHTMLCards = require("./src/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

// creating the question bank and using "when" to display certain questions
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
    name: "room",
    message: "What is the Manager's office number?",
    when: (input) => input.role === "Manager",
  },
  {
    type: "confirm",
    name: "addEmployee",
    message: "Do you want to add more employee/s?",
    default: false,
  },
];

var team = [];
// this is writing the actual html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Your team-cards is created");
    }
  });
}
// creating the class specific objects based on the user's input
async function init() {
  let addEmployee = true;
  
  while (addEmployee) {
    const userInput = await inquirer.prompt(questions);
    switch(userInput.role) {
      case "Engineer":
        response = new engineer(userInput.name,userInput.email,userInput.id,userInput.github);
        team.push(response);
        break;
      case "Intern":
        response = new intern(userInput.name,userInput.email,userInput.id,userInput.school);
        team.push(response);
        break
      case "Manager":
        response = new manager(userInput.name,userInput.email,userInput.id,userInput.room);
        team.push(response);
        break
    }
    // team.push(userInput);
    console.log(team);
    addEmployee = userInput.addEmployee;
  }

  writeToFile(`./dist/team-cards.html`, generateHTMLCards(team))
  
}

init();
