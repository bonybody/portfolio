import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

import { MainLayout } from '../components/Layout/MainLayout';
import { Index } from '../pages/Index';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/a',
      },
    ],
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
