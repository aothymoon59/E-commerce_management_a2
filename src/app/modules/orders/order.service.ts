// import { Types } from 'mongoose';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  // Check if quantity is greater than 0
  if (quantity <= 0) {
    throw new Error('Quantity must be greater than 0');
  }

  // Check inventory
  const inventoryItem = await Product.findById(productId);

  if (!inventoryItem) {
    throw new Error('Order not found');
  }

  if (inventoryItem.inventory.quantity < quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // Update inventory
  inventoryItem.inventory.quantity -= quantity;
  inventoryItem.inventory.inStock = inventoryItem.inventory.quantity > 0;
  await inventoryItem.save();

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
