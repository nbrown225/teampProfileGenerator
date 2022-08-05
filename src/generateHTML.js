const fs = require('fs');

const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function generatePage () {
    return
    `
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel='stylesheet' href='./dist/style.css'></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            <title>TEAMS</title>
        </head>
        <header class="card-panel pink lighten-2">
        <h1 class="center">
            My Team
        </h1>
    </header>
    </html>
}