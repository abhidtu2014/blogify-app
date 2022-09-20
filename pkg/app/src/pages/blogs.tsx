import { NextPage } from 'next';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Card } from 'flowbite-react';

const Blogs: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="login-with-blogify-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showLoginButton={false} />

      <main
        className="container mx-auto flex flex-col items-center justify-cente p-4"
        style={{ height: 'calc(100vh - 128px)', justifyContent: 'center' }}
      >
        <Card href="#"></Card>
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
