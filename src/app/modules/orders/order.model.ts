import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  email: {
    type: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});
export const Order = model<TOrder>('Orders', OrderSchema);
