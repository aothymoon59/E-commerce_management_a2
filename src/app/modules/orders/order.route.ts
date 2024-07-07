import express from 'express';
import { OrdersControllers } from './order.controller';

const router = express.Router();

router.post('/', OrdersControllers.createOrder);

export const OrderRoutes = router;
