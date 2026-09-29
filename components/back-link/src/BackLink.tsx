import '../assets/BackLink.scss';
import { MouseEventHandler, PropsWithChildren, Ref } from 'react';

type BaseProps = {
  id?: string;
  variant?: 'default' | 'inverse';
  ref?: Ref<HTMLAnchorElement>;
};

type ActionProps = BaseProps & {
  onClick: MouseEventHandler<HTMLAnchorElement>;
  href?: never;
};

type LinkProps = BaseProps & {
  onClick?: never;
  href: string;
};

export type BackLinkProps = ActionProps | LinkProps;

export const BackLink = ({
  children,
  id,
  href,
  ref,
  onClick,
  variant = 'default',
}: PropsWithChildren<BackLinkProps>) => {
  const classes = [
    'govuk-back-link',
    variant === 'inverse' ? 'govuk-back-link--inverse' : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a id={id} href={href ? href : '#'} className={classes} onClick={onClick} ref={ref}>
      {children ?? 'Back'}
    </a>
  );
};

BackLink.displayName = 'BackLink';

export default BackLink;
