"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackedorWheeled = exports.Type = exports.ConstructionMachinery = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var ConstructionMachinery = database_1.default.define("constructionMachinery", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, unique: false, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    quantity: { type: sequelize_1.default.INTEGER, defaultValue: 1 },
    Availability: { type: sequelize_1.default.BOOLEAN, defaultValue: true },
});
exports.ConstructionMachinery = ConstructionMachinery;
var Type = database_1.default.define("type", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.Type = Type;
var TrackedorWheeled = database_1.default.define("trackedorwheeled", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
});
exports.TrackedorWheeled = TrackedorWheeled;
User.hasOne(Basket);
Basket.belongsTo(User);
Type.hasMany(ConstructionMachinery);
ConstructionMachinery.belongsTo(Type);
TrackedorWheeled.hasMany(ConstructionMachinery);
ConstructionMachinery.belongsTo(TrackedorWheeled);
