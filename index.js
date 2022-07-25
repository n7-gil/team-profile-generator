const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What are the names of your team members?',
      name: 'membernames',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your Github?',
      name: 'github',
    },

  ])
  .then((response) =>
    response.confirm === response.membernames
      ? console.log('Got those names!')
      : console.log('I did not get that')
      
  );

  then((response) =>
      response.confirm === response.email
          ? console.log('Nice email!')
          : console.log('Try again')

  );

  then((response) =>
      response.confirm === response.github
          ? console.log('Awesome!')
          : console.log('Negative')
  );

