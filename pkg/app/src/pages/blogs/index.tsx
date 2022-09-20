import { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

// Firebase
import { db } from '../../lib/firebase';
import { collection, getDocs, doc, query, orderBy, limit } from 'firebase/firestore';

import { Timeline } from 'flowbite-react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Blog } from '../../interfaces/db';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/router';
import { BlogsTimeLine } from '../../components/BlogsTimeLine';

const Blogs: NextPage = (): JSX.Element => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  // TODO: Handling of firestore can be moved to its own hook (useBlogs.tsx) or service (blogs.service.ts)
  useEffect(() => {
    const loadBlogs = async () => {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'), limit(100));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const blogs = querySnapshot.docs.map(doc => doc.data());
        setBlogs(blogs as Blog[]);
      }
    };
    loadBlogs();
  }, []);

  const handleCreateBlog = useCallback(() => {
    // Open Blog in Draft mode
    const autoId = doc(collection(db, 'blogs')).id;
    router.push(`blogs/${autoId}`);
  }, []);
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
        className="container mx-auto flex flex-col justify-center p-4 scroll-smooth"
        style={{ height: 'calc(100vh - 128px)' }}
      >
        <Button size="xl" onClick={handleCreateBlog}>
          Create New Blog
        </Button>
        {showExistingBlogs && (
          <div className="container mt-10 flex" style={{ overflowY: 'scroll' }}>
            <Timeline>
              {blogs &&
                blogs.map(blog => {
                  return (
                    <div key={blog.id}>
                      <BlogsTimeLine blog={blog} />
                    </div>
                  );
                })}
            </Timeline>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
