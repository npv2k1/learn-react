import { useReadme } from '@/hooks/useReadme';
import React, { useEffect } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import LessionDoc from '../components/LessionDoc';
import { LessionsEnum } from '../configs/constants';

const LearnUseState = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="flex h-full min-h-0 flex-1 flex-row bg-gray-200">
      <LessionDoc lession={LessionsEnum.LEARN_USE_STATE} />
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
