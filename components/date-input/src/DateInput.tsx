import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { StandardProps } from '@react-foundry/component-helpers';

import '../assets/DateInput.scss';

export type DateInputValue = {
  day: string
  month: string
  year: string
}

export type DateInputPreValidateError = {
  day?: string
  month?: string
  year?: string
}

export type DateInputError = ReactNode | DateInputPreValidateError;

export const isPreValidateError = (v: DateInputError): v is DateInputPreValidateError => (
  !!v && typeof v === 'object' && (
    'day' in v ||
    'month' in v ||
    'year' in v
  )
);

export type DateInputProps = StandardProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'label' | 'value' | 'defaultValue'> & {
  /** Initial value of the field */
  defaultValue?: DateInputValue,
  /** Error message */
  error?: DateInputError,
  /** Hint */
  hint?: ReactNode
  /** HTML id (If not specified then the name will be used) */
  id?: string
  /** Label */
  label: ReactNode
  /** HTML name */
  name: string
  /** Value for controlled fields */
  value?: DateInputValue
};

interface WithFormat<T> {
  format?: (v: T) => string
}
interface WithDeformat<T> {
  deformat?: (v: string) => T
}

export type RawField<P, V> = FC<P> & WithFormat<V> & WithDeformat<V>

export const DateInput: RawField<DateInputProps, DateInputValue> = ({
}) => {
  return (
    <>Date input needs reimplementing</>
  );
};

DateInput.format = (v: DateInputValue): string => {
  const pad = (size: number, v: string): string =>
    String(v).padStart(size, '0');

  const isSet = (v: any): boolean =>
    !!(v || v === 0);

  if (isSet(v.day) && isSet(v.month) && isSet(v.year)) {

    const dd = pad(2, v.day);
    const mm = pad(2, v.month);
    const yyyy = pad(4, v.year);

    return `${yyyy}-${mm}-${dd}`;
  } else {
    return '';
  }
};

DateInput.deformat = (v: string): DateInputValue => {
  const unpad = (v: any): string => Number(v).toString();

  const arr = v.split('-');

  return (
    arr.length === 3 ? {
      day: unpad(arr[2]),
      month: unpad(arr[1]),
      year: arr[0]
    } : {
      day: '',
      month: '',
      year: ''
    }
  );
};

DateInput.displayName = 'DateInput';

export default DateInput;
