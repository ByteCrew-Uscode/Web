import { HomeScreen } from '@/screen/home/ui';
import { JoinScreen } from '@/screen/join/ui';
import { PhoneCompleteScreen } from '@/screen/phone-complete';
import { PhotoUploadScreen } from '@/screen/photo-upload/ui';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    JoinScreen,
    HomeScreen,
    PhoneCompleteScreen,
    PhotoUploadScreen,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'JoinScreen',
});
