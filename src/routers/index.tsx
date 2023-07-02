import LearnPage, { lessionsRouters } from '@/lessions';
import HomePage from '@/pages';
import { Outlet, RouteObject } from 'react-router-dom';

export const routers: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/learn',
    element: <LearnPage />,
    children: lessionsRouters,
  },
];
