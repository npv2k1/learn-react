import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routers } from '@/routers';
const router = createBrowserRouter(routers);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
