/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Text,
  Heading,
  Link,
  ButtonGroup,
  Image,
  Button,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import {
  useFetchShopItemsQuery,
  useLogInMutation,
} from '../../generated/graphql';

interface FormState {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const [mutateFunction, { data, loading, error }] = useLogInMutation();

  const onSubmit = (formData: FormState) => {
    mutateFunction({
      variables: {
        LoginType: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };

  return (
    <>
      <VStack
        as="form"
        maxWidth="400px"
        m="auto"
        mt="7rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>Sign-In</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register('email')} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="text" {...register('password')} />
        </FormControl>
        <Text>
          Don't have an account?{' '}
          <Text to="/" color="blue.400" as={NavLink}>
            Sign up here.
          </Text>
        </Text>
        <ButtonGroup>
          <Button
            backgroundColor="cyan.100"
            size="lg"
            fontSize="1.4rem"
            type="submit"
          >
            Submit
          </Button>
        </ButtonGroup>
      </VStack>
      <Image />
    </>
  );
}

export default SignIn;
