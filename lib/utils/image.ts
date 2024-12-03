import { IMAGE_PROCESSING_OPTIONS } from '@/lib/config/constants';
import imageCompression from 'browser-image-compression';

export async function compressImage(file: File): Promise<File> {
  try {
    return await imageCompression(file, IMAGE_PROCESSING_OPTIONS.compression);
  } catch (error) {
    console.error('Error compressing image:', error);
    return file;
  }
}

export function createImagePreview(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function validateImage(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  return validTypes.includes(file.type);
}