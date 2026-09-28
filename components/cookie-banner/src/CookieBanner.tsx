import { FC, HTMLAttributes, ReactNode } from 'react';
import { ButtonGroup } from '@not-govuk/button-group';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

import '../assets/CookieBanner.scss';

export type Message = {
  /** Heading for the message */
  heading?: ReactNode
  /** Content of the message */
  content: ReactNode
  /** Actions that can be taken in reponse to the message, typically buttons or links */
  actions?: ReactNode
};

export type CookieBannerProps = StandardProps & HTMLAttributes<HTMLDivElement> & {
  /** Maximum width of the contents in px units (-1 for full width) */
  maxContentsWidth?: number
  /** List of messages to display */
  messages: Message[]
};

export const CookieBanner: FC<CookieBannerProps> = ({
  'aria-label': ariaLabel= 'Cookie banner',
  classBlock,
  classModifiers,
  className,
  maxContentsWidth,
  messages,
  ...attrs
}) => {
  const classes = classBuilder('govuk-cookie-banner', classBlock, classModifiers, className);

  const content = messages.map(({ actions, content, heading, ...attrs }, i) => (
    <div key={i} {...attrs} className="govuk-width-container">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          { !heading ? null :
            <h2 className={classes('heading', undefined, 'govuk-heading-m')}>{heading}</h2>
          }
          <div className={classes('content')}>
            { content }
          </div>
        </div>
      </div>
      <ButtonGroup>
        {actions}
      </ButtonGroup>
    </div>
  ) );

  return (
    <div {...attrs} className={classes()} data-nosnippet role="region" aria-label={ariaLabel}>
      { content }
    </div>
  );
};

CookieBanner.displayName = 'CookieBanner';

export default CookieBanner;
