import { z } from "zod";



const ProductZodSchema = z.object({
  image: z.string().min(1, "Image is required."),
  title: z.string().min(1, "Title is required.").max(30, "Title cannot be more than 30 characters"),
  brand: z.string().min(1, "Brand is required."),
  price: z.number().positive("Price must be a positive number."),
  rating: z.number().min(0, "Rating must be a positive number.").max(5, "Rating cannot be more than 5."),
  description: z.string().min(1, "Description is required.").max(350, "Description cannot be more than 350 characters"),
  category: z.string().min(1, "Category is required."),
  availableQuantity: z.number().positive("Quantity must be a positive number"),
});



export default ProductZodSchema;
