import { UploadDropzone } from '@/lib/uploadthing';

import '@uploadthing/react/styles.css';
import { X } from 'lucide-react';
import Image from 'next/image';

interface FileUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export const FileUpload = ({ value, onChange }: FileUploadProps) => {
  if (value) {
    const type = value.split('.').pop();

    if (type === 'pdf') return <></>;
    if (type !== 'pdf') {
      return (
        <div className="relative aspect-video w-[90vw] sm:w-[476px]">
          <Image
            src={value}
            fill
            alt="camp-thumbnail"
            className="rounded-md"
            loading="lazy"
          />
          <button
            onClick={() => onChange('')}
            className="absolute -top-1 right-0 rounded-full bg-rose-500 p-1 shadow-md"
          >
            <X className="h-4 w-4 stroke-white" />
          </button>
        </div>
      );
    }
  }

  return (
    <UploadDropzone
      className="group mt-0 aspect-video w-[90vw] !border-dashed dark:border-zinc-400 sm:w-[476px]"
      appearance={{
        label: 'text-zinc-500 transition group-hover:text-camp-heavy',
        uploadIcon: 'group-hover:text-camp-heavy transition',
        allowedContent: 'group-hover:text-camp-heavy transition',
        button: ({ ready, isUploading }) => {
          return `custom-button ${
            ready ? 'custom-button-ready' : 'custom-button-not-ready'
          } ${isUploading ? 'custom-button-uploading' : ''}`;
        },
      }}
      endpoint="campImage"
      content={{
        label: () => {
          return '썸네일로 사용할 이미지를 가져오세요.';
        },
        allowedContent: '이미지 (4MB)',
        button: '파일 업로드',
      }}
      onClientUploadComplete={(e) => {
        onChange(e[0].url);
      }}
      onUploadError={(e) => {
        console.log(e);
      }}
    ></UploadDropzone>
  );
};
