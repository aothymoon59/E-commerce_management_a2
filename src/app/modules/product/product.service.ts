import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create a product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }],
  });
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

/* const updateProductFromDB = async (
  productId: string,
  productData: TProduct,
) => {
  const result = await Product.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  return result;
}; */

const updateProductFromDB = async (
  productId: string,
  productData: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { $set: productData },
    { new: true, runValidators: true },
  );
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
