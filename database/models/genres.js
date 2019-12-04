'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    genre: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
  }, {});
  Genres.associate = function(models) {
    Genres.belongsToMany(models.Songs, {
      through: 'Songs_Genres',
      as: 'songs',
      foreignKey: 'genreId'
    })
  };
  return Genres;
};