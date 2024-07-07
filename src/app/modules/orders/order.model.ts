import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  email: {
    type: String,
  },
  productId: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});
export const Order = model<TOrder>('Order', OrderSchema);
