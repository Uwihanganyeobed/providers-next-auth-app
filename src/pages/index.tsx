// src/pages/index.tsx

import { signIn, signOut, useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Next.js Authentication App</h1>
      {!session ? (
        <div className="text-center">
          <p className="mb-4 text-lg">You are not signed in.</p>
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Sign in
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4 text-lg">Welcome, {session.user?.name}!</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
