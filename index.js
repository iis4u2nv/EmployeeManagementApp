const inquirer = require('inquirer');
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    user: 'root',
    database: "employee_db",
    password: "LuckyLu",
    host: "localhost"
})
// db.connect()

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
  }

  );
} function viewDepartments() {
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
menu()

