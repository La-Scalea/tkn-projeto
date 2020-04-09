'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Usuario',
    [
      {
        USUA_TX_NOME_USUARIO: 'Usuario Hum da Silva',
        USUA_CH_GENERO: 'M',
        USUA_TX_EMAIL: 'testeemail@live.com',
        USUA_DT_NASCIMENTO: '1999-12-12',
        USUA_BL_ATIVO: true,
      },
      {
        USUA_TX_NOME_USUARIO: 'Usuario Dois da Silva',
        USUA_CH_GENERO: 'F',
        USUA_TX_EMAIL: 'testeemail@gmail.com',
        USUA_DT_NASCIMENTO: '1999-12-12',
        USUA_BL_ATIVO: true,
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Usuario', null, {}),
};
