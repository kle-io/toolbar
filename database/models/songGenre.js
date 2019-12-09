'use strict';
module.exports = (sequelize, DataTypes) => {
  const SongGenre = sequelize.define('SongGenre', {
    songId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      references: {
        model: 'Song',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      references: {
        model: 'Genre',
        key: 'id'
      }
    }
  }, {});
  return SongGenre;
};