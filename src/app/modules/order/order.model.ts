import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const OrderSchema: Schema<TOrder> = new Schema<TOrder>({
  
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<TOrder>("Order", OrderSchema);