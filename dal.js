const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    db = client.db('myproject');
});

function create(name, email, password){
    return new Promise(( resolve, reject) => {
        const collection = db.collection('user');
        const doc = {name, password, email, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

function findOne(email){
    return new Promise((resolve, reject) => {
        const customers = db
            .collections('users')
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
    })
}

function update(email, amount){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnOriginal: false},
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );
    });
}

function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, update, findOne, all};