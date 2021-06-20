const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, ID, Email, Github) {
        super(name, ID, Email);
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