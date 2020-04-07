'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Telefone', {
      TELE_NR_IDENTIFICADOR: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      TELE_NR_DDD: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      TELE_TX_NUMERO: {
        allowNull: false,
        type: Sequelize.STRING
      },
      USUA_NR_IDENTIFICADOR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key:'USUA_NR_IDENTIFICADOR'
        }
      }
    }
  );
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Telefone');
  }
};
