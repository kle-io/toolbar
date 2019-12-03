'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // },
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