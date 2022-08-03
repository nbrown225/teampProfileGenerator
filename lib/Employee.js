// employee object
class Employee {
    constructor (name, id, email, github, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role;
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

    // GITHUB
    getGithub () {
        return this.github;
    }

    // ROLE
    getRole () {
        return 'Employee'
    }
}


module.exports = Employee;