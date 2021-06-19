const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./lib/Employee");
//const Engineer = require("./lib/Engineer");
//const Intern = require("./lib/Intern");
//const Manager = require("./lib/Manager");
const teamMembers = [];

//Role
const Role = [
    {
        type: 'list',
        name: 'Role',
        message: "Please select the employee's role (Required)",
        choices: ['Manager', 'Engineer','Intern'],
        validate: roleChoice => {
            if (roleChoice) {
                return true;
            } else {
                console.log("Please select the employee's role (Required)");
                return false;
            }
        }
    },

]

function specificQuestions({Role}) {
    console.log(Role);
    if (Role === "Manager") {
        managerInfo (Role);
    }else if (Role === "Engineer") {
        engineerInfo (Role);
    }else if (Role === "Intern") {
        internInfo (Role);
    }
};

// Manager Info 
function managerInfo (Role) {
    inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Please enter the manager's name (Required)",
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
        message: "Please the enter manager's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please the enter manager's ID");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter the  manager's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the manager's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Office',
        message: "Please enter the manager's office number (Required)",
        validate: officeN => {
            if (officeN) {
                return true;
            } else {
                console.log("Please enter the manager's office number");
                return false;
            }
        }
    },
    //newEmployee = new Manager(Name, ID, Email, Office, Role);
    //teamMembers.push(newEmployee);
    //add do you want to add an engineer or intern add if so return to menu otherwise run the rest
    ])
}

// EngineerInfo 
function engineerInfo (Role) {
    inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Please enter the Engineer's name (Required)",
        validate: nameValue => {
            if (nameValue) {
                return true;
            } else {
                console.log('Please enter the name of the Engineer!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "Please enter the Engineer's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please enter Engineer's ID");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter the Engineer's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the Engineer's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please enter the Engineer's GitHub username (Required)",
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log("Please enter the Engineer's GitHub username");
                return false;
            }
        }
    },
    ])
    //newEmployee = new Engineer(Name, ID, Email, Github, Role);
    //teamMembers.push(newEmployee);
    //add add do you want to add a user, if so return to menu otherwise run the rest
}

//Intern Info
function internInfo (Role) {
    inquirer.prompt([
    {
        type: 'input',
        name: 'Name',
        message: "Please enter the Intern's name (Required)",
        validate: nameValue => {
            if (nameValue) {
                return true;
            } else {
                console.log('Please enter the name of the Intern!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "Please enter the Intern's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please enter the Intern's ID");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter the Intern's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the Intern's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please enter the Intern's School (Required)",
        validate: gitHub => {
            if (gitHub) {
                return true;
            } else {
                console.log("Please enter the Intern's School");
                return false;
            }
        }
    },
    ])
    //newEmployee = new Intern(Name, ID, Email, School, Role);
    //teamMembers.push(newEmployee);
    //add add do you want to add a user, if so return to menu otherwise run the rest 
}

//generateIndHTML (); different employee cards 
//generateHTML(); General outlook of the page  


function startApp() {
    return inquirer.prompt(Role);
};

startApp()
    .then (Role => specificQuestions(Role))
    //.then (newEmployee => generateIndHTML(newEmployee))
    // then fs.writeFile general HTML