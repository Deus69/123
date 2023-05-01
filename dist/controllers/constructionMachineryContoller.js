"use strict";
/** @format */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models/models");
var ConstructionMachineryCreate = /** @class */ (function () {
    function ConstructionMachineryCreate() {
    }
    ConstructionMachineryCreate.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, description, quantity, Availability, typeId, trackedorwheeledId, createmodel, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, name_1 = _a.name, description = _a.description, quantity = _a.quantity, Availability = _a.Availability, typeId = _a.typeId, trackedorwheeledId = _a.trackedorwheeledId;
                        return [4 /*yield*/, models_1.ConstructionMachinery.create({
                                name: name_1,
                                description: description,
                                quantity: quantity,
                                Availability: Availability,
                                typeId: typeId,
                                trackedorwheeledId: trackedorwheeledId,
                            })];
                    case 1:
                        createmodel = _b.sent();
                        res.status(200).json(createmodel);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        res.status(400).json(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ConstructionMachineryCreate.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var getallmodels, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.ConstructionMachinery.findAll()];
                    case 1:
                        getallmodels = _a.sent();
                        res.status(200).json(getallmodels);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        res.status(400).json(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ConstructionMachineryCreate.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getonemodel, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query.id;
                        return [4 /*yield*/, models_1.ConstructionMachinery.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        getonemodel = _a.sent();
                        res.status(200).json(getonemodel);
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        res.status(400).json(e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ConstructionMachineryCreate.prototype.ToRent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_1, model, quantitymodel, updateAvailability, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        id_1 = req.query.id;
                        return [4 /*yield*/, models_1.ConstructionMachinery.findOne({ where: { id: id_1 } })];
                    case 1:
                        model = _a.sent();
                        quantitymodel = model.dataValues.quantity;
                        updateAvailability = function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _b = (_a = models_1.ConstructionMachinery).update;
                                        _e = {};
                                        return [4 /*yield*/, models_1.ConstructionMachinery.findOne({ where: { id: id_1 } })];
                                    case 1: return [4 /*yield*/, _b.apply(_a, [(_e.quantity = (_f.sent()).dataValues.quantity + 1,
                                                _e.Availability = true,
                                                _e), { where: { id: id_1 } }])];
                                    case 2:
                                        _f.sent();
                                        _d = (_c = console).log;
                                        return [4 /*yield*/, models_1.ConstructionMachinery.findOne({ where: { id: id_1 } })];
                                    case 3:
                                        _d.apply(_c, [(_f.sent()).dataValues,
                                            "WORK!!!"]);
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        if (!(quantitymodel > 0 && quantitymodel == 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, models_1.ConstructionMachinery.update({ quantity: quantitymodel - 1, Availability: false }, { where: { id: id_1 } })];
                    case 2:
                        _a.sent();
                        setTimeout(updateAvailability, 10000);
                        _a.label = 3;
                    case 3:
                        if (!(quantitymodel > 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, models_1.ConstructionMachinery.update({ quantity: quantitymodel - 1 }, { where: { id: id_1 } })];
                    case 4:
                        _a.sent();
                        setTimeout(updateAvailability, 10000);
                        return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, res.status(400).json({ message: "Техника недоступен" })];
                    case 6:
                        res.status(200).json({ message: "Work" });
                        return [3 /*break*/, 8];
                    case 7:
                        e_4 = _a.sent();
                        res.status(400).json(e_4);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ConstructionMachineryCreate.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.query;
                        return [4 /*yield*/, models_1.ConstructionMachinery.destroy({ where: { id: id.id } })];
                    case 1:
                        _a.sent();
                        res.status(200).json({ messege: "Сообщение удалено" });
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        res.status(400).json(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ConstructionMachineryCreate;
}());
exports.default = new ConstructionMachineryCreate();
