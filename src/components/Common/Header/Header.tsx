import React from 'react';

import { ReactComponent as Logo } from '@/assets/logo.svg';

export const Header = () => {
  return (
    <header className={'w-full h-12 flex justify-between'}>
      <Logo className={'w-auto h-8'} />
    </header>
  );
};
