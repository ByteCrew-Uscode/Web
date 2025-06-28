import { BackgroundImage } from '@/assets/images';

const baseStyle = { height: '58px', border: false };

export const BasicAppBar = {
  ...baseStyle,
  backgroundImage: `url(${BackgroundImage})`,
  renderRight: () => <></>,
};
