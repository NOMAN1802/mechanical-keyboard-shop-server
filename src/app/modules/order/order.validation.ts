import { z } from "zod";


const OrderZodSchema = z.object({
  
  productId: z.string(),
  price: z.number().positive("Price will be positive number"),
  quantity: z.number().positive().int("Quantity  will be positive integer number"),
});

export default OrderZodSchema;