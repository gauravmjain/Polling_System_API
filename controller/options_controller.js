const Question = require("../models/questions");
const Option = require ('../models/options');

module.exports.create =async function(req,res){

    try{
        
        let question = await Question.findById(req.params.id);
        // console.log(question);
        if(question){
            let option = await Option.create({
                option : req.body.option,
                question : req.params.id,
            })
            let add_vote =  await Option.findByIdAndUpdate(option._id,{add_vote : `http://localhost:7000/api/v1/options/${option.id}/add_vote`});
            await Question.findByIdAndUpdate(req.params.id,{$push :{options : option._id}});
            res.status(200).json({
                option : add_vote, 
            })
        }
    }catch(err){
        console.log("Error at option controller",err);
        return;
    }
    
}

module.exports.destroy = async (req, res) => {
    let option = await Option.findByIdAndDelete(req.params.id);
    // console.log(option)
    if(option){
       await Question.findByIdAndUpdate(option.question,{$pull : {options : option.id}});
    }
    res.status(200).send(option);
}

module.exports.addVote = async function(req,res){
    let option = await Option.findByIdAndUpdate(req.params.id, {$inc : {votes : 1}})
    res.send(option)
} 