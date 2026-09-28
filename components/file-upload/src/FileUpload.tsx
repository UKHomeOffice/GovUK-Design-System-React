import { FC, ReactNode } from 'react';

import '../assets/FileUpload.scss';

export type FileUploadProps = {
  /** Error message */
  error?: ReactNode
  /** Hint */
  hint?: ReactNode
  /** Label */
  label: ReactNode
  /** HTML name */
  name: string
};

export const FileUpload: FC<FileUploadProps> = ({
}) => {

  return (
    <>FileUpload needs reimplementing</>
  );
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
