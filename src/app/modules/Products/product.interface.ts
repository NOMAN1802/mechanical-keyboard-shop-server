export type TInventory = {
    quantity: number;
    inStock: boolean;
};

type TCategory = {
    category: 'featured' | 'regular'
}
export type TProduct = {
  
  image: string; 
  title: string; 
  brand: string; 
  availableQuantity: number; 
  price: number; 
  rating: number;
  description: string;
  category: TCategory;
  inventory: TInventory;
};

export type QueryParams = {
    name?: string;
    brand: string; 
  };


