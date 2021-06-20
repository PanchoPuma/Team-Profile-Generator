const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamMembers = [];


//start 
function startApp() {
    return inquirer.prompt(questions);
};

//Common questions

const questions = [
    {
        type: 'input',
        name: 'Name',
        message: "Please enter the name of the employee (Required)",
        validate: name => {
            if (name) {
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
        message: "Please the employee's ID (Required)",
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log("Please the employee's IDD");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: "Please enter the  employees's email address (Required)",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter the  employees's email address");
                return false;
            }
        }
    },
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

function roleQuestions({Name, ID, Email, Role}) {
    let roleVariable = "";
    if (Role === "Manager") {
        roleVariable = 'Office Number';
    }else if (Role === "Engineer") {
        roleVariable = 'GitHub Username'
    }else if (Role === "Intern") {
        roleVariable = 'School'
    }
    inquirer.prompt([{
        message: `Enter team member's ${roleVariable}`,
        name: "uniqueRoleVariable"
    }])
    .then(function({uniqueRoleVariable}) {
        let newteamMember = ""
        if (roleVariable === "Office Number"){
            newteamMember = new Manager(Name, ID, Email, uniqueRoleVariable);
            teamMembers.push(newteamMember)
            console.log (teamMembers)
        } else if (roleVariable === "School") {
            newteamMember = new Intern(Name, ID, Email, uniqueRoleVariable);
            teamMembers.push(newteamMember)
            console.log (teamMembers)
        } else if (roleVariable === "GitHub Username") {
            newteamMember = new Engineer(Name, ID, Email, uniqueRoleVariable );
            teamMembers.push(newteamMember)
            console.log (teamMembers)
        }
        generateIndHTML(newteamMember)
        confirmation ()
    })
    .catch(err => {
        console.log(err);
    });
}

/// COnfirming whether 

function confirmation (){
    inquirer.prompt([{
        type: "list",
        name: "additionalPeople",
        message: "Would you like to add more team members?",
        default: 'Yes',
        choices: ["Yes","No"],
    }])
    .then(function({additionalPeople}) {
        if (additionalPeople === "Yes") {
            startApp();
        // } else {
            //generateFinalHTML();
        }
    })
    .catch(err => {
        console.log(err);
    });
}


//HTML functions

function initialHTML () {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title>Team Members</title>
    </head>
    <body>
        <div class=" bg-danger mb-4 py-3 text-center">
            <div class="container-fluid">
                <span class=" h1 text-center">My Team</span>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row"> `;
    fs.writeFile("./dist/Teammates.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};

//different employee cards 

function generateIndHTML (teamMember){
    return new Promise(function(resolve, reject) {
    const Name = teamMember.getName();
    console.log (Name)
    const ID = teamMember.getID()
    const Email = teamMember.getEmail();
    const Role = teamMember.getRole();
    let individualDetails = ""
    if (Role === "Manager") { 
            const OfficeNu = teamMember.getOfficeNumber();
            individualDetails = 
            `
            <div class="col-4">
                <div class="bg-primary card mx-auto mb-3">
                    <h5 class="card-header text-center">${Name}<br/>Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${ID}</li>
                        <li class="list-group-item">Email Address: ${Email}</li>
                        <li class="list-group-item">Office Phone: ${OfficeNu}</li>
                    </ul>
                </div>
            </div>`
        }




        fs.appendFile("./dist/Teammates.html", individualDetails, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
} 
//generateFinalHTML(); //General outlook of the page  


initialHTML();
startApp()
    .then (answers => roleQuestions(answers))
    //.then (() => confirmation())
    //.then (newteamMember => generateIndHTML(newteamMember))
    // then fs.writeFile general HTML
    .catch(err => {
        console.log(err);
    });