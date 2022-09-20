import { NextPage } from 'next';
import Head from 'next/head';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BlogEditor } from '../../components/BlogEditor';
import { useRouter } from 'next/router';

const Blog: NextPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="login-with-blogify-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showLoginButton={false} />

      <main
        className="container mx-auto flex flex-col items-center justify-cente p-4"
        style={{ height: 'calc(100vh - 128px)', justifyContent: 'center' }}
      >
        {id && <BlogEditor id={id} />}
      </main>

      <Footer />
    </>
  );
};

export default Blog;
