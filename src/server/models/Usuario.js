require('dotenv').config();
const bcrypt = require('bcrypt')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    USUA_NR_IDENTIFICADOR:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USUA_TX_NOME: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: { args: [0,60], msg: 'ErrorModelUser: O máximo de caracteres permitido são 60.' }
      }
    },
    USUA_CH_GENERO: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: { args: [0,1], msg: 'ErrorModelUser: Valor esperado é M ou F.' }
      }
    },
    USUA_TX_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: { args: [0,60], msg: 'ErrorModelUser: O máximo de caracteres permitido são 60.' }
      }
    },
    USUA_TX_SENHA: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        //len: { args: [0,15], msg: 'ErrorModelUser: O máximo de caracteres permitido são 15.' }
      }
    },
    USUA_DT_NASCIMENTO: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    USUA_BL_ATIVO: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {timestamps: false, freezeTableName: true});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Telefone);
  };
  Usuario.removeAttribute('id');
  Usuario.beforeSave(function (usuario) {
    const salt = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    usuario.set('USUA_TX_SENHA', bcrypt.hashSync(usuario.USUA_TX_SENHA, salt));
  });
  Usuario.authenticate = async function(loginEmail, loginPassword) {
    const usuario = await Usuario.findOne({ where: { USUA_TX_EMAIL: loginEmail } });
    if (bcrypt.compareSync(loginPassword, usuario.USUA_TX_SENHA)) {
      return usuario.authorize();
    }
    throw new Error('invalid password');
  }
  return Usuario;
};
