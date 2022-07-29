import inquirer from 'inquirer';
// const fs = require('fs');
import * as fs from 'fs';


const startQuestions = [
  
    {
      type: 'input',
      name: 'manager_name',
      message: "What's your manager's name?",
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "What's your manager's id?",
    },
    {
      type: 'input',
      name: 'manager_email',
      message: "What's your manager's email?",
    },
    {
      type: 'input',
      name: 'manager_phone',
      message: "What's your manager's office number?",
    },
]

const engineerOrIntern = [
    {
      type: 'list',
      name: 'engineer_intern',
      message: "Do you have an engineer or intern?",
      choices: ['engineer','intern']
    },
]

const engineerQuestions = [
    {
      type: 'input',
      name: 'engineer_name',
      message: "What's your engineer's name?",
    },
    {
      type: 'input',
      name: 'engineer_id',
      message: "What's your engineer's id?",
    },
    {
      type: 'input',
      name: 'engineer_email',
      message: "What's your engineer's email?",
    },
    {
      type: 'input',
      name: 'engineer_github',
      message: "What's your engineer's github?",
    },
]

const internQuestions = [
    {
      type: 'input',
      name: 'intern_name',
      message: "What's your intern's name?",
    },
    {
      type: 'input',
      name: 'intern_id',
      message: "What's your intern's id?",
    },
    {
      type: 'input',
      name: 'intern_email',
      message: "What's your intern's email?",
    },
    {
      type: 'input',
      name: 'intern_github',
      message: "What's your intern's github?",
    },
]

async function startApp() {

  // start of html file
  let fileContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  
      <link rel="stylesheet" type="text/css" href="./reset.css" />
      <link rel="stylesheet" type="text/css" href="./style.css" />
  
      <title>Team Profile Generator</title>
  
  </head>
  <body>
          <h1>Team Information/Contacts</h1>
  
          <div class="col s12">
              <div class="team">
              
                  <div class="card-container">
                      
                      `;
                      
 
// body/cards of html file
  await inquirer.prompt(startQuestions)
  .then(data => {


    fileContent += `
    <div class="manager" id="managerCard">
      <div class="card-content">
        <p class="managerName">
          Manager Name: ${data.manager_name}
        </p>                                                           
        <p class="managerID">
            ID: ${data.manager_id}
        </p>
        <p class="managerEmail">
            Email:<a href="mailto:${data.manager_email}">${data.manager_email}</a>
            
        </p>
        <p class="managerPhone">
            Office Number: ${data.manager_phone}
        </p>                           
      </div>
    </div>`  
  })

  let engineerInternAnswer = ""

  await inquirer.prompt(engineerOrIntern)
  .then(data => {
    engineerInternAnswer = data.engineer_intern
    console.log(engineerInternAnswer);
  })

  if (engineerInternAnswer === "engineer") {
    await inquirer.prompt(engineerQuestions)
    .then(data => {
      fileContent += `<div class="engineer" id="engineerCard">
        <div class="card-content">
            <p class="engineerName">
                Engineer Name: ${data.engineer_name}
            </p>
            <p class="engineerID">
                ID: ${data.engineer_id}
            </p>
            <p class="engineerEmail">
                Email: <a href="mailto:${data.engineer_email}">${data.engineer_email}</a>
            </p>
            <p class="engineerGithub">
                Github: <a href="https://github.com/${data.engineer_github}">${data.engineer_github}</a>
            </p>                           
        </div>
      </div>`

    })
  } else {
    await inquirer.prompt(internQuestions)
    .then(data => {
      fileContent += `<div class="intern" id="internCard">
        <div class="card-content">
            <p class="internName">
                Intern Name: ${data.intern_name}
            </p>
            <p class="internID">
                ID: ${data.intern_id}
            </p>
            <p class="internEmail">
                Email: <a href="mailto:${data.intern_email}">${data.intern_email}</a>
            </p>
            <p class="internGithub">
                Github: <a href="https://github.com/${data.intern_github}">${data.intern_github}</a>
            </p>                           
        </div>
      </div>`
    })
  } 
  
 
// end of html file
  fileContent += 
  `
    </div>
      </div>
  
  
  
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" 
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
  
  <script src="./index.js"></script>
  </body>
  </html>`


  fs.writeFile('index.html', fileContent, (err) => { 
    if (err) { 
      console.log(err); 
    } 
  } );
  
}

startApp()


  
// .then((response) => {

//   // fs.writeFile('index.html', response.manager_name,)

//   console.log(response.manager_name);
//   console.log(response.manager_id);
    
      


// writeFile('index.html', response.first_name);

