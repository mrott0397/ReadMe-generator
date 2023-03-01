
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ email, github, project, description, license, dependencies, test, contribute, usage }) =>
`# ${project}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#how-to-contribute)
- [Test](#test)
- [Apps Used](#applications-used)
- [Questions](#questions)

## Installation
${dependencies}

## Usage
${usage}

## License
[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})



## How to Contribute
${contribute}

## Test
${test}


## Questions
If you have any questions, please contact me at ${email}, and check out more of my work at https://github.com/${github}
`;

inquirer
  .prompt ([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'project',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['Apache', 'Eclipse', 'MIT', 'Mozilla']
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to this project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
      },
  ])
  .then((data) => {
    const readMePage = generateMarkdown(data);
    fs.writeFile('README.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe File!')
    )
  });


