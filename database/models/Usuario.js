'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    USUA_NR_IDENTIFICADOR:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
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
    // associations can be defined here
    Usuario.hasMany(models.Telefone, {
      onDelete: 'Cascade'
    });
  };
  Usuario.removeAttribute('id');
  return Usuario;
};
