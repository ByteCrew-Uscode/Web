import { useState, type ChangeEvent } from 'react';
import { useSubmitIdCard } from '@/widgets/join/api';

export default function useIdImage() {
  const [image, setImage] = useState<string | null>(null);
  const { mutate: submitIdCard } = useSubmitIdCard(setImage);

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append('image', file);
      submitIdCard(formData);
    } else {
      setImage('');
    }
  };
  return { image, handleImageInputChange, setImage };
}
