
    // src/pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "1082702847729-scrtjar1g2c4ji116670u3nq42h9b11f.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "1033847384816565",
      clientSecret: "25b831ddc224d7087b4bf05729a48aab",
    }),
    GitHubProvider({
      clientId: "Ov23liLDmE8RDUnS1coC",
      clientSecret: "dc170c2b05247d02b24c450beea57f14bbe5603f",
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
