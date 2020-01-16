var express = require('express');
const app = express();
var fs = require('fs');
var port = process.env.port || 5000;

app.get('/', function (req, res) {
    fs.readFile('sample.json', 'utf-8', function (err, data) {
        if (err) throw err;
        res.send(data);
    })
});

app.listen(port, function (err) {
    if (err) throw err
    console.log("Server is running on port - " + port)
});

/*
npm start
pmp2 start app.js

*/

/*server{
    listen 5001;
    server_name  localhost;
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

nginx */