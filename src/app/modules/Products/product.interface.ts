

export type TProduct = {
  
  image: string; 
  title: string; 
  brand: string; 
  price: number; 
  rating: number;
  description: string;
  category: string;
  availableQuantity: number;
};

export type QueryParams = {
    name?: string;
    brand?: string; 
  };


