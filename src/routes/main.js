const express=require('express');
const router= express.Router();
const mainController= require('../controller/mainController')
const validacion= require('../middlewares/formValidar')
const color= require('../middlewares/clol')

router.get('/',mainController.formulario);




router.post('/',validacion,color,mainController.user)

module.exports= router