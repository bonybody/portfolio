import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from '../Common/Header/Header';

export const MainLayout = () => {
  const location = useLocation();
  const isIndex = location.pathname != '/';

  return (
    <>
      <div className={'fixed -z-10 w-full h-full border-8 border-primary p-2'}>
        <div className={'w-full h-full border-4 border-primary'}></div>
      </div>
      <div className={'h-full pt-10 px-7'}>
        {isIndex ? <Header /> : ''}
        <Outlet />
      </div>
    </>
  );
};
