const express=require('express');
const router= express.Router();
const mainController= require('../controller/mainController')
const validacion= require('../middlewares/formValidar')


router.get('/',mainController.formulario);




router.post('/',validacion,mainController.user)

module.exports= router