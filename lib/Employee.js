class Employee {

    constructor (Name, ID, Email) {
        this.Name = Name;
        this.ID = ID;
        this.Email = Email;
    }
    getName() {
        return this.Name;
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
