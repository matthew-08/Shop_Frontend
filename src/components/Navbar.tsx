import {
  Heading,
  HStack,
  List,
  ListItem,
  Container,
  Circle,
  Image,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import shopcart from '../assets/shopping-cart.svg';

function Navbar() {
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack
      as="nav"
      background="blackAlpha.900"
      width="100%"
      minH="20%"
      px={{ md: '2rem', lg: '2rem', xl: '10rem', '2xl': '15rem' }}
      py={isSmallerThan1200 ? '1rem' : '0rem'}
      color="cyan.100"
      align="center"
      flexDir={isSmallerThan1200 ? 'column' : 'row'}
    >
      <Heading
        fontSize={isSmallerThan700 ? '2.7rem' : '4rem'}
        color="cyan.100"
        mr="auto"
        fontWeight="bold"
        margin={isSmallerThan1200 ? 'auto' : ''}
      >
        UnrealStore
      </Heading>
      <HStack flexDir={isSmallerThan700 ? 'column' : 'row'}>
        <HStack
          as={List}
          color="white"
          fontSize={isSmallerThan700 ? '1.5rem' : '2rem'}
          spacing="2rem"
          mr={isSmallerThan700 ? '1.5rem' : '5rem'}
          mb={isSmallerThan700 ? '1.2rem' : '0.5rem'}
        >
          <ListItem cursor="pointer">Home</ListItem>
          <ListItem cursor="pointer">Products</ListItem>
          <ListItem cursor="pointer">Contact</ListItem>
        </HStack>
        <Image
          src={shopcart}
          borderRadius="full"
          boxSize={isSmallerThan700 ? '55px' : '70px'}
          background="white"
          padding="0.8rem"
          cursor="pointer"
          onClick={() => isOpen}
        />
      </HStack>
    </HStack>
  );
}

export default Navbar;
