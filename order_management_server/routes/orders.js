import express from "express";
import ClientOrdersController from "../controllers/ClientOrdersController";

const router = express.Router();

router.get("/", ClientOrdersController.getClientsWithOrders)
router.post("/", ClientOrdersController.createOrder)

export default router;