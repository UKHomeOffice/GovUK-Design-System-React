import { FC, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

import '../assets/WarningText.scss';

export type WarningTextProps = StandardProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    /** Hidden text to be read out by a screen-reader prior to the warning */
    iconFallbackText?: string;
  };

export const WarningText: FC<WarningTextProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  iconFallbackText = 'Warning',
  ...attrs
}) => {
  const classes = classBuilder('govuk-warning-text', classBlock, classModifiers, className);

  return (
    <div {...attrs} className={classes()}>
      <span className={classes('icon')} aria-hidden="true">
        !
      </span>
      <strong className={classes('text')}>
        <span className="govuk-visually-hidden">{iconFallbackText}</span>
        {children}
      </strong>
    </div>
  );
};

export default WarningText;
