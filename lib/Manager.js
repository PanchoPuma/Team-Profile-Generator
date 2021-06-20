const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, ID, Email, OfficeNu) {
        super (name, ID, Email);
        this.OfficeNu = OfficeNu;
    }
    getOfficeNumber() {
        return this.OfficeNu;
    }
    getRole() {
        return "Manager";
    }
    
}

module.exports = Manager;
