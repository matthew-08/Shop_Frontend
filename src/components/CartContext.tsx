import { createContext, useState, ReactNode, useContext } from 'react';
import {
  ShopItem,
  useAddToCartMutation,
  useFetchExistingCartQuery,
  useIncrementItemMutation,
} from '../generated/graphql';
import { CartItem, CartContextType } from '../types';
import { AuthContext } from './AccountContext';

export const UserCartContext = createContext<CartContextType>({
  cart: null,
  id: null,
  handleAddToCart: () => null,
  handleRemoveFromCart: () => null,
  total: () => 0,
});

function CartContext({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState('');
  const { user } = useContext(AuthContext);
  const [addToCart, { loading, data, error }] = useAddToCartMutation();
  const [incrementItem] = useIncrementItemMutation();

  const handleAddToCart = async (item: ShopItem) => {
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
      if (user && user.id) {
        incrementItem({
          variables: {
            input: {
              cartId,
              itemId: item.itemId,
            },
          },
        });
        console.log(`sent to ${user.id}`);
      }
    } else {
      setCart([
        ...cart,
        {
          ...item,
          itemQuantity: 1,
        },
      ]);
      if (user && user.id) {
        await addToCart({
          variables: {
            input: {
              itemToAdd: item.itemId,
              userId: user.id,
            },
          },
        }).then((r) => {
          if (data) {
            setCartId(data.addToCart.id);
          }
        });
      }
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
