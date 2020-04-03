var express = require('express');
var employeesRouter = express.Router();
var fs = require('fs');
var employees = [];

//function router() {

employeesRouter.route('/')
    .get(function (req, res) {
        fs.readFile('employees.json', 'utf-8', function (err, data) {
            if (err) throw err;
            employees = JSON.parse(data).employees;
            res.send(data);
            res.end();
        })
    });

employeesRouter.route('/employee/:id')
    .get(function (req, res) {
        const employeeId = req.params.id;
        console.log(employees.length);
        for (let employee of employees) {
            if (employee.employeeId === employeeId) {
                res.send(employee);
            }
        }
    });

//     return employeesRouter
// }

module.exports = employeesRouter;

