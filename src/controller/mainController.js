const validacionn= require('../middlewares/formValidar')

const controller={
    formulario:(req,res)=>{
        res.render('formulario')
    },
    user:(req,res)=>{
const {nombre,color,email,edad}= req.body
const{ validationResult}=require('express-validator')
const errors= validationResult(req)
 if(errors.isEmpty()){
     res.send('Hola '+ nombre+ ', elegiste el color: '+ color+ ', tu email es: '+ email+ ' y tu edad es: '+ edad)
       
 } else{
    res.render('formulario',{
        errors:errors.mapped(),
        old: req.body
    })
 }

 
    }
}



module.exports=controller