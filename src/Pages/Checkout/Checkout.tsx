import { Flex, Heading, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { UserCartContext } from '../../components/CartContext';
import CartProduct from '../../components/CartProduct';

function Checkout() {
  const { cart } = useContext(UserCartContext);
  return (
    <Flex minW="100%" px="4rem" py="1rem" overflowX="hidden">
      <Flex
        minW="30%"
        align="center"
        flexDir="column"
        borderRight="1px solid"
        borderColor="grey.600"
        padding="1rem"
      >
        <Heading fontSize="3rem">Cart:</Heading>
        <VStack overflow="auto" maxHeight="800px">
          {cart?.map((item) => {
            return <CartProduct cartItem={item} key={uuid()} />;
          })}
        </VStack>
      </Flex>
      <Flex flexGrow="1" height="100%">
        <Heading>Order Details:</Heading>
      </Flex>
    </Flex>
  );
}

export default Checkout;
