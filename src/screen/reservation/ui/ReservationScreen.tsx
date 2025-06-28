import { AppScreen } from '@stackflow/plugin-basic-ui';
import { CenteredAppBar, Dock } from '@/shared/ui';
import { ReservationContainer } from '@/widgets/reservation/ui';

export default function ReservationScreen() {
  return (
    <>
      <AppScreen
        preventSwipeBack
        appBar={CenteredAppBar('예약 현황')}
        backgroundColor="#F9F9F9"
      >
        <ReservationContainer />
      </AppScreen>
      <Dock />
    </>
  );
}
