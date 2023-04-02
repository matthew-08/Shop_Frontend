/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-props-no-spreading */
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Heading,
  Input,
  Text,
  ButtonGroup,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <VStack as="form" maxWidth="400px" m="auto" mt="7rem" onSubmit={() => true}>
      <Heading>Sign-Up</Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
          <Input type="email" {...register('email')} />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<LockIcon />} />
          <Input type="text" {...register('password')} />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<LockIcon />} />
          <Input type="text" {...register('confirm-password')} />
        </InputGroup>
      </FormControl>
      <Text>
        Already have an account?{' '}
        <Text to="/" color="blue.400" as={NavLink}>
          Sign in here.
        </Text>
      </Text>
      <Button
        backgroundColor="cyan.100"
        width="100%"
        fontSize="1.4rem"
        padding="1.4rem"
        type="submit"
      >
        Submit
      </Button>
    </VStack>
  );
}

export default Register;
