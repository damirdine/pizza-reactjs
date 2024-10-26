export type CartItemType = {
  price: number;
  name: string;
  size: string;
  quantity: number;
};

export type PizzaType = {
  name: string;
  varients: string[];
  prices: {
    small: number;
    medium: number;
    large: number;
  }[];
  category: string;
  image: string;
  description: string;
};
