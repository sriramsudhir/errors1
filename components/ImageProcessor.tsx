"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import ImageUploader from './ImageUploader';
import ProcessedImage from './ProcessedImage';
import { removeBackground } from '@imgly/background-removal';
import { toast } from 'sonner';
import { compressImage } from '@/lib/utils/image';

export default function ImageProcessor() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageSelect = async (file: File, preview: string) => {
    setFile(file);
    setPreview(preview);
    setProcessedImage(null);
    setProgress(0);

    if (file) {
      try {
        setIsProcessing(true);
        toast.info("Optimizing image...");
        
        const compressedFile = await compressImage(file);
        toast.info("Removing background...");
        
        const blob = await removeBackground(compressedFile, {
          progress: (p) => {
            setProgress(Math.round(p * 100));
          },
        });
        
        const url = URL.createObjectURL(blob);
        setProcessedImage(url);
        toast.success("Background removed successfully!");
      } catch (error) {
        console.error("Error removing background:", error);
        toast.error("Failed to process image. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        <ImageUploader
          onImageSelect={handleImageSelect}
          preview={preview}
          isProcessing={isProcessing}
        />
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Result</h2>
        <ProcessedImage
          processedImage={processedImage}
          isProcessing={isProcessing}
          progress={progress}
        />
      </Card>
    </div>
  );
}