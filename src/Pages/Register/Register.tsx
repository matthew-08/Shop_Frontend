/* eslint-disable no-underscore-dangle */
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
import { object, string, number, date, InferType, ref } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterMutation } from '../../generated/graphql';

type RegisterScehma = {
  email: string;
  password: string;
  confirmPassword: string;
};

const registerSchema = object({
  email: string().required('Email is required'),
  password: string()
    .required('Password is required.')
    .min(6, 'Your password must be at least 6 characters long'),
  confirmPassword: string().oneOf([ref('password')], 'Passwords must match'),
});

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<RegisterScehma>({
    resolver: yupResolver(registerSchema),
  });
  const [registerMutation, { data, loading, error }] = useRegisterMutation();
  const onSubmit = (formData: RegisterScehma) => {
    registerMutation({
      variables: {
        UserRegisterInput: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };
  if (data) {
    if (data.register.__typename === 'MutationRegisterSuccess') {
      const { token } = data.register.data;
      localStorage.setItem('token', token);
    }
  }
  const isInputError = (input: keyof RegisterScehma) => input in errors;
  return (
    <VStack
      as="form"
      maxWidth="400px"
      m="auto"
      mt="7rem"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading>Sign-Up</Heading>
      <FormControl isInvalid={isInputError('email')}>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
          <Input type="text" {...register('email')} />
        </InputGroup>
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={isInputError('password')}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<LockIcon />} />
          <Input type="text" {...register('password')} />
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={isInputError('confirmPassword')}>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<LockIcon />} />
          <Input type="text" {...register('confirmPassword')} />
        </InputGroup>
        <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
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
        isLoading={loading}
      >
        Submit
      </Button>
    </VStack>
  );
}

export default Register;
