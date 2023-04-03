import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  ReactNode,
} from 'react';
import { ShopItem } from '../generated/graphql';
import { CartItem, CartContextType } from '../types';

export const UserCartContext = createContext<CartContextType>({
  cart: null,
  id: null,
  handleAddToCart: () => null,
});

function CartContext({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const handleAddToCart = (item: ShopItem) => {
    const itemExists = cart.find((i) => i.itemId === item.itemId);
    if (itemExists) {
      setCart(
        cart.map((i) => {
          if (i.itemId === item.itemId) {
            const updateQuanaity = i.itemQuantity + 1;
            return { ...i, itemQuantity: updateQuanaity };
          }
          return i;
        })
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          itemQuantity: 1,
        },
      ]);
    }
  };
  const handleRemoveFromCart = (cartItem: CartItem) => {
    const itemToDelete = cart.find((item) => item.itemId === cartItem.itemId);
    if (itemToDelete?.quantity === 1) {
      setCart(cart.filter((c) => c.itemId !== cartItem.itemId));
    } else {
      setCart(
        cart.map((c) => {
          if (c.itemId === cartItem.itemId) {
            const updatedQuantity = c.itemQuantity - 1;
            return { ...c, itemQuantity: updatedQuantity };
          }
          return c;
        })
      );
    }
  };
  return (
    <UserCartContext.Provider
      value={{ cart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;
