'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate({ ImgAnimals, Category }) {
      this.hasMany(ImgAnimals, { foreignKey: 'animalsId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Animal.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Animal',
    }
  );
  return Animal;
};
