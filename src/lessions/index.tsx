import { Outlet, RouteObject } from 'react-router-dom';
import LearnUseState from './learn-use-state';

export const lessionsRouters: RouteObject[] = [
  {
    path: LessionsEnum.LEARN_USE_STATE,
    element: <LearnUseState />,
  },
];

import React from 'react';
import { LessionsEnum } from './configs/constants';

const LearnPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-auto">
      <div>LearnPage</div>

      <Outlet />
    </div>
  );
};

export default LearnPage;
