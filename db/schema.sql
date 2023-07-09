DROP DATABASE IF EXISTS employee_db;
-- Creates the "inventory_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect inventory_db --
USE employee_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL PRIMARY KEY auto_increment,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);

CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL PRIMARY KEY auto_increment,
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(100) NOT NULL,
  salary decimal,
  department_id INT,
  foreign key (department_id) references department (id) on delete set null
);

CREATE TABLE employee (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL PRIMARY KEY auto_increment,
  -- Makes a string column called "name" which cannot contain null --
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT,
  foreign key (role_id) references role (id)on delete set null,
  manager_id INT,
  foreign key (manager_id) references employee (id) on delete set null
);