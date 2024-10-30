const {check, body} = require('express-validator')
/* const usuarios = require('../data/usuarios.json') */
const bcryptjs = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    /* Dni */
    check('dni').trim()
    .notEmpty().withMessage('Debe ingresar su dni').bail()
    .isNumeric().withMessage('Debe ingresar su dni sin puntos'),

    /* Contraseña */
    check('pass').trim()
    .notEmpty().withMessage('Debe ingresar su contraseña').bail()
    .isLength({min:8}).withMessage('Debe contener al menos 8 caracteres'),

    /* body("pass")
    .custom((value, {req}) => {
       return db.Usuario.findOne({
            where: {
                dni : req.body.dni
            }
       })
       .then(user => {
           if(!bcryptjs.compareSync(value, user.dataValues.contrasenia)){
               return Promise.reject()
           }
       })
       .catch(() => {
           return Promise.reject("Dni o contraseña incorrecta")
       })
    }) */
]
