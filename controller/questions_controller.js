const Question = require('../models/questions');
const Option = require('../models/options');


module.exports.create = async function(req,res){
    try{
        let question = await Question.create(req.body);
        res.status(200).send(question);
    }catch(err){
        console.log("Error at Question Controller",err);
        return;
    }
    
}

module.exports.destroy = async (req,res) =>{
    try{
        let question = await Question.findById(req.params.id);
        if(question){
            await Option.deleteMany({question : req.params.id});
            await Question.findByIdAndDelete(req.params.id);
        }
        res.status(200).send(question);

    }catch(err){
        console.log("Error at Question Controller",err);
        return;
    }
}

module.exports.view = async (req,res) => {
    let question = await Question.findById(req.params.id).populate('options');
    console.log(question);
    res.status(200).json(question);
}