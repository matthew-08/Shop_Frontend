import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';

function SignIn() {
  return (
    <VStack as="form" maxWidth="300px" m="auto" mt="2rem">
      <Heading>Sign-up</Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
    </VStack>
  );
}

export default SignIn;
