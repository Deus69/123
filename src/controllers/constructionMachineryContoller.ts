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

  async ToRent(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const model = await ConstructionMachinery.findOne({ where: { id: id } });
      const quantitymodel: number = model.dataValues.quantity;
      const updateAvailability = async () => {
        await ConstructionMachinery.update(
          {
            quantity:
              (
                await ConstructionMachinery.findOne({ where: { id: id } })
              ).dataValues.quantity + 1,
            Availability: true,
          },
          { where: { id: id } }
        );
        console.log(
          (await ConstructionMachinery.findOne({ where: { id } })).dataValues,
          "WORK!!!"
        );
      };
      if (quantitymodel > 0 && quantitymodel == 1) {
        await ConstructionMachinery.update(
          { quantity: quantitymodel - 1, Availability: false },
          { where: { id: id } }
        );
        setTimeout(updateAvailability, 10000);
      }

      if (quantitymodel > 1) {
        await ConstructionMachinery.update(
          { quantity: quantitymodel - 1 },
          { where: { id: id } }
        );
        setTimeout(updateAvailability, 10000);
      } else {
        return res.status(400).json({ message: "Техника недоступен" });
      }
      res.status(200).json({ message: "Work" });
    } catch (e) {
      res.status(400).json(e);
    }
  }

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
