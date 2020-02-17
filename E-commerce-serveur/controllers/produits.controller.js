
const Product = require('../models/produit.model');
exports.getAll = (req , res)=>{

    Product.find({})
    .then(resultat=>{
        res.send(resultat)
    }

    )

}

exports.create = (req, res)=>{
    const p = new Product(req.body)
    p.save()
    .then(resultat=>{
       res.send(resultat) 
    })
}

exports.update = (req, res)=>{
    
    Product.update({_id : req.body._id} , req.body , (err , result)=>{
        res.send(result)
    })
}

exports.delete = (req,res)=>{
    Product.deleteOne({_id : req.params._id})
    .then(result=>{
        res.send(result)
    })
}