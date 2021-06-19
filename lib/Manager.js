const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (Name, ID, Email, OfficeNu) {
        super (Name, ID, Email);
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
