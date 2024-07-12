import { Types } from "mongoose";

export type TOrdered = {
  product: Types.ObjectId;
  quantity: number;
};
export type TOrderInfo = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  products: [TOrdered];
  payment: TPaymentMethod;
};

export type TPaymentMethod = "cashOnDelivery" | "stripe";

