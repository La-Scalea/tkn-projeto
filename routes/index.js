const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.get('/usuarios', controllers.listaUsuarios);
router.post('/usuarios', controllers.criarUsuario);

router.post('/usuarios/:USUA_NR_IDENTIFICADOR/telefones', controllers.criarTelefone);

module.exports = router;
