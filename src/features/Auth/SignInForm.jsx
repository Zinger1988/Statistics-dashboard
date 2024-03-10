import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormRow, Input, Box, Button, Icon } from '../../ui';
import { useSignIn } from './useSignIn';

function SignInForm() {
  const { signIn, isLoading, error } = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    signIn({ login: email, password });
  }

  function handleToggleShowPassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  return (
    <Box label='Вхід до панелі звітів' className='w-96'>
      <form onSubmit={handleSubmit(onSubmit)} className='p-2' noValidate>
        <FormRow error={errors?.email?.message} className='mb-3'>
          <Input
            type='email'
            autocomoplete='email'
            placeholder='E-mail'
            register={register('email', {
              required: 'Необхідно вказати e-mail',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Ведіть коректний e-mail',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message} className='mb-6'>
          <span className='relative block'>
            <Input
              type={showPassword ? 'text' : 'password'}
              autocomoplete='password'
              placeholder='Пароль'
              register={register('password', {
                required: 'Необхідно вказати пароль',
              })}
            />
            <Icon
              className='absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer fill-slate-400 hover:fill-white'
              onClick={handleToggleShowPassword}
              id={showPassword ? 'eye-closed' : 'eye'}
            />
          </span>
        </FormRow>
        <Button className='w-full' disabled={isLoading}>
          Продовжити
        </Button>
      </form>
    </Box>
  );
}

export default SignInForm;
