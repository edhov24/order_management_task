import express from "express";
import ClientOrdersController from "../controllers/ClientOrdersController";

const router = express.Router();

router.get("/all", ClientOrdersController.getAllClients)
router.post("/", ClientOrdersController.createClient)

export default router;