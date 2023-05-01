/** @format */

import { Request, Response } from "express";
import { Brand } from "../models/models";

class BrandCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const messege = await Brand.create({ name });
      res.status(200).json(messege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allMessege = await Brand.findAll();
      res.status(200).json(allMessege);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query;
      await Brand.destroy({ where: { id: id.id } });
      res.status(200).json({ messege: "Сообщение удалено" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new BrandCreate();
