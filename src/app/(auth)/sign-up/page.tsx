import { signUpAction } from '@/actions/auth';
import SignUpForm from '@/components/pages/auth/SignUpForm';
import React from 'react'

export default async function page() {
    const handleSignUp = async (signUpFormData: FormData) => {
      const res = await signUpAction(signUpFormData);
      console.log(res);
    };
  
    return (
      <main>
        <SignUpForm handleSignUp={handleSignUp} />
      </main>
    );
}
