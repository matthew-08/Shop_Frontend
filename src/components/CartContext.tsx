import { createContext, useState, ReactNode } from 'react';
import { ShopItem } from '../generated/graphql';
import { CartItem, CartContextType } from '../types';

export const UserCartContext = createContext<CartContextType>({
  cart: null,
  id: null,
  handleAddToCart: () => null,
  handleRemoveFromCart: () => null,
  total: () => 0,
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
    if (itemToDelete?.itemQuantity === 1) {
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
  const total = () => {
    if (cart.length === 0) {
      return 0;
    }
    const total = cart.reduce((acc, item) => {
      // eslint-disable-next-line no-param-reassign
      acc += item.itemPrice * item.itemQuantity;
      return acc;
    }, 0);
    return total;
  };
  return (
    <UserCartContext.Provider
      value={{ cart, handleAddToCart, handleRemoveFromCart, total }}
    >
      {children}
    </UserCartContext.Provider>
  );
}

export default CartContext;
