/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/modules/Products/product.route";
const app = express();

//parsers
app.use(express.json());

app.use("/api/products", ProductRoutes);

app.get('/', (req:Request, res:Response) => {
  res.send('ClickCraft is running...!')
})

export default app;