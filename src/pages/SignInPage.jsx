import SignInForm from '../features/Auth/SignInForm';
import AuthLayout from '../layouts/AuthLayout';

function SignInPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}

export default SignInPage;
