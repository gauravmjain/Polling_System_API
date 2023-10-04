const mongoose = require('mongoose');
const Question = require('./questions');

const optionSchema = new mongoose.Schema({
    option : {
        type : String,
        required : true
    },
    question : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question',
        required : true
    },
    votes : {
        type : Number,
        default : 0
    },
    add_vote : {
        type : String
    }
},{
    timestamps : true
})

const Option = mongoose.model('Option',optionSchema);

module.exports = Option;