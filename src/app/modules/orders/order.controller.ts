/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrdersHistoryValidations } from './order.validation';
import { OrdersService } from './order.service';
import { Types } from 'mongoose';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData =
      OrdersHistoryValidations.createOrderValidationSchema.parse(orderData);

    // Convert productId to Types.ObjectId
    const convertedData = {
      ...zodParsedData,
      productId: new Types.ObjectId(zodParsedData.productId),
    };

    const result = await OrdersService.createOrderIntoDB(convertedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const OrdersControllers = { createOrder };
