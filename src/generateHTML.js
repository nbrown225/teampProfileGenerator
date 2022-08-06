const fs = require('fs');

const Engineer = require('../lib/Engineer');
let teamCards = '';

function cardHandler(employee){
    let htmlString = '';
    switch(employee.getRole()){
        case 'Engineer':
            htmlString = generateEngineer(employee);
            break;
            default:
                console.log('error from switch case');
    }
    return htmlString;
}

// create Engineer card
function generateEngineer(employee){
    return`
    <div class="card">
    <div class="container">
        <h2>${employee.name}</h2>
        <h2>${employee.id}</h2>
        <h4> ID: ${employee.email}</h4>
        <h4> Github: ${employee.github}
    </div>
</div>
`
}




// generate html page 
const generateHTML = function (teamData) {  
    //console.log(teamData);

    teamCards += cardHandler(teamData)
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      <link rel="stylesheet" href="./style.css">
      <title>Teams</title>
  </head>
  <body>
      <header class="card-panel pink lighten-2">
          <h1 class="center">
              My Team
          </h1>
      </header>
      <main class="card-panel teal center">
      <div class="row s12 center">
        ${teamCards}
          <div class="col s3 card-panel" id="intern-card">
              <div class="card-title">
                  <h2 id="name">Bob</h2>
              </div>
              <div class="card-content">
                  <h4 id="role">Intern</h4>
                  <p id="id">3301</p>
                  <p id="email">bob@job.com</p>
                  <p id="school">UCAU</p>
              </div>
          </div>
          <div class="col s3 card-panel" id="manager-card">
              <div class="card-title">
                  <h2 id="name">Ryan</h2>
              </div>
              <div class="card-content">
                  <h4 id="role">Manager</h4>
                  <p id="id">3331</p>
                  <p id="email">ryan@job.com</p>
                  <p id="building">222</p>
              </div>
          </div>

      </div>

  </main>
</body>
</html>
`;
}

// export to index
module.exports = generateHTML; 