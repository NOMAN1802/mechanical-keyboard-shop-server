// order.validation.ts
import { z } from "zod";

const TOrderedSchema = z.object({
  product: z.string(),
  quantity: z.number().min(1),
});

const OrderZodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
  products: z.array(TOrderedSchema),  
  payment: z.enum(["cashOnDelivery", "stripe"]),
});

export default OrderZodSchema;
