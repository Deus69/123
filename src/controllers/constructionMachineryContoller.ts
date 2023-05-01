/** @format */

import { Request, Response } from "express";
import { ConstructionMachinery } from "../models/models";

class ConstructionMachineryCreate {
  async create(req: Request, res: Response) {
    try {
      const {
        name,
        description,
        quantity,
        Availability,
        typeId,
        trackedorwheeledId,
      } = req.body;
      const createmodel = await ConstructionMachinery.create({
        name,
        description,
        quantity,
        Availability,
        typeId,
        trackedorwheeledId,
      });
      res.status(200).json(createmodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await ConstructionMachinery.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getonemodel = await ConstructionMachinery.findOne({
        where: { id: id },
      });
      res.status(200).json(getonemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }
  z;
  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await ConstructionMachinery.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new ConstructionMachineryCreate();
