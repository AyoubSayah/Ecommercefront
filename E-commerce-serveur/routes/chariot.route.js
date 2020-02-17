module.exports=(app)=> {

    const char = require('../controllers/chariot.controller')
    app.get('/chariots' , char.getAll );
    app.post('/chariot' , char.create );
    app.delete('/chariot/:_id' , char.delete );
    
    

}