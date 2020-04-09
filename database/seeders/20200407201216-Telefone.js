'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Telefone',
    [
      {
        TELE_NR_DDD: 99,
        TELE_TX_NUMERO: '88888888888',
        USUA_NR_IDENTIFICADOR: 1,
      },
      {
        TELE_NR_DDD: 99,
        TELE_TX_NUMERO: '9999999999',
        USUA_NR_IDENTIFICADOR: 2,
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Telefone', null, {}),
};
