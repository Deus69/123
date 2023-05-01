/** @format */

import { Request, Response } from "express";
import { TrackedorWheeled } from "../models/models";

class TrackedorWheeledCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const messege = await TrackedorWheeled.create({ name });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await TrackedorWheeled.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const getonemodel = await TrackedorWheeled.findOne({ where: { id: id } });
      res.status(200).json(getonemodel);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await TrackedorWheeled.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TrackedorWheeledCreate();
