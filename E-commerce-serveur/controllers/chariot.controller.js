const Chariot = require('../models/chariot.model');
exports.getAll = (req , res)=>{

    Chariot.find({})
    .then(resultat=>{
        res.send(resultat)
    }

    )

}
exports.create = (req, res)=>{
    const c= new Chariot(req.body)
    c.save()
    .then(resultat=>{
       res.send(resultat) 
    })
}
exports.delete = (req,res)=>{
    Chariot.deleteOne({_id : req.params._id})
       .then(result=>{
        res.send(result)
        console.log(result)
    })
}
Chariot.deleteMany({})