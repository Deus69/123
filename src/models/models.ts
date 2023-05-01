/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const ConstructionMachinery = DataBase.define("constructionMachinery", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.STRING },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  Availability: { type: DataTypes.BOOLEAN, defaultValue: true },
});

const Type = DataBase.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const TrackedorWheeled = DataBase.define("trackedorwheeled", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Brand = DataBase.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Type.hasMany(ConstructionMachinery);
ConstructionMachinery.belongsTo(Type);

TrackedorWheeled.hasMany(ConstructionMachinery);
ConstructionMachinery.belongsTo(TrackedorWheeled);

Brand.hasMany(ConstructionMachinery);
ConstructionMachinery.belongsTo(Brand);

export { User, Basket, ConstructionMachinery, Type, TrackedorWheeled, Brand };
