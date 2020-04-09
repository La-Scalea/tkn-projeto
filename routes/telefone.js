const { Router } = require('express');
const TelefoneController = require('../controllers/telefone')

const router = Router();

router.post('/usuarios/:id/telefones', TelefoneController.criarTelefone);

module.exports = router;
