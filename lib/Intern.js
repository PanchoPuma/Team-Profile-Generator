const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, ID, Email, School) {
        super (name, ID, Email);
        this.School = School;
    }
    getSchool() {
        return this.School;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
