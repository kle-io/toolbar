'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
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
    song: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    duration: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});

  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsToMany(models.Genre, {
      through: 'SongGenre',
      as: 'genre',
      foreinKey: 'songId'
    });
  };
  return Song;
};