import { AppScreen } from '@stackflow/plugin-basic-ui';
import { BackgroundImage } from '@/assets/images';
import { JoinContainer } from '@/widgets/join/ui';

export default function JoinScreen() {
  return (
    <AppScreen preventSwipeBack backgroundImage={`url(${BackgroundImage})`}>
      <JoinContainer />
    </AppScreen>
  );
}
