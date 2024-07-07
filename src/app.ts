import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
import { ProductRoutes } from './app/modules/product/product.route';
import { OrderRoutes } from './app/modules/orders/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: `E-commerce Management Server is running on port 🚀${config.port}🚀`,
  });
});

export default app;
