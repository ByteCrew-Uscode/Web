import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BackgroundImage } from '@/assets/images';
import { HomeAppBar, Dock } from '@/shared/ui';
import { HomeContainer } from '@/widgets/home/ui';
import { useFlow } from '@/app/stackflow';
import { PATH } from '@/shared/constants';

export default function HomeScreen() {
  const { push } = useFlow();

  return (
    <>
      <AppScreen
        preventSwipeBack
        backgroundImage={`url(${BackgroundImage})`}
        appBar={HomeAppBar(
          () => {},
          () => push(PATH.HELP, {}),
        )}
      >
        <HomeContainer />
      </AppScreen>
      <Dock />
    </>
  );
}
