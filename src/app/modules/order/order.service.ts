import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrder = async (orderData: TOrder)=> {
     
      // create the order to database
      const result = await OrderModel.create(orderData);
      console.log(result);
    
      return result;
  };


export const OrderServices = {
  createOrder,

  
  
};