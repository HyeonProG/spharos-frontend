// 'use client';

import SignUpFields from "./SignUpFields";

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
    <section>
      <h1>SignUp page</h1>
      <form action={handleSignUp}>
        {/* <form onSubmit={handleOnSubmit}> */}
        <SignUpFields />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}