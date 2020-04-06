'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      USUA_NR_IDENTIFICADOR: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      USUA_TX_NOME_USUARIO: {
        allowNull: false,
        type: Sequelize.STRING
      },
      USUA_CH_GENERO: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      USUA_TX_EMAIL: {
        unique: true,
        type: Sequelize.STRING
      },
      USUA_DT_NASCIMENTO: {
        allowNull: false,
        type: Sequelize.DATE
      },
      USUA_DT_CRIACAO: {
        allowNull: false,
        type: Sequelize.DATE
      },
      USUA_DT_ALTERACAO: {
        defaultValue: null,
        type: Sequelize.DATE
      },
      USUA_BL_ATIVO: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
