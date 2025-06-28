import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BackgroundImage } from '@/assets/images';
import { HomeAppBar, Dock } from '@/shared/ui';
import { HomeContainer } from '@/widgets/home/ui';

export default function HomeScreen() {
  return (
    <>
      <AppScreen
        preventSwipeBack
        backgroundImage={`url(${BackgroundImage})`}
        appBar={HomeAppBar()}
      >
        <HomeContainer />
      </AppScreen>
      <Dock />
    </>
  );
}
