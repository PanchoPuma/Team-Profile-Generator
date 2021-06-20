const Employee = require("./Employee");

class Intern extends Employee {
    constructor (Name, ID, Email, School) {
        super (Name, ID, Email);
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
