import { Dispatch, SetStateAction } from 'react';
import { ShopItem } from './generated/graphql';

// AUTH
export interface FormState {
  email: string;
  password: string;
}
export type RegisterScehma = {
  email: string;
  password: string;
  confirmPassword: string;
};
export interface User {
  email: string | null;
  id: string | null;
}

export interface AuthContextType {
  user: null | User;
  setUser: Dispatch<SetStateAction<User>>;
}

// CART
export interface CartItem extends ShopItem {
  itemQuantity: number;
}

export interface CartContextType {
  cart: CartItem[] | null;
  id: string | null;
  handleAddToCart: (item: ShopItem) => void;
  handleRemoveFromCart: (item: CartItem) => void;
  total: () => number;
  setCart: (item: ShopItem) => void;
}
