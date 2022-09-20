import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';
import { TextInput, Label, Card, Button } from 'flowbite-react';
import Tiptap from './TipTap';

import { db } from '../lib/firebase';
import { Blog } from '../interfaces/db';
import { useAuth } from '../hooks/useAuth';

interface BlogEditor {
  id: string;
}

export const BlogEditor: FC<BlogEditor> = ({ id }): JSX.Element => {
  const { user } = useAuth();
  const [blog, setBlog] = useState<Partial<Blog>>({
    id,
  });
  const router = useRouter();

  useEffect(() => {
    if (!user || blog.author || !user?.displayName) return;

    setBlog(blogData => ({
      ...blogData,
      author: user.displayName as string,
      owner: user.uid,
    }));
  }, [user]);

  if (!id) {
    // Incorrect id, push user back to /blogs
    router.push('/blogs');
  }

  useEffect(() => {
    const loadBlogContentById = async () => {
      if (!id) return;
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      const blogContent = docSnap.exists() ? docSnap.data() : null;
      if (blogContent) {
        setBlog(blogContent as unknown as Blog);
      }
    };
    loadBlogContentById();
  }, []);

  const handleUpdateTitle = useCallback((title: string) => {
    title &&
      setBlog(blogData => ({
        ...blogData,
        title,
      }));
  }, []);

  const handleUpdateBlogContent = useCallback((text: string) => {
    text &&
      setBlog(blogData => ({
        ...blogData,
        text,
      }));
  }, []);

  const handlePublishBlog = useCallback(async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    };
    fetch('/api/blogs/', requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.debug('Post published', data);
        router.push('/blogs');
      });
  }, [blog]);

  const showPublicButtonToAuthor = useMemo(() => {
    if (!user || !blog) return false;
    else return user.uid === blog.owner;
  }, [blog, user]);

  return (
    <div className="container mx-auto flex flex-col justify-center p-4">
      <div className="mb-10">
        <div className="mb-5 block ">
          <Label htmlFor="email3" value="Blog Title" />
        </div>

        <TextInput
          id="blog-title"
          type="text"
          placeholder="Blog Title"
          required={true}
          onChange={e => handleUpdateTitle(e.target.value)}
          defaultValue={blog?.title || ''}
        />
      </div>
      <Card>
        <Tiptap content={blog?.text || ''} handleUpdate={handleUpdateBlogContent} />
      </Card>
      <div className="container flex flex-end mt-10">
        {showPublicButtonToAuthor && (
          <Button size="xl" onClick={handlePublishBlog}>
            Publish
          </Button>
        )}
      </div>
    </div>
  );
};
