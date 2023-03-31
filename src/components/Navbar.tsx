import {
  Heading,
  HStack,
  List,
  ListItem,
  Container,
  Circle,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import shopcart from '../assets/shopping-cart.svg';

function Navbar() {
  return (
    <HStack
      as="nav"
      background="blackAlpha.900"
      width="100%"
      minH="20%"
      px="15rem"
      color="cyan.100"
      align="center"
    >
      <Heading fontSize="4rem" color="cyan.100" mr="auto" fontWeight="bold">
        UnrealStore
      </Heading>
      <HStack>
        <HStack as={List} fontSize="2rem" spacing="2rem" mr="5rem">
          <ListItem cursor="pointer">Home</ListItem>
          <ListItem cursor="pointer">Products</ListItem>
          <ListItem cursor="pointer">Contact</ListItem>
        </HStack>
        <Image
          src={shopcart}
          borderRadius="full"
          boxSize="70px"
          background="white"
          padding="0.8rem"
          cursor="pointer"
        />
      </HStack>
    </HStack>
  );
}

export default Navbar;
