import { useRouter } from 'next/router';
import { FC, useCallback, useMemo } from 'react';
import { Timeline } from 'flowbite-react';
import { Blog } from '../interfaces/db';

interface BlogsTimeLineProps {
  blog: Blog;
}

export const BlogsTimeLine: FC<BlogsTimeLineProps> = ({ blog }): JSX.Element => {
  const { id, title, author, createdAt, text } = blog;
  const router = useRouter();
  const date = useMemo(() => {
    return createdAt.toDate().toLocaleDateString('en-US');
  }, [createdAt]);

  const handleOpenBlog = useCallback(() => {
    router.push(`/blogs/${id}`);
  }, [id]);

  return (
    <Timeline.Item onClick={handleOpenBlog} className="cursor-pointer">
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>{date}</Timeline.Time>
        <Timeline.Title>{title}</Timeline.Title>
        <Timeline.Body>{text.substring(0, 50)}</Timeline.Body>
        <h5 className="container mt-5 flex text-gray-400">{author}</h5>
      </Timeline.Content>
    </Timeline.Item>
  );
};
