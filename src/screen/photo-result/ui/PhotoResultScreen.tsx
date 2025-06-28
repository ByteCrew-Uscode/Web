import type { Tool } from '@/shared/types';
import { NormalAppBar } from '@/shared/ui';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import type { ActivityComponentType } from '@stackflow/react';
import { PhotoResultContainer } from '@/widgets/photo-result/ui';

const PhotoLoadingScreen: ActivityComponentType<{ result: Tool[] }> = ({
  params,
}: {
  params: { result: Tool[] };
}) => {
  return (
    <AppScreen appBar={NormalAppBar('')}>
      <PhotoResultContainer tools={params.result} />
    </AppScreen>
  );
};

export default PhotoLoadingScreen;
