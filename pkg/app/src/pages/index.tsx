import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { auth } from '../lib/firebase';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogify App</title>
        <meta name="description" content="blogify-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main
        className="container mx-auto flex flex-col items-center justify-center p-4"
        style={{ height: 'calc(100vh - 128px)' }}
      >
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">Blogs</span> Here
        </h1>
        <p className="text-2xl text-gray-700">Please log in to start building your blogs</p>
      </main>

      <Footer />
    </>
  );
};

export default Home;
