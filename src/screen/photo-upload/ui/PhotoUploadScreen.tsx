import { NormalAppBar } from '@/shared/ui';
import { PhotoUploadContainer } from '@/widgets/photo-upload/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';

export default function PhotoUploadScreen() {
  return (
    <AppScreen appBar={NormalAppBar('')}>
      <PhotoUploadContainer />
    </AppScreen>
  );
}
