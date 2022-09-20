import { FC } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface TipTapProps {
  content: string;
}

const Tiptap: FC<TipTapProps> = ({ content = '' }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>${content.toString()}</p>`,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
