const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0/Polling_System");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error at connecting MongoDb"));
db.once('open',function(){
    console.log("connectd to Database :: MongoDB");
})

module.exports = db;