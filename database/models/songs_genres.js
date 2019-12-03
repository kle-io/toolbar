'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs_Genres = sequelize.define('Songs_Genres', {
    songId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      references: {
        model: 'Songs',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
      references: {
        model: 'Genres',
        key: 'id'
      }
    }
  }, {});
  return Songs_Genres;
};