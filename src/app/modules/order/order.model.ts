import { Schema, model } from "mongoose";
import { TOrderInfo } from "./order.interface";

const orderSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true }
});

const orderInfoSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  products: { type: [orderSchema], required: true },
  payment: { type: String, enum: ['cashOnDelivery', 'stripe'], required: true }
});

export const OrderModel = model<TOrderInfo>("Order", orderInfoSchema);
