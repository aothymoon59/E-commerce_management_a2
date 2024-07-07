import { TOrder } from './order.interface';
import { Order } from './order.model';

// Create a Order
const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

// Get all Orders
const getAllOrdersFromDB = async (email: string) => {
  const query = email ? { email } : {};
  const result = await Order.find(query);
  return result;
};

export const OrdersService = { createOrderIntoDB, getAllOrdersFromDB };
