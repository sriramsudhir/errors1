export const APP_CONFIG = {
  name: 'Background Removal Tool',
  description: 'Free online background removal tool powered by AI',
  url: 'https://bgremoval.in',
} as const;

export const LIMITS = {
  maxFileSize: 10 * 1024 * 1024, // 10MB
  maxFilesPerBatch: 10,
} as const;

export const SUPPORTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
] as const;

export const IMAGE_PROCESSING_OPTIONS = {
  compression: {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  },
  quality: {
    default: 0.8,
    hd: 1.0,
  },
} as const;