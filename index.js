const inquirer = require('inquirer');
const fs = require('fs');
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
// const app = inquirer();

// Express middleware
// app.use(inquirer.urlencoded({ extended: false }));
// app.use(inquirer.json());

// Connect to database
const db = mysql.createConnection({
    user: 'root',
    database: "employee_db",
    password: "LuckyLu",
    host: "localhost"
  },
  console.log(`Connected to the employee_db database.`)
);

function menu() {
inquirer 
  .prompt([
    {
      type: 'list',
      message: 'what would you like to do?',
      name: 'choice',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },
    ])
  .then((response) => {
    if (response.choice == "view all departments") {
        viewDepartments()
    }
    else if (response.choice == "view all roles") {
        viewRoles()
    }
    else if (response.choice == "view all employees") {
      viewEmployees()
  }
  else if (response.choice == "add a department") {
    addDepartment()
}
else if (response.choice == "add a role") {
  addRole()
}
else if (response.choice == "add an employee") {
  addEmployee()
}

  });



} 

function viewDepartments() {
    db.query("select * from department", (res, err) =>{
        if (err) {console.log(err)}
        console.table(res)
        menu()
    })
}
function viewRoles() {
    db.query("select * from role", (res, err) =>{
        if (err) {console.log(err)}
        console.table(res)
        menu()
    })
}

function viewEmployees() {
  db.query("select * from employees", (res, err) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })
}

function addDepartment() {
  inquirer 
  .prompt([
    {
      type: 'input',
      message: 'what is the department name?',
      name: 'dname'      
    },
    ]) 
    .then((response) => {
  db.query("insert into department (name) values ('" + response.dname + "')", (res, err) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
    })});
}

function addRole() {
  inquirer 
  .prompt([
    {
      type: 'input',
      message: 'what is the role name?',
      name: 'dname'      
    },
    ])
    .then((response) => { 
  db.query("insert into role (name) values ('" + response.dname + "')", (res, err) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })});
}
function addEmployee() {
  db.query("insert * into employee", (res, err) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })
}
function updateEmployee() {
  db.query("update * into employee", (res, err) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })
}
menu();

// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });