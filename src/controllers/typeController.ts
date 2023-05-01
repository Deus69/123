/** @format */

import { Request, Response } from "express";
import { Type } from "../models/models";

class TypeCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const messege = await Type.create({ name });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const getallmodels = await Type.findAll();
      res.status(200).json(getallmodels);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Type.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new TypeCreate();
