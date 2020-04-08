/*const { Router } = require('express');
//const controllers = require('../controllers');

const UsuarioController = require('../controllers/usuario')
const TelefoneController = require('../controllers/telefone')

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.get('/usuarios', UsuarioController.listaUsuarios);
router.post('/usuarios', UsuarioController.criarUsuario);

router.post('/usuarios/:USUA_NR_IDENTIFICADOR/telefones', TelefoneController.criarTelefone);

module.exports = router;
*/

const usuariosRouter = require('./usuario')
const telefoneRouter = require('./telefone')

const router = [usuariosRouter, telefoneRouter ]

module.exports = router;
