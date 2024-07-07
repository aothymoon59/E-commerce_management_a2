import { z } from 'zod';

const createOrderValidationSchema = z.object({
  email: z.string(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const OrdersHistoryValidations = { createOrderValidationSchema };
