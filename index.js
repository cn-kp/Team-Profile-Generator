const generateHTML = require("./src/generateHTML")
const fs = require("fs")
const inquirer = require("inquirer")

const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const intern = require("./lib/intern")
const manager = require("./lib/manager")

const employeeQuestions=[
    {
        type: "list",
        message: "Which of the following roles does this employee have?",
        name: "role",
        choices: ["Engineer, Intern", "Manager"]

    }
]