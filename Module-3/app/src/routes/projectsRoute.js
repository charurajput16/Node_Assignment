var express = require('express');
var projectsRouter = express.Router();
var fs = require('fs');

function router() {

    projectsRouter.route('/')
        .get(function (req, res) {
            fs.readFile('projects.json', 'utf-8', function (err, data) {
                if (err) throw err;
                res.send(data);
            })
        });

    projectsRouter.route('/project/:id')
        .get(function (req, res) {
            const projectId = req.params.id;
            for (let project of projects) {
                if (project.projectId === projectId) {
                    res.send(project);
                }
            }
        });

    return projectsRouter
}

module.exports = router;