import { Schema, model } from "mongoose";
import { TInventory, TProduct } from "./product.interface";
import slugify from "slugify";

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'Stock status is required'],
  },
});

const categorySchema = new Schema({
  category: {
    type: String,
    enum: ['featured', 'regular'],
    required: [true, 'Category is required'],
  },
});

const productSchema = new Schema<TProduct>({
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
  },
  availableQuantity: {
    type: Number,
    required: [true, 'Available quantity is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  category: {
    type: categorySchema,
    required: [true, 'Category is required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory is required'],
  },
});

//* Pre-save middleware/hook
productSchema.pre('save', async function (next) {
  const slug = slugify(`${this.description}-${this.price}`, {
    lower: true,
  });
  this.set('slug', slug);
  next();
});

//* Static method
productSchema.statics.isProductExists = async function (id: string) {
  const existingProduct = await this.findById(id);
  return existingProduct;
};

export const Product = model<TProduct>('Product', productSchema);
