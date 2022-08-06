// GET NODE MODULE
var inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
// TEAM PROFILES
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let engineerQuestions = [
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
];


const teamMembers = [];
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
    inquirer.prompt(engineerQuestions).then((engineerAnswers)=>{
    console.log(engineerAnswers);
    const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
    );
    teamMembers.push(engineer);
    console.log(teamMembers);
    })
    return writeToFile(teamMembers)
}
function writeToFile(data){
    fs.writeFile('./dist/testthis.html', generateHTML(data), 'utf-8', err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('succes');
        }
    })
}


chooseRole();