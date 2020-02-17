const mongoose=require ('mongoose');
const ChariotSchema = mongoose.Schema({
ref: String ,
nom : String,
prix : Number

})

module.exports = mongoose.model('Chariot' , ChariotSchema)