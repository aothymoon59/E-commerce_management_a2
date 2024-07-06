import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
// import { StudentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/v1/students", StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(`E-commerce Management Server is running on port ${config.port}!`);
});

export default app;
