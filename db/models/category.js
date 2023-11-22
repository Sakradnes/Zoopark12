'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Animal }) {
      this.hasMany(Animal, { foreignKey: 'categoryId' });
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
