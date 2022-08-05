const inquirer = require("inquirer");
// // const Employee = require('./Employee');
// // const Engineer = require('./Engineer');
// // const Intern = require('./Intern');
// // const Manager = require('./Manager');

inquirer
.prompt({
    type: 'list', 
    name: 'name',
    message: 'what name'
})
module.exports = Questions