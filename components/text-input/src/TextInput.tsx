import { FC, ReactNode } from 'react';

import '../assets/TextInput.scss';

export type TextInputProps = {
  /** Error message */
  error?: ReactNode
  /** Hint */
  hint?: ReactNode
  /** Label */
  label: ReactNode
  /** HTML name */
  name: string
};

export const TextInput: FC<TextInputProps> = ({
}) => {
  return (
    <>
      text-input needs reimplementing
    </>
  );
};

TextInput.displayName = 'TextInput';

export default TextInput;
