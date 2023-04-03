import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  ReactNode,
} from 'react';
import { ShopItem } from '../generated/graphql';

export interface CartItem extends ShopItem {
  itemQuantity: number;
}

interface CartContextType {
  cart: CartItem[] | null;
  id: string | null;
  handleAddToCart: (item: ShopItem) => void;
}

export const UserCartContext = createContext<CartContextType>({
  cart: null,
  id: null,
  handleAddToCart: () => null,
});

function CartContext({ children }: { children: ReactNode }) {
  const [cart, addToCart] = useState<CartItem[]>([]);
  console.log(cart);
  const handleAddToCart = (item: ShopItem) => {
    const itemExists = cart.find((i) => i.itemId === item.itemId);
    if (itemExists) {
      addToCart(
        cart.map((i) => {
          if (i.itemId === item.itemId) {
            const updateQuanaity = i.itemQuantity + 1;
            return { ...i, itemQuantity: updateQuanaity };
          }
          return i;
        })
      );
    } else {
      addToCart([
        ...cart,
        {
          ...item,
          itemQuantity: 1,
        },
      ]);
    }
  };
  return (
    <UserCartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;
