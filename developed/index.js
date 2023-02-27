
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ project, description, license, dependencies, test, contribute, usage, apps }) =>
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

## Applications Used
${apps}
`;

inquirer
  .prompt ([
    {
      type: 'input',
      name: 'name',
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
        message: 'What does the user need about using this repo?',
      },
      {
        type: 'input',
        name: 'apps',
        message: 'What applications did you use for this project?',
      },
  ])
  .then((data) => {
    const readMePage = generateMarkdown(data);
    fs.writeFile('README.md', readMePage, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe File!')
    )
  });


