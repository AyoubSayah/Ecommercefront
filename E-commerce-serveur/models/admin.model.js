const mongoose=require ('mongoose');
const AdminSchema =mongoose.Schema({
    firstname : String , 
    lastname:String , 
    email : String,
    password : String,
    
})
//exportation de schema 
module.exports = mongoose.model('Admin',AdminSchema)