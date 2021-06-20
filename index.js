const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamMembers = [];


//start 
function startApp() {
    return inquirer.prompt(Questions);
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

function roleQuestions({Name, ID, Email,Role}) {
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
        name: "roleVariable"
    },
    {
        type: "list",
        name: "additionalPeople",
        message: "Would you like to add more team members?",
        choices: ["Yes","No"],
    }])
    .then(function({roleVariable, additionalPeople}) {
        let newteamMember = '';
        if (role === "Manager"){
            newteamMember = new Manager(Name, ID, email, roleVariable);
        } else if (role === "Intern") {
            newteamMember = new Intern(Name, ID, email, roleVariable);
        } else if (role === "Engineer") {
            newteamMember = new Engineer(Name, ID, email, roleVariable);
        }
        teamMembers.push(newteamMember);
        generateIndHTML(newteamMember)
        .then(function() {
            if (additionalPeople === "Yes") {
                startApp();
            } else {
                generateFinalHTML();
            }
        });
        
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
        <nav class="navbar navbar-light .bg-danger">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 text-center">My Team</span>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row"> `;
    fs.writeFile("./dist/Teammates.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
};
function generateIndHTML (){
    const Name = member.getName();
        const ID = member.getID()
        const Email = member.getEmail();
        const Role = member.getRole();
        if (Role === "Manager") { 
            const officePhone = member.getOfficeNumber();
            individualDetails = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }

} //different employee cards 
generateFinalHTML(); //General outlook of the page  


initialHTML();
startApp()
    .then (answers => roleQuestions(answers))
    // .then 
    //.then (newEmployee => generateIndHTML(newEmployee))
    // then fs.writeFile general HTML
    .catch(err => {
        console.log(err);
    });