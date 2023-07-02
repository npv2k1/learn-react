import { useReadme } from '@/hooks/useReadme';
import React, { useEffect, useState } from 'react';
import MdHome from './README.md';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
const HomePage = () => {
  const [docs, setDocs] = useState<string>('');

  useEffect(() => {
    const _doc = MdHome;
    fetch(_doc as string)
      .then((response) => response.text())
      .then((text) => setDocs(text));
  }, []);
  return (
    <div className="flex w-screen items-center justify-center">
      <article className="prose overflow-y-auto p-5 lg:prose-xl">
        <ReactMarkdown children={docs} remarkPlugins={[remarkGfm]} />
      </article>
    </div>
  );
};

export default HomePage;
