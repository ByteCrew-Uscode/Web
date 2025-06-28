import { CompleteScreen } from '@/screen/complete';
import { FormScreen } from '@/screen/form/ui';
import { HomeScreen } from '@/screen/home/ui';
import { JoinScreen } from '@/screen/join/ui';
import { PhotoLoadingScreen } from '@/screen/photo-loading/ui';
import { PhotoResultScreen } from '@/screen/photo-result/ui';
import { PhotoUploadScreen } from '@/screen/photo-upload/ui';
import { fetchSessionData } from '@/shared/utils';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    JoinScreen,
    HomeScreen,
    PhotoUploadScreen,
    FormScreen,
    CompleteScreen,
    PhotoLoadingScreen,
    PhotoResultScreen,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => {
    if (fetchSessionData('userInfo')) return 'HomeScreen';
    return 'JoinScreen';
  },
});
