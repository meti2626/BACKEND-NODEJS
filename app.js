 const express = require ('express');
 const app = express();
 const morgan = require('morgan')
 const logger = require('./logger');
 const authorized = require('./authorize');

const { add } = require('lodash');

//post method
// static assets

 
const people = require('./2-express-tutorial/routes/people')
const auth= require('./2-express-tutorial/routes/auth')

app.use(express.static ('./2-express-tutorial/methods-public'))
// PARSE FROM DATA
app.use(express.urlencoded({ extended:false}))   //what is this line doing

app.use(express.json())  //what is this line doing


app.use('/api/people', people)
app.use('/api/auth', auth)


app.listen(5000, ()=>{
    console.log('server is listening on port 5000....');
}) 

