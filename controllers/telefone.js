const models = require( '../database/models');

const criarTelefone = async (req, res) => {
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
  criarTelefone
}
