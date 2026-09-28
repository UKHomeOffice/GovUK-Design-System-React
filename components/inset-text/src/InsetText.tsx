import { FC, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

import 'govuk-frontend/dist/govuk/components/inset-text/_index.scss'

export type InsetTextProps = StandardProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
  };

export const InsetText: FC<InsetTextProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('govuk-inset-text', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes()}>
      {children}
    </div>
  );
};

export default InsetText;
