import React from 'react';

export type SocialButtonProps = {
  link: {
    href: string;
    text: string;
  };
  bgColor: string;
  icon?: string;
};

export const SocialButton = ({ link, icon, bgColor }: SocialButtonProps) => {
  const frame = `relative flex justify-center items-center px-4 py-2 rounded-full text-white ${bgColor}`;
  return (
    <>
      <a href={link.href} className={frame}>
        {icon && (
          <img className={'absolute left-4 h-4 mr-auto'} src={icon} alt={link.text} />
        )}
        <span className={'font-bold text-white'}>{link.text}</span>
      </a>
    </>
  );
};
