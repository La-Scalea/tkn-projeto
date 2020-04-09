const models = require('../database/models');
const httpStatus = require('http-status-codes');

const usuarioCriar = async (req, res) => {
  try {
    const usuario = await models.Usuario.create(req.body);
    return res.status(httpStatus.CREATED).json({ usuario });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.message})
  }
}

const usuarioListar = async (req, res) => {
  try {
    const usuarios = await models.Usuario.findAll();
    return res.status(httpStatus.OK).json({ usuarios });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const usuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await models.Usuario.findOne({where: { USUA_NR_IDENTIFICADOR: id }});

    if (usuario) {
      return res.status(httpStatus.OK).json({ usuario });
    }else{
      return res.status(httpStatus.NOT_FOUND).send("Usuário não encontrado");
    }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const usuarioAlterar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await models.Usuario.findOne({where: { USUA_NR_IDENTIFICADOR: id }});

    if (usuario) {
      //hook é necessário para se referir a instancia especifica da alteração
      const usuarioAlterado = await models.Usuario.update(req.body, { where: { USUA_NR_IDENTIFICADOR: id }, individualHooks: true });
      return res.status(httpStatus.OK).json({ usuarioAlterado });
    }else{
      return res.status(httpStatus.NOT_FOUND).send("Não foi possivel alterar o usuário, pois ele não foi encontrado");
    }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const usuarioApagar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await models.Usuario.destroy({where: { USUA_NR_IDENTIFICADOR: id }});
    if (usuario) {
      return res.status(httpStatus.NO_CONTENT).send("Usuário removido");
    }else{
    return res.status(httpStatus.NOT_FOUND).send("Não foi possivel remover o usuário, pois ele não foi encontrado");
  }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

const usuarioInativar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await models.Usuario.findOne({where: { USUA_NR_IDENTIFICADOR: id }});

    if (usuario) {
      //exclusão lógica.
      const usuarioAlterado = await models.Usuario.update({USUA_BL_ATIVO: false}, { where: { USUA_NR_IDENTIFICADOR: id }});
      return res.status(httpStatus.OK).json({ usuarioAlterado });
    }else{
      return res.status(httpStatus.NOT_FOUND).send("Não foi possivel inativar o usuário, pois ele não foi encontrado");
    }
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
};

module.exports = {
  usuarioCriar,
  usuarioListar,
  usuarioPorId,
  usuarioAlterar,
  usuarioApagar,
  usuarioInativar
}
