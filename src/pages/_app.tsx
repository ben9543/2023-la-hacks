import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // The authentication state exposed by UserProvider can be accessed in any component using the useUser() hook.
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
