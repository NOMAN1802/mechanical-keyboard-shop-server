import { Schema, model } from "mongoose";
import {  TProduct } from "./product.interface";
import slugify from "slugify";



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
    type: String,
    required: [true, 'Category is required'],
  },
  availableQuantity: {
    type: Number,
    required: [true, 'AvailableQuantity is required'],
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
