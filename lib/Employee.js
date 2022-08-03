// employee object
class Employee {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    
    
    // get employee by id
    getId () {
        return this.id;
    }

    // get employee by name
    getName () {
        return this.name;
    }

    // get the email
    getEmail () {
        return this.email;
    }
}


module.exports = Employee;