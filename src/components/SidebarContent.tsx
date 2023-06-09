import { Heading, VStack, Text, StackDivider } from '@chakra-ui/react';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from './AccountContext';
import { UserCartContext } from './CartContext';
import CartProduct from './CartProduct';

function SidebarContent() {
  const { user } = useContext(AuthContext);
  const { cart } = useContext(UserCartContext);
  return (
    <VStack height="100%">
      <Heading mt="3rem" mb="1rem">
        Shopping Cart
      </Heading>
      <VStack
        padding="1rem"
        overflowY="auto"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
      >
        {cart?.length ? (
          cart.map((item) => {
            return <CartProduct key={uuid()} cartItem={item} />;
          })
        ) : (
          <Text mt="1rem">Your cart is empty.</Text>
        )}
      </VStack>
    </VStack>
  );
}

export default SidebarContent;
