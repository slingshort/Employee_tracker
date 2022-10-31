# employee_tracker

## Table of contents
  - [Project Description](#description)
  - [Installation information](#Installation)  
  - [Demo](#Demo)
  - [Credits](#Credits)
  - [Further Development](#FurtherDev)

## Description
This is a command line application that allows users to store and access sql data from the command line

## Installation information
Before running the applicaion, the schema needs to be sourced. This can be done by running the command <br>
 ```mysql -u root -p``` <br>
then suppling the mysql password. After this, the schema.sql file can be sourced by running <br>
```SOURCE db/schema.sqwl```<br>
then, the application can be initialised using <br>
```npm start```

## Demo
A demo video is included

## Credits
Third party resources:
NPM enquirer docs
- https://www.npmjs.com/package/inquirer#prompt
CTable
- https://www.npmjs.com/package/console.table
mySQL2
- https://www.npmjs.com/package/mysql2

Reference resources:
- askBCS
- Stack Overflow
- MDN docs

## Further Development
For future development:
- Will find a way to store information about whether or not an employee is a manager as a boolean value in the schema. This was difficult to do as it had to be rendered conditionally.
- use a .env file to store credentials
- use index.js to run schema before inquirer prompts so that this does not have to be manually done and the only thing that the user needs to do to use the application is to run 'npm start'

