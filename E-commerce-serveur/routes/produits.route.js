module.exports = (app)=> {

    const prod = require('../controllers/produits.controller')
    app.get('/produits' , prod.getAll );
    app.post('/produit' , prod.create );
    app.put('/produit' , prod.update );
    app.delete('/produit/:_id' , prod.delete );

}