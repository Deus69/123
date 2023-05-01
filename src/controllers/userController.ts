/** @format */

import { User, Basket } from "../models/models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Некорректный email или password" });
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      res
        .status(400)
        .json({ message: "Пользователь c таким email уже существует" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    await Basket.create({ userId: user.dataValues.id });
    const token = jwt.sign(
      { id: user.dataValues.id, email, role },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.status(200).json({ token });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(403).json({ message: "Пользователь не найден" });
    }
    let comparePassword = bcrypt.compareSync(
      password,
      user.dataValues.password
    );
    if (!comparePassword) {
      res.status(403).json({ message: "Указан неверный пароль" });
    }
    const token = jwt.sign(
      { id: user.dataValues.id, email, role: user.dataValues.role },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    return res.json({ token });
  }
}

export default new UserController();
