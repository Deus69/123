"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeController_1 = __importDefault(require("../controllers/typeController"));
var router = (0, express_1.Router)();
router.post("/typecreate", typeController_1.default.create);
router.get("/typegetall", typeController_1.default.getAll);
router.delete("/typedelete", typeController_1.default.delete);
exports.default = router;
