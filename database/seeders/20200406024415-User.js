'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'User', // SELECT skeys(hstore(NULL::"public"."User"));
    [
      {
        USUA_TX_NOME_USUARIO: 'Rodrigo La Scalea',
        USUA_CH_GENERO: 'M',
        USUA_TX_EMAIL: 'la.scalea@live.com',
        USUA_DT_NASCIMENTO: '1987-08-29',
        USUA_DT_CRIACAO: new Date(),
        USUA_DT_ALTERACAO: null,
        USUA_BL_ATIVO: true,
      },
      {
        USUA_TX_NOME_USUARIO: 'Ana Cristina Ribeiro',
        USUA_CH_GENERO: 'F',
        USUA_TX_EMAIL: 'a.crisrib@gmail.com',
        USUA_DT_NASCIMENTO: '1985-07-04',
        USUA_DT_CRIACAO: new Date(),
        USUA_DT_ALTERACAO: null,
        USUA_BL_ATIVO: true,
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}),
};
