const express = require('express');
const { bienvenida } = require('../controllers/indexControllers');
const router = express.Router();

/* GET home page. */
router.get('/', bienvenida);

module.exports = router;
