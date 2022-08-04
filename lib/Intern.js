const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, school);

        this.school = school;
    }

    getSchool() {
        this.school = this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;