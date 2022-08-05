var inquirer = require("inquirer");

const teamData = []
function chooseRole () {
    inquirer.prompt(
// CHOOSE NEW ROLE
        {
        type: 'list',
        name: 'role',
        message: 'Choose employee role',
        choices: ['Engineer', 'Intern', 'Manager'], 
        validate: roleInput => {
            if (roleInput){
                testWorks();
                return true;
            } else{
                console.log("Role must be chosen to continue");
                return false
            }
        }
    }
    )
    // CHECK ROLE / SWITCH TO CORRESPONDING FUNCTION
    .then(({role}) => {
        if (role == 'Engineer') {
            addEngineer();
        } else if (role == 'Intern'){
            addIntern();
        } else if (role == 'Manager'){
            addManager();
        }
    })
}
// ENGINEER
function addEngineer() {
    inquirer.prompt(
        questions = [
            {
                type: 'text', 
                name: 'newname',
                message: 'enter name',
                
            },
            {
                type: 'test', 
                name: 'id',
                message: 'Enter ID number (REQUIRED)',
                validate: idInput=(value)=>{
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'ID number is REQUIRED!';
                }
            }
        ]
    )
    // CHECK IF NAME WAS ENTERED
    .then((answers) =>{
        console.log(answers);
        teamData.push(answers);
        console.log(teamData);
        // // let {newname, id} = answers;
        // // const engineer = (newname, id);
        // // teamData.push(engineer);
        // // console.log(teamData);

    })
}
// INTERN
function addIntern() {
    inquirer.prompt(
        questions = [
            {
                type: 'text', 
                name: 'newname',
                message: 'enter name',
                
            }
        ]
    )
    .then((answer) => {
        console.log('hello' + answer.newname);
        var {newname} = answer
    })
}
// MANAGER
function addManager() {
    inquirer.prompt(
        questions = [
            {
                type: 'text', 
                name: 'newname',
                message: 'enter name',
                
            }
        ]
    )
    .then((answer) => {
        console.log('hello' + answer.newname);

    })
}
chooseRole();