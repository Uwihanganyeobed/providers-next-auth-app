// src/pages/auth/signin.tsx

import { getProviders, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';

// Define the type for the provider
interface Provider {
  id: string;
  name: string;
  type: string;
}

// Define the type for the providers object
interface Providers {
  [key: string]: Provider;
}

interface SignInProps {
  providers: Providers;
}

const SignIn: React.FC<SignInProps> = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>
      <div className="space-y-4">
        {Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              onClick={() => signIn(provider.id)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
