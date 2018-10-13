
const express = require('express');
const path =  require ('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const users = require('./routes/users');
const port = 3000;

//Connection to databse
mongoose.connect(config.database, {useNewUrlParser: true});

//On connection
mongoose.connection.on('connected', ()=>{
    console.log('connected database'+config.database);
})

//On error
mongoose.connection.on('error', (err)=>{
    console.log('Cannot connect, database error'+err);
})
//CORS middleware
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser Middleware
app.use(bodyParser.json());


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);

//Index Route
app.get('/',(req,res) =>{
    res.send('Invalid endpoint');
});

//Start server
app.listen(port, () => {
    console.log('Server started on port '+port);
    
});