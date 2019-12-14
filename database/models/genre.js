'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genre: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.Song, {
      through: 'SongGenre',
      as: 'song',
      foreignKey: 'genreId'
    });
  };
  return Genre;
};