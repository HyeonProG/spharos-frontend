'use client';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import React from 'react';

export default function OauthLoginButtons() {
  const handleOauthLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name);
    signIn(e.currentTarget.name, {
      redirect: true,
    });
  };
  return (
    <div className="flex flex-col space-y-3">
      <Button type="button" name="kakao" onClick={handleOauthLogin}>
        Kakao Login
      </Button>
      <Button type="button" name="google" onClick={handleOauthLogin}>
        Google Login
      </Button>
      <Button type="button" name="naver" onClick={handleOauthLogin}>
        Naver Login
      </Button>
    </div>
  );
}