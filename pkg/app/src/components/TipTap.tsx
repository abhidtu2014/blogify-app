import { FC, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface TipTapProps {
  content: string;
  handleUpdate: (value: string) => void;
}

const Tiptap: FC<TipTapProps> = ({ content = '', handleUpdate }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: content.toString(),
    onUpdate: ({ editor }) => {
      handleUpdate(editor.getText());
    },
  });

  useEffect(() => {
    if (!editor || !editor.commands || !editor.getText) return;
    if (editor.getText() !== content) {
      editor.commands.setContent(content);
    }
  }, [content]);

  return <EditorContent editor={editor} />;
};

export default Tiptap;
