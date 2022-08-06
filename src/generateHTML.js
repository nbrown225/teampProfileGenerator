


const cardArr = [];
// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
    if (engineer){
        engineerCard = generateEngineer(engineer);
        cardArr.push(engineerCard)
    }


// generate html page 
const generateHTML = function (cardArr) {  
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
        ${cardArr}
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