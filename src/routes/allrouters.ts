/** @format */

import { Router } from "express";
import TypeCreate from "../controllers/typeController";
import TrackedorWheeledCreate from "../controllers/trackedorwheeledController";
import ConstructionMachineryCreate from "../controllers/constructionMachineryContoller";

const router = Router();

router.post("/typecreate", TypeCreate.create);
router.get("/typegetall", TypeCreate.getAll);
router.delete("/typedelete", TypeCreate.delete);

router.post("/trackedorWheeledcreate", TrackedorWheeledCreate.create);
router.get("/trackedorWheeledgetall", TrackedorWheeledCreate.getAll);
router.get("/trackedorWheeledgetone", TrackedorWheeledCreate.getOne);
router.delete("/trackedorWheeleddelete", TrackedorWheeledCreate.delete);

router.post("/constructionMachinerycreate", ConstructionMachineryCreate.create);
router.get("/constructionMachinerygetall", ConstructionMachineryCreate.getAll);
router.get("/constructionMachinerygetone", ConstructionMachineryCreate.getOne);
router.delete(
  "/constructionMachinerydelete",
  ConstructionMachineryCreate.delete
);
router.post("/constructionMachineryToRent", ConstructionMachineryCreate.ToRent);

export default router;
