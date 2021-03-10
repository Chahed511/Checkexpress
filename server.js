//const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const port = 2000;


// Global Midelewear 

app.use(express.json());


// Midelewear condition time log  
function timerlog(req, res, next) {
    const date = new Date();
    const h = date.getHours();
    const day = date.getDay();
    //console.log(date, h, day);
    if (day >= 1 && day <= 5 && h >= 9 && h <= 17) {
        next();
    }
    else {

        res.sendFile(path.join(__dirname + '/express/error.html'));

    }
}

app.use(timerlog);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/Home.html'));
});

app.get('/Services', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/Services.html'));
});

app.get('/Contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/express/Contact.html'));
});

app.listen(port, (error) => {
    error ?
        console.log(error)
        : console.log('Server listening on port ' + port)
});
