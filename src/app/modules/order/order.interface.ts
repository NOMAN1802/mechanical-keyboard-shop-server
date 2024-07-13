// order.interface.ts
export type TOrdered = {
  product: string;
  quantity: number;
};

export type TOrderInfo = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  products: TOrdered[];  
  payment: "cashOnDelivery" | "stripe";
};
