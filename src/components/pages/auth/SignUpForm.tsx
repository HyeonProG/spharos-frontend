// 'use client';
import { Button } from '@/components/ui/button';
import SignUpFeilds from './SignUpFeilds';
import OauthLoginButtons from './OauthLoginButtons';

export default function SignUpForm({
  handleSignUp,
}: {
  handleSignUp: (signUpFormData: FormData) => void;
}) {
  // const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const result = Object.fromEntries(formData.entries());
  //   console.log(result);
  //   handleSignUp(formData);
  // };
  return (
    <section className="px-5 py-10 mx-auto space-y-3">
      <form action={handleSignUp} className="space-y-3">
        {/* <form onSubmit={handleOnSubmit}> */}
        <SignUpFeilds />
        <Button type="submit">Sign Up</Button>
      </form>
      <OauthLoginButtons />
    </section>
  );
}
