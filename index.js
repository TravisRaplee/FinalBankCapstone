var express = require('express');
var app = express();
var cors = require('cors');
var dal  = require('./dal.js');

app.use(express.static('public'));
app.use(cors());

async function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        admin.auth().verifyIdToke(token)
        .then(decodedToken => {
            console.log("Decoded Token: ", decodedToken);
            return next();
        }).catch(err => {
            return res.status(401).send('Unauthorized');
        })
    }
    else {
        return res.status(401).send('No token found');
    }
}

app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name,req.params.email,req.params.password)
        .then((user) => {
            console.log(user);
            res.send(user);
        });
});

app.get('/account/update/:email/:amount', (req, res) => {
    dal.update(req.params.email, parseInt(req.params.amount))
        .then(user => {
            console.log(user);
            res.send(user);
        });
});

app.get('/account/all', function (req, res) {
    dal.all()
        .then((docs) => {
            console.log(docs);
            res.send(docs);      
    });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);