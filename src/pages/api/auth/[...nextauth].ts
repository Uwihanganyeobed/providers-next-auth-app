
    // src/pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import LinkedInProvider from 'next-auth/providers/linkedin';
import SpotifyProvider from 'next-auth/providers/spotify';
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
    SpotifyProvider({
      clientId: "e470304f3e564908bb6b9b64390aab36",
      clientSecret: "d80158f9f6374bbba444d46192bc8b48",
    }),
    GitHubProvider({
      clientId: "Ov23liLDmE8RDUnS1coC",
      clientSecret: "dc170c2b05247d02b24c450beea57f14bbe5603f",
    }),
    LinkedInProvider({
      clientId: "77tj86m4cuj2di",
      clientSecret: "0SO73vPpEMaYohSG",
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
});
