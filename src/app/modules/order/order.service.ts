import {  TOrderInfo } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrder = async (orderData: TOrderInfo)=> {
     
      // create the order to database
      const result = await OrderModel.create(orderData);
      ;
    
      return result;
  };


export const OrderServices = {
  createOrder,

  
  
};