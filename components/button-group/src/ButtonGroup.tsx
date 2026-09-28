import { FC, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

import 'govuk-frontend/dist/govuk/objects/_button-group.scss';

export type ButtonGroupProps = StandardProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
  };

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  ...attrs
}) => {
  const classes = classBuilder('govuk-button-group', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes()}>
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
