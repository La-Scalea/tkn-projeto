'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    USUA_NR_IDENTIFICADOR:{
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    USUA_TX_NOME_USUARIO: DataTypes.STRING,
    USUA_CH_GENERO: DataTypes.CHAR,
    USUA_TX_EMAIL: DataTypes.STRING,
    USUA_DT_NASCIMENTO: DataTypes.DATE,
    USUA_BL_ATIVO: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  }, {timestamps: false, freezeTableName: true});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Telefone);
  };
  Usuario.removeAttribute('id');
  return Usuario;
};
