const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (Name, ID, Email, Github) {
        super(Name, ID, Email);
        this.Github = Github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.Github;
    }
}

module.exports = Engineer;