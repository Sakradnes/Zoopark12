'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImgAnimals extends Model {
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: 'animalsId' });
    }
  }
  ImgAnimals.init(
    {
      url: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      animalsId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Animals',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'ImgAnimals',
    }
  );
  return ImgAnimals;
};
