import { z } from "zod";

const product = z.object({
  product: z.string(),
  quantity: z.number(),
});

const OrderZodSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }),
  phoneNumber: z.string({ required_error: "Phone number is required" }),
  address: z.string({ required_error: "Address is required" }),
  products: z.array(product),
  payment: z.enum(["cashOnDelivery", "stripe"], {
    required_error: "Payment method is required",
  }),
});

export default OrderZodSchema;
