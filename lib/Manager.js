const Employee = require('../lib/Employee');


class Manager extends Employee{
    constructor(name, id, email, building){
        super(name, id, email);

        this.building = building;
    }

    getBuilding(){
        return this.building;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;