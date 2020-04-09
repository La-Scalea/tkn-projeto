const { Router } = require('express');
const UsuarioController = require('../controllers/usuario')

const router = Router();

router.get('/usuarios', UsuarioController.usuarioListar);
router.get('/usuarios/:id', UsuarioController.usuarioPorId);
router.post('/usuarios', UsuarioController.usuarioCriar);
router.put('/usuarios/:id', UsuarioController.usuarioAlterar);
//router.delete('/usuarios/:id', UsuarioController.usuarioInativar);
router.delete('/usuarios/:id', UsuarioController.usuarioApagar); // removido pois apenas a exclusão logica é utilizada


module.exports = router;
