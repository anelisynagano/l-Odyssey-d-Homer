const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');
  
router.post('/signup', function(req, res, next) {

    var user  = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.lastname
    ];
    connection.query(
        'INSERT INTO users SET email= ?, password=?, name=?, lastname=?',
        user,
        function (error, results, fields) {
            console.log(results, fields);
            if(error) {
                res.status(500).end();
                console.log(error);
            }
            res.end();
        }
    );
});


module.exports = router;