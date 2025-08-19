'use client';
 
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
 
export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputFileRef.current?.files || inputFileRef.current.files.length === 0) {
      throw new Error('No file selected');
    }
    const file = inputFileRef.current.files[0];
    const newBlob = await upload(file.name, file, {
      access: 'public',
      handleUploadUrl: '/api/image',
    });

    setBlob(newBlob);
  };

  return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-xl shadow-lg p-8 w-80 space-y-6">
            <h1 className="text-2xl font-semibold">file uploading test</h1>

            <form
                className="flex flex-col w-full space-y-4"
                onSubmit={handleSubmit}
            >
                <input
                name="file"
                ref={inputFileRef}
                type="file"
                required
                className="file:border file:border-gray-600 file:bg-gray-700 file:text-white file:rounded-md file:px-3 file:py-1 hover:file:bg-gray-600"
                />
                <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-colors"
                >
                Upload
                </button>
            </form>

            {blob && (
                <div className="text-sm break-all text-blue-400">
                Blob url: <a href={blob.url} className="underline">{blob.url}</a>
                </div>
            )}
            </div>
        </div>
    </>

  );
}