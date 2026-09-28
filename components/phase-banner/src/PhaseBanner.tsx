import { FC } from 'react';
import { classBuilder } from '@react-foundry/component-helpers';
import { Tag } from '../../tag/src/Tag';
import { WidthContainer, WidthContainerProps } from '../../width-container/src/WidthContainer';

import 'govuk-frontend/dist/govuk/components/phase-banner/_index.scss'

export type PhaseBannerProps = WidthContainerProps & {
  /** The phase the service is in */
  phase: string;
};

export const PhaseBanner: FC<PhaseBannerProps> = ({
  children,
  classBlock,
  classModifiers,
  className,
  phase,
  ...attrs
}) => {
  const classes = classBuilder('govuk-phase-banner', classBlock, classModifiers, className);

  return (
    <WidthContainer {...attrs} className={classes()}>
      <p className={classes('content')}>
        <Tag className={classes('tag')}>{phase}</Tag>
        <span className={classes('text')}>{children}</span>
      </p>
    </WidthContainer>
  );
};

export default PhaseBanner;
