import React, { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const LearnUseState = () => {
  const [docs, setDocs] = React.useState<string>('');
  useEffect(() => {
    import('./README.md').then((res) => {
      fetch(res.default as string)
        .then((response) => response.text())
        .then((text) => setDocs(text));
    });
  }, []);

  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="flex h-screen w-screen flex-1 flex-row">
      <article className="prose overflow-y-scroll p-5 lg:prose-xl">
        <ReactMarkdown children={docs} remarkPlugins={[remarkGfm]} />
      </article>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <h1 className="font-mono text-3xl text-gray-700">Count: {count}</h1>
          <button
            className="rounded-lg bg-blue-300 px-5 py-3 shadow-lg"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnUseState;
