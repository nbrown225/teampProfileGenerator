const Employee = require('../lib/Employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, school);

        this.school = school;
    }

}

module.exports = Intern;