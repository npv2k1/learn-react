import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import HomePage from './pages';
import LessionsPage from './lessions';
import LearnUseState from './lessions/learn-use-state';

const App = () => {

  return (
    <BrowserRouter basename='learn-react'>
      <Routes>
        <Route path="/">
          <Route index={true} element={<HomePage />} />
        </Route>
        <Route path="/learn">
          <Route index={true} element={<LessionsPage />} />
          <Route path="learn-use-state" element={<LearnUseState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
