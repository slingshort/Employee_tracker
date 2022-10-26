const inquirer = require('inquirer')
const cTable = require('console.table')
const mysql = require('mysql2')
// create a const to require a list of employees as an array to be accessed by npm inquirer

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootp123'
    database: 'employee_db'
})

const initPrompt = [
    {
        type: 'list',
        name: 'menu',
        message: 'Please select from the following options',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add Employee', 'Quit']
    }
]

const addRole = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the job role called?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    },

    {
        type: 'list',
        name: 'department',
        message: 'Which department is this role for?'
        // choices with department array from database
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'What is the last name of the employee?'
    }, 
    {
        type: 'input',
        name: 'role',
        message: 'What is the role of this employee?'
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Who is the manager for this employee?'
        // managers
    }
]

const updateEmployee = [
    {
        type: 'list',
        name: 'update',
        message: 'Please choose which employee you would like to update information for',
        // choices: variable globally stored
    },
    {
        type: 'list',
        name: 'selectfrom',
        message: 'Which role do you want to assign the chosen employee to?',
        // choices: variable globally stored.ß
    }
]