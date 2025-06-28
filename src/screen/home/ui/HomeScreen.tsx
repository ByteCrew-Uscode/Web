import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BackgroundImage } from '@/assets/images';
import { BasicAppBar, Dock } from '@/shared/ui';
import { HomeContainer } from '@/widgets/home/ui';

export default function HomeScreen() {
  return (
    <>
      <AppScreen
        preventSwipeBack
        backgroundImage={`url(${BackgroundImage})`}
        appBar={BasicAppBar}
      >
        <HomeContainer />
      </AppScreen>
      <Dock />
    </>
  );
}
