/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { OrdersHistoryValidations } from './order.validation';
import { OrdersService } from './order.service';
import { Types } from 'mongoose';
import httpStatus from 'http-status';

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

    res.status(httpStatus.CREATED).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    let status;
    status = httpStatus.INTERNAL_SERVER_ERROR;

    if (err.message === 'Insufficient quantity available in inventory') {
      status = httpStatus.BAD_REQUEST;
    }

    res.status(status).json({
      success: false,
      message: err.message || 'something went wrong',
    });
  }
};

// Retrieve a list of all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrdersService.getAllOrdersFromDB(email as string);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const OrdersControllers = { createOrder, getAllOrders };
