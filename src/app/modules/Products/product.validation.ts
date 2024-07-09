import { z } from "zod";

const InventoryZodSchema = z.object({
  quantity: z.number().min(0, "Quantity must be a positive number."),
  inStock: z.boolean().refine((param) => param !== null, {
    message: "In-stock status is required.",
  }),
});

const CategoryZodSchema = z.object({
  category: z.enum(['featured', 'regular'], {
    required_error: 'Category is required.',
  }),
});

const ProductZodSchema = z.object({
  image: z.string().min(1, "Image is required."),
  title: z.string().min(1, "Title is required.").max(20, "Title can not be more than 20 characters"),
  brand: z.string().min(1, "Brand is required."),
  availableQuantity: z.number().min(0, "Available quantity must be a positive number."),
  price: z.number().positive("Price must be a positive number."),
  rating: z.number().min(0, "Rating must be a positive number.").max(5, "Rating cannot be more than 5."),
  description: z.string().min(1, "Description is required.").max(250, "Description can not be more than 250 characters"),
  category: CategoryZodSchema,
  inventory: InventoryZodSchema,
});

export default ProductZodSchema;
