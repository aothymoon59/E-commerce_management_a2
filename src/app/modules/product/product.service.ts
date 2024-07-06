import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create a new product
const createNewProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

export const productServices = {
  createNewProductIntoDB,
};
