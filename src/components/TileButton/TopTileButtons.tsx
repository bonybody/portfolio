import about from '@/assets/bg/about.png';
import experience from '@/assets/bg/experience.png';
import works from '@/assets/bg/works.png';
import icon from '@/assets/link.svg';
import { SocialButton, SocialButtonProps } from '@/components/SocialButton/SocialButton';
import { TileButton, TileButtonProps } from '@/components/TileButton/TileButton';

const socialButtonData: TileButtonProps[] = [
  {
    link: {
      text: 'About',
      href: 'https://github.com/bonybody',
    },
    bgImage: about,
  },
  {
    link: {
      text: 'Works',
      href: 'https://daysput.com',
    },
    bgImage: works,
  },
  {
    link: {
      text: 'Experience',
      href: 'https://daysput.com',
    },
    bgImage: experience,
  },
];

export const TopTileButtons = () => {
  return (
    <div className={'flex justify-center gap-5 flex-wrap'}>
      {socialButtonData.map(({ link, bgImage }, index) => (
        <div className={'mb-1'} key={index}>
          <TileButton link={link} bgImage={bgImage} />
        </div>
      ))}
    </div>
  );
};
