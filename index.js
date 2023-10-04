const express = require('express');
const app = express();
const port = 7000;
const db = require ('./config/mongoose');
// const bodyParser = require('body-parser');

// Middleware to parse JSON request body
app.use(express.urlencoded({extended : true}));



app.use('/',require('./router/index'));


app.listen(port,function(err){
    if(err){
        console.log("Error to create Server at port :", port ,err)
        return;
    }
    console.log("Server up and running on port : ",port);

})