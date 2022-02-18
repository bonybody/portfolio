import '@/App.css';

import React from 'react';

import logo from '@/assets/logo.svg';
import { SocialButtonList } from '@/components/SocialButton';
import { TopTileButtons } from '@/components/TileButton/TopTileButtons';

export const Index = () => {
  return (
    <div className={'w-ful h-full flex justify-center items-center'}>
      <div className={'w-full'}>
        <p className={'mb-12'}>
          <img className={'mx-auto max-w-md w-full'} src={logo} alt="bonybody.net" />
        </p>
        <div className={'mb-12'}>
          <TopTileButtons />
        </div>
        <div className={'flex justify-center'}>
          <SocialButtonList />
        </div>
      </div>
    </div>
  );
};
