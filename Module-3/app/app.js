
var express = require('express');
var app = express();
var port = process.env.port || 7800;
var fs = require('fs');

var employeesRouter = require('./src/routes/employeesRoute');
var projectsRouter = require('./src/routes/projectsRoute');

app.get('/', function (req, res) {
    res.send("This is from express");
});

app.use('/employees', employeesRouter);
app.use('/projects', projectsRouter);

app.listen(port, function (err) {
    if (err) throw err
    console.log("Server is running on port - " + port)
});

// let employees = [];
// let projects = [];

// app.get('/employees', function (req, res) {
//     fs.readFile('employees.json', 'utf-8', function (err, data) {
//         if (err) throw err;
//         employees = JSON.parse(data).employees;
//         res.send(data);
//     })
// });


// app.get('/employee/:id', function (req, res) {
//     const employeeId = req.params.id;
//     for (let employee of employees) {
//         if (employee.employeeId === employeeId) {
//             res.send(employee);
//             // return;
//         }
//     }
// });

// app.get('/projects', function (req, res) {
//     fs.readFile('projects.json', 'utf-8', function (err, data) {
//         if (err) throw err;
//         projects = JSON.parse(data).projects;
//         res.send(data);
//     })
// });

// app.get('/project/:id', function (req, res) {
//     const projectId = req.params.id;
//     for (let project of projects) {
//         if (project.projectId === projectId) {
//             res.send(project);
//         }
//     }
// });
