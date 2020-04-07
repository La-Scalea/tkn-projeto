'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define('Telefone', {
    TELE_NR_IDENTIFICADOR: DataTypes.INTEGER,
    TELE_NR_DDD: DataTypes.INTEGER,
    TELE_TX_NUMERO: DataTypes.STRING,
    USUA_NR_IDENTIFICADOR: DataTypes.INTEGER
  }, {timestamps: false, freezeTableName: true});
  Telefone.associate = function(models) {
    // associations can be defined here
    Telefone.belongsTo(models.Usuario,{as: 'Usuario', foreignKey: 'USUA_NR_IDENTIFICADOR'});
  };
  Telefone.removeAttribute('id');
  return Telefone;
};
