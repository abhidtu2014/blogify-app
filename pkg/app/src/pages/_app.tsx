import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import { AuthContextProvider } from '../hooks/useAuth';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
};

export default MyApp;
