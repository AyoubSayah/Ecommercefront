

const mongoose=require ('mongoose');
const ProductSchema = mongoose.Schema({

    nom : String ,
    ref : String,
    categorie : String,
    prix : Number,
    qte : Number,
    description : String,
    url2: String ,
    valida :String
})

//exportation  du schema
module.exports = mongoose.model('Product' , ProductSchema)