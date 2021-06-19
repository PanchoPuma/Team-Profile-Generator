const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
//const Manager = require("./lib/Manager");
const teamMembers = [];

const question = [
    
    {
        type: 'list',
        name: 'Role',
        message: "Please select employee's role (Required)",
        choices: ['Manager', 'Engineer','Intern'],
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

function specificQuestions(Role) {
    if (Role === "Manager") {
        managerInfo (Role);
    }
}

;

function managerInfo (Role) {
    inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Please enter manager's name (Required)",
        validate: nameValue => {
            if (nameValue) {
                return true;
            } else {
                console.log('Please enter the name of the manager!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "Please enter manager's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please enter manager's ID");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter manager's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter manager's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Office',
        message: "Please enter manager's office number (Required)",
        validate: officeN => {
            if (officeN) {
                return true;
            } else {
                console.log("Please enter manager's office number");
                return false;
            }
        }
    },
    ])
}

//Engineer ();
//Intern ();
//generateHTML();


function startApp() {
    return inquirer.prompt(question);
};

startApp()
    .then (answer => specificQuestions(answer))