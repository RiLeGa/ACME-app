const { where } = require("sequelize");
const db = require("../../models");

module.exports={
    login:(req,res) => {
        return res.render('login')
    },
    logueado: (req, res) => {
        const { dni, pass } = req.body;
        db.Usuario.findOne({
            where: { dni : dni }
        }).then(usuario => {
            usuario ? res.render('home') : res.status(404).send('Usuario no encontrado')
        })
    },
    home: (req,res) => {
        return res.render('home')
    },
    registro:(req,res) => {
        return res.render('formNuevo')
    },
    nuevaPersona: (req, res) => {
        let { nombreMiembro, apellidoMiembro, celularMiembro, edadMiembro, oracionMiembro } = req.body;
        db.Miembro.create({
            nombre:nombreMiembro,
            apellido:apellidoMiembro,
            celular:celularMiembro,
            edad:edadMiembro,
            oracion:oracionMiembro
            }).then( nvoMiembre => {
                return res.redirect('home')
            })
    },
    listaDeMiembros: async (req,res) => {
        db.Miembro.findAll({
            include:[{ all: true}]
        })
        .then((miembros)  =>  {
            /* return res.send(miembros) */
            return res.render('listaDeMiembros', {
                miembros
            })
        })
        .catch(error => res.send(error))
    }
}