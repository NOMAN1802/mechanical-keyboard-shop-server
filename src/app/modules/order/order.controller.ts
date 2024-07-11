import { Request, Response } from "express";
import { TOrder } from "./order.interface";
import { OrderServices } from "./order.service";
import { Product  } from "../Products/product.model";
import OrderZodSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData: TOrder = req.body;

    // Validation using Zod
    const zodParsedData = OrderZodSchema.parse(orderData);
    const orderedProduct = await Product.findById(zodParsedData.productId);
    if (!orderedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    // Check  availability
    if (zodParsedData.quantity > orderedProduct.availableQuantity) {
      return res.status(400).json({
        success: false,
        message: "Requested quantity exceeds available stock",
      });
    }
    // Decrease  quantity
    orderedProduct.availableQuantity -= zodParsedData.quantity;
    
    await orderedProduct.save();
    const result = await OrderServices.createOrder(zodParsedData);
    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};



export const OrderControllers = {
  createOrder,
  
};