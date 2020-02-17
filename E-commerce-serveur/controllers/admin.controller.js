const Admin =require('../models/admin.model');
const bcrypt = require('bcryptjs') //moch masbouba par defaut
exports.register=(req,res)=>{
    Admin.findOne({email : req.body.email})
    .then (admin=>{
        if(admin){
            res.send({"message" :"email exist"})
    
        }else{
        const new_admin=new Admin(req.body);
            bcrypt.genSalt(15,(err,key)=>{ //cryptage
            bcrypt.hash(req.body.password,key ,(error ,crypt_pass)=>{
                new_admin.password=crypt_pass ; 
                new_admin.save()
                .then(data => {
                    res.send(data)
                })

            }
            )
        }
     
        )
    }
})
}  


exports.login=(req,res)=>
{
     Admin.findOne({email : req.body.email},(err,admin)=>
    {
        if(!admin)
         {
           res.send({"message" : "email invalid"});

         }else
            {
                //test password validation 
                bcrypt.compare(req.body.password , admin.password,(err,isMatch)=>
                { 
                //if password invalid is match==false 
                    if(!isMatch){
                        res.send({"messsage" :"password invalid"})
                    }else {
                        res.send(admin)
                    }

                })
        
            }
    })  
}