module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {genre: 'R&B'},
      {genre: 'Hip Hop'},
      {genre: 'Jazz'},
      {genre: 'EDM'},
      {genre: 'Indie'},
      {genre: 'Classical'},
      {genre: 'Rock'},
      {genre: 'Heavy Metal'},
      {genre: 'Disco'},
      {genre: 'Instrumental'},
      {genre: 'Country'},
      {genre: 'Soul'},
      {genre: 'Gospel'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};