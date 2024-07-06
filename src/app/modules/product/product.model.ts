import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  tags: {
    type: [String],
  },
  variants: {
    type: [
      {
        type: {
          type: String,
        },
        value: {
          type: String,
        },
      },
    ],
  },
  inventory: {
    quantity: {
      type: Number,
    },
    inStock: {
      type: Boolean,
    },
  },
});

export const Product = model<TProduct>('Product', ProductSchema);
