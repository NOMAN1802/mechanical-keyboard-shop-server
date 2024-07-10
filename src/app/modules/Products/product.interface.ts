export type TInventory = {
    quantity: number;
    inStock: boolean;
};


export type TProduct = {
  
  image: string; 
  title: string; 
  brand: string; 
  availableQuantity: number; 
  price: number; 
  rating: number;
  description: string;
  category: string;
  inventory: TInventory;
};

export type QueryParams = {
    name?: string;
    brand: string; 
  };


