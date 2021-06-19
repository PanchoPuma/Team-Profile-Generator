const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamMembers = [];

const questions = [
    {
        type: 'input',
        name: 'Name',
        message: "Please enter employee's name (Required)",
        validate: nameValue => {
            if (nameValue) {
                return true;
            } else {
                console.log('Please enter the name of the employee!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "Please enter employee's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please enter employee's ID");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter employee's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter employee's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office number',
        message: "Please enter employee's office number (Required)",
        validate: officeN => {
            if (officeN) {
                return true;
            } else {
                console.log("Please enter employee's office number");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'Role',
        message: "Please select employee's role (Required)",
        choices: ['Engineer', 'Manager','Intern'],
        validate: roleChoice => {
            if (roleChoice) {
                return true;
            } else {
                console.log("Please select employee's role (Required)");
                return false;
            }
        }
    },

]

function specificQuestions();

addAnother ();
generateHTML();


//function startApp() {
//     return inquirer.prompt(questions);
// };

// startApp()
//     .then (answers => specificQuestions(answers))