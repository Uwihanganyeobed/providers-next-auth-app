
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
      clientId: "861360712077389",
      clientSecret: "1a5359086703929112e39381ef844014",
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
