/** @format */

import { Router } from "express";
import TypeCreate from "../controllers/typeController";

const router = Router();

router.post("/typecreate", TypeCreate.create);
router.get("/typegetall", TypeCreate.getAll);
router.delete("/typedelete", TypeCreate.delete);

export default router;
