'use client';
import React, { useState } from 'react';

import { Input } from '@/components/ui/input';
import { SignUpStoreStateType } from '@/types/storeDataTypes';
import { signUpSchema } from '@/schemas/signUpSchema';

export default function SignUpFields() {
  const [inputValues, setInputValues] = useState<SignUpStoreStateType>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
    nickname: '',
    birth: '',
    address: '',
    gender: '남성',
  });
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpStoreStateType>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    const res = signUpSchema.safeParse({
      ...inputValues,
      [name]: value,
    });
    if (!res.success) {
      const fieldErros: Partial<SignUpStoreStateType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpStoreStateType;
        fieldErros[fieldName] = error.message;
      });
      setErrorMessages(fieldErros);
    } else {
      console.log('no error');
    }
  };

  return (
    <>
      <Input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      {errorMessages.email && (
        <p className="text-red-500 text-xs">{errorMessages.email}</p>
      )}
      <Input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      {errorMessages.password && (
        <p className="text-red-500 text-xs">{errorMessages.password}</p>
      )}
      <Input
        type="password"
        name="confirm-password"
        placeholder="confirm-pass"
        onChange={handleChange}
      />

      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      {errorMessages.name && (
        <p className="text-red-500 text-xs">{errorMessages.name}</p>
      )}
      <Input
        type="text"
        name="phoneNumber"
        placeholder="phoneNumber"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="nickname"
        placeholder="nickname"
        onChange={handleChange}
      />
      <Input
        type="date-local"
        name="birth"
        placeholder="birth"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="address"
        placeholder="address"
        onChange={handleChange}
      />
      {/* radio button select gender */}
      <Input
        type="text"
        name="gender"
        placeholder="gender"
        onChange={handleChange}
      />
    </>
  );
}