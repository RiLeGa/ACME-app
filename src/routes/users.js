const express = require('express');
const { login, nuevaPersona, home, logueado, registro, listaDeMiembros } = require('../controllers/userController');
const router = express.Router();


router.get('/login', login);
router.post('/login', logueado);
router.get('/home', home);
router.get('/registro', registro);
router.post('/registro', nuevaPersona);
router.get('/miembros', listaDeMiembros);

module.exports = router;
