import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    quantity: z.number(),
    buyerName: z.string(),
    buyDate: z.string(),
  }),
});

export const OrdersHistoryValidations = { createOrderValidationSchema };
