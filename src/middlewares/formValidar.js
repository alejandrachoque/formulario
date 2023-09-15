const { body, validationResult}= require('express-validator');

const validaciones=[
body('nombre').notEmpty().withMessage('Por favor complete el campo'),
body('color').notEmpty().withMessage('Elija un color'),
body('email').notEmpty().withMessage('Por favor complete el campo'),
body('edad').isInt().withMessage('Debe ingresar una edad valida')

]



module.exports= validaciones