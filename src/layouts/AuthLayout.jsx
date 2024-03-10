import bgImage from '../assets/sign-in-bg.jpg';

function AuthLayout({ children }) {
  return (
    <div
      className='bg-im relative flex h-[100vh] w-full items-center justify-center bg-cover'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </div>
  );
}

export default AuthLayout;
