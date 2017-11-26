const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/exams', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.delete('/deleteAllExams', (req, res) => {
    connection((db) => {
        db.collection('exams').remove()
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Get users
router.get('/users', (req, res) => {
    console.log("i'm in get users");
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.post('/exam', (req, res) => {
    console.log("i'm in post exam");
    console.log(req.body);
    connection((db) => {
        db.collection('exams')
            .insertOne(req.body)
            .then((exams) => {
                response.data = exams;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
})

router.get('/exams', (req, res) => {
    console.log("i'm in get exam");
    connection((db) => {
        db.collection('exams')
            .find()
            .toArray()
            .then((exams) => {
                response.data = exams;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;