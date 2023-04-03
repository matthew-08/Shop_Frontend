import { createContext } from 'react';
import { ShopItem } from '../generated/graphql';

interface CartContextType {
  cart: ShopItem[] | null;
  id: string | null;
}

const UserCartContext = createContext<CartContextType>({
  cart: null,
  id: null,
});

const CartContext = () => {
  return {};
};

export default CartContext;
