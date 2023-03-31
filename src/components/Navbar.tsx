import { Heading, HStack, List, ListItem } from '@chakra-ui/react';
import React from 'react';

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
      <HStack as={List} fontSize="2rem" spacing="2rem">
        <ListItem cursor="pointer">Home</ListItem>
        <ListItem cursor="pointer">Products</ListItem>
        <ListItem cursor="pointer">Contact</ListItem>
      </HStack>
    </HStack>
  );
}

export default Navbar;
