'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rates }) {
      this.hasMany(Rates, { foreignKey: 'categoryUserId' });
    }
  }
  CategoryUser.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'CategoryUser',
    }
  );
  return CategoryUser;
};
