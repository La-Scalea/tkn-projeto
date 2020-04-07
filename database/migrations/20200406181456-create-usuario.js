'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Usuario', {
        USUA_NR_IDENTIFICADOR: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4
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
          allowNull: false,
          type: Sequelize.STRING
        },
        USUA_DT_NASCIMENTO: {
          allowNull: false,
          type: Sequelize.DATE
        },
        USUA_BL_ATIVO: {
          defaultValue: true,
          type: Sequelize.BOOLEAN
        },
      },
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Usuario');
  }
};
