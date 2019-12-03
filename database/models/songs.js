'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    // id: {
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    artist: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    liked: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    cover: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    length: DataTypes.INTEGER,
    song: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Songs.associate = function(models) {
    // associations can be defined here
    Songs.belongsToMany(models.Genres, {
      through: 'Songs_Genres',
      as: 'genres',
      foreinKey: 'songId'
    })
  };
  return Songs;
};