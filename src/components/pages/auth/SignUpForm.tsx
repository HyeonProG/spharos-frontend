import SignUpFeilds from "./SignUpFields";

export default function SignUpForm({
    handleSignUp,
  }: {
    handleSignUp: (signUpFormData: FormData) => void;
  }) {
    return (
      <section>
        <h1>SignUp page</h1>
        <form action={handleSignUp}>
          <SignUpFeilds />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    );
  }
