import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FormRow, Input, Box, Button, Icon, InfoMessage } from '../../ui';

import { useLogin } from './useLogin';

function LoginForm() {
  const { login, isLoading, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, formState } = useForm();
  const { errors } = formState;
  const [responseError, setResponseError] = useState();

  function onSubmit({ email, password }) {
    login(
      { login: email, password },
      {
        onSuccess: (res) => {
          if (res?.status_code === 403) {
            setResponseError({
              description: 'Не вірний логін або пароль',
            });
          }
        },
      },
    );
  }

  function handleToggleShowPassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  const handleErrorMessage = useCallback(() => {
    setResponseError(null);
  }, []);

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
                message: 'Введіть коректний e-mail',
              },
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message} className='mb-3'>
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
        {responseError && (
          <InfoMessage
            outlined
            className='mb-2'
            type='error'
            onTimeout={handleErrorMessage}
          >
            {responseError.description}
          </InfoMessage>
        )}
        <Button className='mt-3 w-full' disabled={isLoading}>
          Продовжити
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
