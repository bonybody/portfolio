import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Index } from '../pages/Index';

export const routes = [
  {
    path: '/',
    element: <Index />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes([...routes]);

  return <>{element}</>;
};
