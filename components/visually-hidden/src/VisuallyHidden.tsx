import { FC, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

import "govuk-frontend/dist/govuk/utilities/_visually-hidden.scss";

export type VisuallyHiddenProps = StandardProps &
  HTMLAttributes<HTMLSpanElement> & {
    children?: ReactNode;
  };

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('govuk-visually-hidden', classBlock, classModifiers, className);

  return (
    <span {...attrs} className={classes()}>
      {children}
    </span>
  );
};

VisuallyHidden.displayName = 'VisuallyHidden';

export default VisuallyHidden;
