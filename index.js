const inquirer = require('inquirer');
const fs = require('fs');
// Import and require mysql2
const mysql = require("mysql2");


// Connect to database
const db = mysql.createConnection({
    user: 'root',
    database: "employee_db",
    password: "LuckyLu",
    host: "localhost",
    port: 3306
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
else if (response.choice == "update an employee role") {
  updateEmployee()
}
});

} 

function viewDepartments() {
    db.query("select * from department", (err, res) =>{
        if (err) {console.log(err)}
        console.table(res)
        menu()
    })
}
function viewRoles() {
    db.query("select * from role", (err, res) =>{
        if (err) {console.log(err)}
        console.table(res)
        menu()
    })
}

function viewEmployees() {
  db.query("select * from employee", (err, res) =>{
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
  db.query("insert into department (name) values ('" + response.dname + "')", (err, res) =>{
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
      name: 'title'      
    },
    {
      type: 'input',
      message: 'what is the salary in this role?',
      name: 'salary'    
    },
    {
      type: 'input',
      message: 'enter department id',
      name: 'id'
    },

    ])
    .then((response) => { 
  db.query("insert into role (title, salary, department_id) values ('" + response.title + "', " + response.salary + ", " + response.id +")", (err, res) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })});
}

function addEmployee() {
  inquirer 
  .prompt([
    {
      type: 'input',
      message: 'what is the employee first name?',
      name: 'fName'      
    },
    {
      type: 'input',
      message: 'what is the employee last name?',
      name: 'lName'    
    },
    {
      type: 'input',
      message: 'enter role id',
      name: 'id'
    },
    {
      type: 'input',
      message: 'enter manager id',
      name: 'manager_id'
    },
    ])
    .then((response) => { 
  db.query(`insert into employee (first_name, last_name, role_id, manager_id) values("${response.fName}", "${response.lName}", ${response.id}, ${response.manager_id})`, (err, res) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })
})
}
function updateEmployee() {
  inquirer 
  .prompt([
    {
      type: 'input',
      message: 'what is the employee id?',
      name: 'empId'      
    },
    {
      type: 'input',
      message: 'what is the new role id?',
      name: 'roleId'    
    },

    ])
    .then((response) => { 
  db.query(`update employee set role_id = ${response.roleId} where id = ${response.empId}`, (err, res) =>{
      if (err) {console.log(err)}
      console.table(res)
      menu()
  })
})
}
menu();

// .then((answers) => {
//   const htmlPageContent = generateHTML(answers);

//   fs.writeFile('index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created index.html!')
//   );
// });