import { NormalAppBar } from '@/shared/ui';
import { FormContainer } from '@/widgets/form/ui';
import ToolPickModal from '@/widgets/form/ui/ToolPickModal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useState } from 'react';

export default function PhotoUploadScreen() {
  const [selectedTool, setSelectedTool] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);

  return (
    <>
      <AppScreen
        appBar={{
          backgroundColor: '#fff',
          ...NormalAppBar('직접 입력해서 신청하기'),
        }}
        backgroundColor="#F9F9F9"
      >
        <FormContainer
          selectedPrice={selectedPrice}
          selectedTool={selectedTool}
          selectedLocation={selectedLocation}
        />
      </AppScreen>
      <ToolPickModal
        setSelectedPrice={setSelectedPrice}
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
        setSelectedLocationName={setSelectedLocation}
      />
    </>
  );
}
