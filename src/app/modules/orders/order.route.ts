import express from 'express';
import { OrdersControllers } from './order.controller';

const router = express.Router();

router.post('/', OrdersControllers.createOrder);
router.get('/', OrdersControllers.getAllOrders);

export const OrderRoutes = router;
