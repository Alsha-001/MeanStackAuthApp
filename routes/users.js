const express = require ('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const user = require('../models/users');
//Register
router.post('/register', (req, res, next) =>{
    let newUser = new user({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    })

    user.addUser(newUser,(err, usr) =>{
        if(err){
            res.json({success : false, msg : 'Failed to register user'});
        }
        else{
            res.json({success : true, msg : 'User successfully registered'});
        }
    })
});

//Authenticate
router.post('/authenticate', (req, res, next) =>{
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) =>{
    res.send('PROFILE');
});

//Validate
router.get('/validate', (req, res, next) =>{
    res.send('VALIDATE');
});

module.exports = router;