import { ComponentProps, FC } from 'react';
import { A as _A } from '@react-foundry/anchor';

import "govuk-frontend/dist/govuk/core/_links.scss";

export type LinkProps = ComponentProps<typeof _A>;

export const Link: FC<LinkProps> = ({ classBlock, ...props }) => (
  <a {...props} className={classBlock || 'govuk-link'} />
);

Link.displayName = 'A';

export default Link;
export const A: FC<LinkProps> = Link;
