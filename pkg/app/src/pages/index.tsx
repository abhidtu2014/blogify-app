import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HelloWorldRes } from '../interfaces/HelloWorld';

const Home: NextPage = () => {
  const [data, setData] = useState<HelloWorldRes | null>(null);

  // useEffect(() => {
  //   const fetchData = async (): Promise<void> => {
  //     try {
  //       const response = await fetch("api/hello");
  //       const data = (await response.json()) as HelloWorldRes;
  //       setData(data);
  //     } catch (error) {
  //       console.error("Error occurred while fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Blogify App</title>
        <meta name="description" content="blogify-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main
        className="container mx-auto flex flex-col items-center justify-cente p-4"
        style={{ height: 'calc(100vh - 128px)', justifyContent: 'center' }}
      >
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Create <span className="text-purple-300">Blogs</span> Here
        </h1>
        <p className="text-2xl text-gray-700">Coming soon!</p>
        {/* {data ? <p>{data.text}</p> : <p>API Data Loading...</p>} */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
