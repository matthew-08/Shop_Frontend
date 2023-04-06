import React from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  FormHelperText,
  useDisclosure,
  Button,
  Box,
  Collapse,
  VStack,
  Circle,
  Heading,
} from '@chakra-ui/react';

function CheckoutForm() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex as="form" flexDir="column" width="100%">
      <Flex onClick={onToggle} width="100%" align="center">
        <Circle
          size="70px"
          borderColor="blackAlpha.800"
          fontSize="2rem"
          border="3px solid"
        >
          1
        </Circle>
        <Heading ml="1rem">Personal Details</Heading>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <VStack>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="email" />
            </FormControl>
          </VStack>
        </Box>
      </Collapse>
      <Flex onClick={onToggle} width="100%" align="center">
        <Circle
          size="70px"
          borderColor="blackAlpha.800"
          fontSize="2rem"
          border="3px solid"
        >
          1
        </Circle>
        <Heading ml="1rem">Personal Details</Heading>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <VStack>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input type="email" />
            </FormControl>
          </VStack>
        </Box>
      </Collapse>
    </Flex>
  );
}

export default CheckoutForm;
