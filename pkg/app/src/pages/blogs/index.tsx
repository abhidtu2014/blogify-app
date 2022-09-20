import { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

// Firebase
import { db } from '../../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Blog } from '../../interfaces/db';
import { Button } from 'flowbite-react';
// import Tiptap from '../../components/TipTap';

const Blogs: NextPage = (): JSX.Element => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // TODO: Handling of firestore can be moved to its own hook (useBlogs.tsx) or service (blogs.service.ts)
  useEffect(() => {
    const loadBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      if (!querySnapshot.empty) {
        const blogs = querySnapshot.docs.map(doc => doc.data());
        setBlogs(blogs as Blog[]);
      }
    };
    loadBlogs();
  }, []);

  const handleCreateBlog = useCallback(() => {}, []);
  const showExistingBlogs = !!blogs.length;

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
        <Button size="xl" onClick={handleCreateBlog}>
          Create New Blog
        </Button>
        {showExistingBlogs && (
          <>
            {
              // TODO: Show Already Created blogs here
            }
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
