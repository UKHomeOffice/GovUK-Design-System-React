import { FC, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';
import { VisuallyHidden } from '../../visually-hidden/src/VisuallyHidden';

import 'govuk-frontend/dist/govuk/components/error-message/_index.scss'

export type ErrorMessageProps = StandardProps &
  HTMLAttributes<HTMLParagraphElement> & {
    children?: ReactNode;
    hidden?: boolean;
  };

export const ErrorMessage: FC<ErrorMessageProps> = ({
  children,
  classBlock,
  classModifiers: _classModifiers = [],
  className,
  hidden = false,
  ...attrs
}) => {
  const classModifiers = [
    hidden ? 'hidden' : undefined,
    ...(Array.isArray(_classModifiers) ? _classModifiers : [_classModifiers]),
  ];
  const classes = classBuilder('govuk-error-message', classBlock, classModifiers, className);

  return (
    <p {...attrs} className={classes()} aria-hidden={hidden}>
      <VisuallyHidden>Error:</VisuallyHidden> {children}
    </p>
  );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
