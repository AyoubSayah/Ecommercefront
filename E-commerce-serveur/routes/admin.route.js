module.exports=(app)=> {

    const controller =require('../controllers/admin.controller')
    app.post('/inscription' ,controller.register);
    app.post('/authentification',controller.login)
    
}