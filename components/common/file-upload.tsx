import { UploadDropzone } from '@/lib/uploadthing';

import '@uploadthing/react/styles.css';

export const FileUpload = () => {
  return (
    <UploadDropzone
      className="group"
      appearance={{
        label: 'text-zinc-500 transition group-hover:text-camp-heavy',
        uploadIcon: 'group-hover:text-camp-heavy transition',
        allowedContent: 'group-hover:text-camp-heavy transition',
        button: ({ ready, isUploading }) => {
          return `${ready}`;
        },
      }}
      endpoint="campImage"
      content={{
        label: () => {
          return '썸네일로 사용할 이미지를 가져오세요.';
        },
        allowedContent: '이미지 (4MB)',
        button: ({ ready }) => {
          return '파일 업로드';
        },
      }}
      onUploadError={(e) => {
        console.log(e);
      }}
    ></UploadDropzone>
  );
};
