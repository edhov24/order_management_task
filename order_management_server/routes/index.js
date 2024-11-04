const express = require('express');
const router = express.Router();

import orders from "./orders";
import clients from "./clients";

router.use('/orders', orders);
router.use('/clients', clients);

export default router
