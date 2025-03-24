import SignInForm from '@/components/pages/auth/SignInForm';
import SignUpForm from '@/components/pages/auth/SignUpForm';
import React from 'react';

export default function SignIn() {
  const handleSignIn = async ( singInFormData: FormData ) => {
    'use server';
    console.log(SignUpForm);
  }
  return (
    <main>
      <SignInForm />
    </main>
  );
}
