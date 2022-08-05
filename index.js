// GET NODE MODULE
var inquirer = require("inquirer");
const fs = require('fs');

// TEAM PROFILES
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const teamData = [];
function chooseRole () {
    console.log(
        '============= ADD NEW EMPLOYEE ==================='
    );
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
    console.log(
        '============= Engineer Criteria ==================='
    );
    inquirer.prompt(
        questions = [
            {
                type: 'text', 
                name: 'name',
                message: 'Enter name (REQUIRED)',
                validate: nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log('Name is REQUIRED to continue');
                        return false;
                    }
                }
                
            },
            {
                type: 'text', 
                name: 'id',
                message: 'Enter ID number (REQUIRED)',
                validate: idInput=(value)=>{
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'ID number is REQUIRED!';
                }
            },
            {
                type: 'text', 
                name: 'email',
                message: 'Enter email (REQUIRED)',
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    } else{
                        console.log('Email is REQUIRED to continue');
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'github',
                message: 'Enter Github (REQUIRED)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else{
                        console.log('Github is REQUIRED to continue');
                        return false;
                    }
                }
            }
        ]
    )
    // CHECK IF NAME WAS ENTERED
    .then((answers) =>{
        //console.log(answers);
        let {name, id, email, github, role} = answers
        teamData.push(answers);
        const engineer = new Engineer (name, id, email, github, role)
        //console.log(teamData);
        console.log(engineer);
        writeFile()


    })
}

function writeFile (data){
    fs.writeFile('./dist/test.html', data, err=>{
        if (err) {
            console.log(err);
            return
        } else {
            console.log('created');
        }
    })
}

function addMore(){

}

chooseRole();