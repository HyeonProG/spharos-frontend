import { signUpAction } from '@/actions/auth';
import SignUpForm from '@/components/pages/auth/SignUpForm';
import React from 'react';

export default async function page() {
  const handleSignUp = async (signUpFormData: FormData) => {
    'use server';
    console.log(signUpFormData);
    const res = await signUpAction(signUpFormData);
    console.log(res);
  };

  return (
    <main>
      <h1>SignUp page</h1>
      <SignUpForm handleSignUp={handleSignUp} />
    </main>
  );
}
