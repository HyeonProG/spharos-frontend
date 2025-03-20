'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSpharosSession } from '@/context/SessionContext';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function SignInForm() {
  console.log(useSpharosSession());
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('formData', formData);
    signIn('credentials', {
      username: formData.get('loginId') as string,
      password: formData.get('password') as string,
      redirect: true,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="px-10 py-10 mx-auto space-y-3">
      <Input type="text" name="loginId" placeholder="loginId" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Sign In</Button>
      <Button
        type="button"
        onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
      >
        LogOut
      </Button>
    </form>
  );
}
