import { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Card } from 'flowbite-react';
import { authUiConfig } from '../lib/firebase/authUIConfig';
import { auth } from '../lib/firebase';
import { useCallback, useEffect, useState } from 'react';
import 'firebaseui/dist/firebaseui.css';

const Login: NextPage = (): JSX.Element => {
  const config = authUiConfig();

  const loadFirebaseui = useCallback(async () => {
    const firebaseui = await import('firebaseui');
    const firebaseUi = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    firebaseUi.start('#firebaseui-auth-container', config);
  }, [config, auth]);

  useEffect(() => {
    // firebase UI can only be loaded when component mounts
    loadFirebaseui();
  }, []);

  return (
    <>
      <Head>
        <title>Log in</title>
        <meta name="description" content="login-with-blogify-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showLoginButton={false} />

      <main
        className="container mx-auto flex flex-col items-center justify-cente p-4"
        style={{ height: 'calc(100vh - 128px)', justifyContent: 'center' }}
      >
        <Card href="#">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="/blogify-logo.png"
              alt="Blogify Logo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Log in to Blogify!
            </h5>
          </div>
          {/* Below DIV Renders Pre-built UI for Firebase Auth*/}
          <div id="firebaseui-auth-container"></div>
        </Card>
      </main>

      <Footer />
    </>
  );
};

export default Login;
