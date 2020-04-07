'use strict';
module.exports = (sequelize, DataTypes) => {
  const Telefone = sequelize.define('Telefone', {
    TELE_NR_IDENTIFICADOR:{
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    TELE_NR_DDD: DataTypes.INTEGER,
    TELE_TX_NUMERO: DataTypes.STRING,
    USUA_NR_IDENTIFICADOR: DataTypes.UUID
  }, {timestamps: false, freezeTableName: true});
  Telefone.associate = function(models) {
    // associations can be defined here
    Telefone.belongsTo(models.Usuario, {
       foreignKey: {
         name: 'USUA_NR_IDENTIFICADOR',
         type: DataTypes.UUID
       },
       as: 'Usuario'
    });
  };
  Telefone.removeAttribute('id');
  return Telefone;
};
