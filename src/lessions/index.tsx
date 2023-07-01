import React from 'react';
import { Outlet } from 'react-router-dom';

const LessionsPage = () => {
  return (
    <div>
      <h1>Lession</h1>
      <Outlet />
    </div>
  );
};

export default LessionsPage;
