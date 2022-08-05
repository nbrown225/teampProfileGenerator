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
        console.log(answers);
        teamData.push(answers);
        console.log(teamData);
        // // let {name, id} = answers;
        // // const engineer = (name, id);
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
                name: 'school',
                message: 'Enter school (REQUIRED)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('School is REQUIRED to continue');
                        return false;
                    }
                }
            }
        ]
        )
        // CHECK IF NAME WAS ENTERED
        .then((answers) =>{
            console.log(answers);
            teamData.push(answers);
            console.log(teamData);
            // // let {name, id} = answers;
            // // const engineer = (name, id);
            // // teamData.push(engineer);
            // // console.log(teamData);
    
        })
    }

// MANAGER
function addManager() {
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
                type: 'list',
                name: 'building',
                choices: [111, 222, 333],
                message: 'Choose Building number (REQUIRED)',
                validate: buildingInput => {
                    if (buildingInput) {
                        return true;
                    } else {
                        console.log('Building is REQUIRED to continue');
                        return false;
                    }
                }
            }
        ]
        )
    // CHECK IF NAME WAS ENTERED
    .then((answers) =>{
        console.log(answers);
        teamData.push(answers);
        console.log(teamData);
        // // let {name, id} = answers;
        // // const engineer = (name, id);
        // // teamData.push(engineer);
        // // console.log(teamData);

    })
}


chooseRole();