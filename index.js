const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
// create a const to require a list of employees as an array to be accessed by npm inquirer

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootp123',
    database: 'employee_db'
})


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

// functions to view tables which are called upon during init()
function viewDepts() {
    connection.query("SELECT * FROM department", (err,res) => {
        if (err) throw err;
        console.log("results", res);
    })
}

function viewRoles() {
    connection.query("SELECT * FROM job_role", (err,res) => {
        if (err) throw err;
        console.log("results", res);
    })
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", (err,res) => {
        if (err) throw err;
        console.log("results", res);
    })
}

// fucntion to add to tables which are later called upon
function addDept() {
    inquirer.prompt({
        type:'input',
        name:'dept',
        message:'What is the name of the department?'
    })
        .then((data) => {
            console.log(JSON.stringify(data))
        })
}

function init() {

    connection.query("SOURCE db/schema.sql"), (err,res) => {
        if (err) throw err;
        console.log("schema has run", res)
    };

    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Please select from the following options',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add Employee', 'Quit'],
    })
        .then((data) => {
            console.log(JSON.stringify(data.menu))
            if (data.menu === "View all departments") {
                viewDepts()
            } else if (data.menu === "View all roles") {
                viewRoles()
            } else if (data.menu === "View all employees") {
                viewEmployees()
            } else if (data.menu === "Add department") {
                addDept()
            }
        })
}

init()