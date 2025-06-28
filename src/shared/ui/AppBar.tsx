import { BellIcon, HelpIcon } from '@/assets/icons';
import { BackgroundImage } from '@/assets/images';

const baseStyle = { height: '62px', border: false };

export const HomeAppBar = (
  handleBellClick?: () => void,
  handleHelpClick?: () => void,
) => ({
  ...baseStyle,
  backgroundImage: `url(${BackgroundImage})`,
  renderRight: () => (
    <div className="flex gap-x-5">
      <button
        className="size-[26px] cursor-pointer outline-none"
        onClick={handleBellClick}
      >
        <img src={BellIcon} />
      </button>
      <button
        className="size-[26px] cursor-pointer outline-none"
        onClick={handleHelpClick}
      >
        <img src={HelpIcon} />
      </button>
    </div>
  ),
});
