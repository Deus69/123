"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typeController_1 = __importDefault(require("../controllers/typeController"));
var trackedorwheeledController_1 = __importDefault(require("../controllers/trackedorwheeledController"));
var constructionMachineryContoller_1 = __importDefault(require("../controllers/constructionMachineryContoller"));
var userController_1 = __importDefault(require("../controllers/userController"));
var router = (0, express_1.Router)();
router.post("/typecreate", typeController_1.default.create);
router.get("/typegetall", typeController_1.default.getAll);
router.delete("/typedelete", typeController_1.default.delete);
router.post("/trackedorWheeledcreate", trackedorwheeledController_1.default.create);
router.get("/trackedorWheeledgetall", trackedorwheeledController_1.default.getAll);
router.get("/trackedorWheeledgetone", trackedorwheeledController_1.default.getOne);
router.delete("/trackedorWheeleddelete", trackedorwheeledController_1.default.delete);
router.post("/constructionMachinerycreate", constructionMachineryContoller_1.default.create);
router.get("/constructionMachinerygetall", constructionMachineryContoller_1.default.getAll);
router.get("/constructionMachinerygetone", constructionMachineryContoller_1.default.getOne);
router.delete("/constructionMachinerydelete", constructionMachineryContoller_1.default.delete);
router.post("/constructionMachineryToRent", constructionMachineryContoller_1.default.ToRent);
router.post("/registration", userController_1.default.registration);
router.post("/login", userController_1.default.login);
exports.default = router;
