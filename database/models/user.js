'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    USUA_TX_NOME_USUARIO: DataTypes.STRING,
    USUA_CH_GENERO: DataTypes.CHAR,
    USUA_TX_EMAIL: DataTypes.STRING,
    USUA_DT_NASCIMENTO: DataTypes.DATE,
    USUA_DT_CRIACAO: DataTypes.DATE,
    USUA_DT_ALTERACAO: DataTypes.DATE,
    USUA_BL_ATIVO: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
