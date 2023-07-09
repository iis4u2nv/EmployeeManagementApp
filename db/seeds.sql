INSERT INTO department (name)
VALUES ("HR"),
       ("IT"),
       ("Finance"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Person", 100000, 1),
       ("IT Person", 150000, 2),
       ("Finance Person", 120000, 3),
       ("Sales Person", 200000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jacob", "Carver", 1, null),
       ("Amazing", "Grace", 2, null),
       ("John","Doe", 3, null),
       ("Jane", "Doe", 4, null);