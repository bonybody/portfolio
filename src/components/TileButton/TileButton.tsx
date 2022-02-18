import React from 'react';

export type TileButtonProps = {
  link: {
    href: string;
    text: string;
  };
  bgImage: string;
};

export const TileButton = ({ link, bgImage }: TileButtonProps) => {
  return (
    <>
      <a
        href={link.href}
        className={'block relative w-36 h-36 border-primary border-2 rounded'}>
        <img
          src={bgImage}
          alt={link.text}
          className={'absolute z-10 w-full h-full object-cover'}
        />
        <div
          className={
            'relative z-20 w-full h-full bg-white bg-opacity-80 flex justify-center items-center'
          }>
          <div className={'font-bold text-primary '}>{link.text}</div>
        </div>
      </a>
    </>
  );
};
