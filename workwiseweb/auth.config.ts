import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnMainPage = nextUrl.pathname === '/';
      const isOnLoginPage = nextUrl.pathname === '/login';

      if (isOnMainPage || isOnLoginPage) {
        return true;
      }

      if (isLoggedIn) {
        return true;
      }

      return false; // Redirect unauthenticated users to login page
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;