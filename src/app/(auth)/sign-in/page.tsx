import { Metadata } from 'next';
import SignInForm from '@/components/pages/auth/SignInForm';
import React from 'react';

export const metadata: Metadata = {
  title: '로그인페이지',
};

export default function SignIn() {
  // const handleSignIn = async ( singInFormData: FormData ) => {
  // }
  return (
    <main>
      <SignInForm />
    </main>
  );
}
