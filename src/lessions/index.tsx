import { Outlet, RouteObject } from 'react-router-dom';
import LearnUseState from './learn-use-state';

export const lessionsRouters: RouteObject[] = [
  {
    path: '/learn-use-state',
    element: <LearnUseState />,
  },
];
