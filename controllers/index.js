const models = require('../database/models');

const criarUsuario = async (req, res) => {
  console.dir(req.body);
  try {
    const usuario = await models.Usuario.create(req.body);
    return res.status(201).json({ usuario });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const listaUsuarios = async (req, res) => {
  try {
    const usuarios = await models.Usuario.findAll();
    return res.status(200).json({ usuarios });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const criarTelefone = async (req, res) => {
  console.dir(req.body);
  console.dir("---------||---------");
  console.dir(req.params);
  try {
    const { USUA_NR_IDENTIFICADOR } = req.params;
    const { TELE_NR_DDD, TELE_TX_NUMERO } = req.body

    const usuario = await models.Usuario.findByPk(USUA_NR_IDENTIFICADOR);

    if(!usuario){
      return res.status(400).json({error: 'Usuário não encontrado'})
    }
    else{
      const telefone = await models.Telefone.create({TELE_NR_DDD, TELE_TX_NUMERO, USUA_NR_IDENTIFICADOR});
      return res.status(201).json({ telefone });
    }
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

module.exports = {
  criarUsuario,
  listaUsuarios,
  criarTelefone
}
