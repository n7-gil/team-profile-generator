import inquirer from 'inquirer';
// const fs = require('fs');
import * as fs from 'fs';

// let fileContent = "";



inquirer
  .prompt([
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
    {
      type: 'list',
      name: 'engineer_intern',
      message: "Do you have an engineer or intern?",
      choices: ['engineer','intern']
    },

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
      name: 'engineer_phone',
      message: "What's your engineer's office phone number?",
    },
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
      name: 'intern_phone',
      message: "What's your intern's office phone number?",
    },
    


  ])
.then((response) => {

  // fs.writeFile('index.html', response.manager_name,)

  console.log(response.manager_name);
  console.log(response.manager_id);
    
      
});

// writeFile('index.html', response.first_name);

