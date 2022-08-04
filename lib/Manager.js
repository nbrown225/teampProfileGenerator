const Employee = require('../lib/Employee');

class Manager extends Employee{
    constructor(name, id, email, building){
        super(name, id, email, building);
        this.building = building;
    }
};

module.exports = Manager