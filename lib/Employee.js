class Employee {

    constructor (name, ID, Email) {
        this.name = name;
        this.ID = ID;
        this.Email = Email;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.Email;
    }
    getRole() {
        return "Employee";
    }

}

module.exports = Employee; 
