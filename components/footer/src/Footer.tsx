import { FC, Fragment, HTMLAttributes, ReactNode } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';
import { CrownLogo } from './CrownLogo';
import { OGLLogo } from './OGLLogo';

import '../assets/Footer.scss';

type Link = {
  /** Text of the link */
  text: string;
};

export type NavMenu = {
  /** Number of columns to display the links in */
  columns?: number;
  /** Width of each navigation section in the footer. Defaults to full width. You can pass any design system grid width here, for example, 'one-third'; 'two-thirds'; 'one-half'. */
  width?: number;
  /** List of links to choose from */
  items: Link[];
  /** Title of the menu */
  title: string;
};

export type FooterProps = StandardProps &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode;
    /** The content licence information within the footer component. Defaults to OGL on GOV.UK */
    contentLicence?: ReactNode;
    /** Department branding to use (e.g. home-office) */
    department?: string;
    /** Whether to add the standard Gov.UK content */
    govUK?: boolean;
    /** Maximum width of the contents in px units (-1 for full width) */
    maxContentsWidth?: number;
    /** Links to meta information */
    meta?: Link[];
    /** Title for meta links (visually hidden) */
    metaTitle?: string;
    /** Secondary navigation menus */
    navigation?: NavMenu[];
  };

export const Footer: FC<FooterProps> = ({
  children,
  classBlock,
  classModifiers: _classModifiers = [],
  className,
  contentLicence: _contentLicence,
  department,
  govUK = false,
  maxContentsWidth,
  meta,
  metaTitle = 'Support links',
  navigation,
  ...attrs
}) => {
  const classModifiers = Array.isArray(_classModifiers) ? _classModifiers : [_classModifiers];
  const classes = classBuilder(
    'govuk-footer',
    classBlock,
    [...classModifiers, department],
    className,
  );
  const contentLicence =
    _contentLicence ||
    (!govUK ? null : (
      <Fragment>
        <OGLLogo focusable="false" className={classes('licence-logo')} height="17" width="41" />
        <span className={classes('license-description')}>
          All content is available under the{' '}
          <a
            href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
            rel="license"
            className="govuk-link"
          >
            Open Government Licence v3.0
          </a>
          , except where otherwise stated
        </span>
      </Fragment>
    ));

  return (
    <div {...attrs} className={classes()}>
      <div className="govuk-width-container">
        {!govUK ? null : (
          <CrownLogo focusable="false" className={classes('crown')} height="30" width="32" />
        )}
        {!navigation ? null : (
          <Fragment>
            <div className={classes('navigation')}>
              {navigation.map(({ columns, width, title, items }, i) => (
                <div
                  key={i}
                  className={classes(
                    'section',
                    undefined,
                    !width ? undefined : `govuk-grid-column-${width}`,
                  )}
                >
                  <h2 className={classes('heading', undefined, 'govuk-heading-m')}>{title}</h2>
                  <ul className={classes('list', columns ? `columns-${columns}` : undefined)}>
                    {items.map(({ text, ...linkAttrs }, i2) => (
                      <li key={i2} className={classes('list-item')}>
                        <a {...linkAttrs} className="govuk-link">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <hr className={classes('section-break')} />
          </Fragment>
        )}
        {!govUK && !meta ? (
          children
        ) : (
          <div className={classes('meta')}>
            <div className={classes('meta-item', 'grow')}>
              {!meta ? null : (
                <Fragment>
                  <h2 className="govuk-visually-hidden">{metaTitle}</h2>
                  <ul className={classes('inline-list')}>
                    {meta.map(({ text, ...linkAttrs }, i) => (
                      <li key={i} className={classes('inline-list-item')}>
                        <a {...linkAttrs} className="govuk-link">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              )}
              {!children ? null : <div className={classes('meta-custom')}>{children}</div>}
              {contentLicence}
            </div>
            {!govUK ? null : (
              <div className={classes('meta-item')}>
                <a
                  className={classes('copyright-logo')}
                  href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
                >
                  © Crown copyright
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
