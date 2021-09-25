import express, {Request, Response} from "express";
import { Departments } from "../models/departments.interface";
import * as departmentService from "../services/department.service";
const oRouter = express.Router();

oRouter.get("/", async (req: Request, res: Response) => {
    departmentService.findAll((err: Error, orders: Departments[]) => {
    if (err) {
      return res.status(500).json({"errorMessage": err.message});
    }

    res.status(200).json({"data": orders});
  });
});

oRouter.post("/", async (req: Request, res: Response) => {
  const newOrder: BasicOrder = req.body;
  orderModel.create(newOrder, (err: Error, orderId: number) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).json({"orderId": orderId});
  });
});

oRouter.get("/:id", async (req: Request, res: Response) => {
  const orderId: number = Number(req.params.id);
  orderModel.findOne(orderId, (err: Error, order: Order) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }
    res.status(200).json({"data": order});
  })
});

oRouter.put("/:id", async (req: Request, res: Response) => {
  const order: Order = req.body;
  orderModel.update(order, (err: Error) => {
    if (err) {
      return res.status(500).json({"message": err.message});
    }

    res.status(200).send();
  })
});

export {oRouter};