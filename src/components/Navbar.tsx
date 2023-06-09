import {
  Heading,
  HStack,
  List,
  ListItem,
  Button,
  Image,
  useMediaQuery,
  useDisclosure,
  Circle,
} from '@chakra-ui/react';
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import shopcart from '../assets/shopping-cart.svg';
import { UserCartContext } from './CartContext';
import Sidebar from './Sidebar';

const navbarLinks = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Products',
    to: '/products',
  },
  {
    name: 'Contact',
    to: '/Contact',
  },
];

function Navbar() {
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { cart } = useContext(UserCartContext);
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
          {navbarLinks.map((link) => {
            return (
              <ListItem key={uuid()} as={Link} to={link.to}>
                {link.name}
              </ListItem>
            );
          })}
        </HStack>
        <Button
          background="none"
          _hover={{ background: 'none' }}
          ref={btnRef}
          onClick={onOpen}
          position="relative"
        >
          {cart && (
            <Circle
              position="absolute"
              bottom={-4}
              left={2}
              size="30px"
              backgroundColor="red.400"
            >
              {cart?.length}
            </Circle>
          )}
          <Image
            src={shopcart}
            borderRadius="full"
            boxSize={isSmallerThan700 ? '55px' : '70px'}
            background="white"
            padding="0.8rem"
            cursor="pointer"
          />
        </Button>
      </HStack>
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </HStack>
  );
}

export default Navbar;
