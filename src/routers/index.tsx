import { lessionsRouters } from '@/lessions';
import { Outlet, RouteObject } from 'react-router-dom';

export const routers: RouteObject[] = [
  {
    path: '/',
    element: (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1>Hello, world!</h1>
        <Outlet />
      </div>
    ),
  },
  {
    path: '/learn',
    element: (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1>Hello, hi</h1>
      </div>
    ),
  },
  ...lessionsRouters,
];
