var inquirer = require("inquirer");
function test () {
    inquirer.prompt({
        type: 'name', 
        name: 'name',
        message: 'name?',
    })
}
test();