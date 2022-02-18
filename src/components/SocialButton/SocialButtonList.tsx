import icon from '@/assets/link.svg';
import { SocialButton, SocialButtonProps } from '@/components/SocialButton/SocialButton';

const socialButtonData: SocialButtonProps[] = [
  {
    link: {
      text: 'GitHub',
      href: 'https://github.com/bonybody',
    },
    bgColor: 'bg-social-github',
    icon: icon,
  },
  {
    link: {
      text: 'Blog',
      href: 'https://daysput.com',
    },
    bgColor: 'bg-social-blog',
    icon: icon,
  },
];

export const SocialButtonList = () => {
  return (
    <div className={'w-48'}>
      {socialButtonData.map(({ bgColor, link, icon }, index) => (
        <div className={'mb-1'} key={index}>
          <SocialButton bgColor={bgColor} link={link} icon={icon} />
        </div>
      ))}
    </div>
  );
};
