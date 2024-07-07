import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';
import notFound from './app/middlewares/notfound';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

const serverController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: `E-commerce Management Server is running on port 🚀${config.port}🚀`,
  });
};

app.get('/', serverController);

//Not Found
app.use(notFound);

export default app;
