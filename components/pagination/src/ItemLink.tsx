import { FC } from 'react';
import { StandardProps, classBuilder } from '@react-foundry/component-helpers';

export type LinkProps = {
  children?: React.ReactNode;
};

export type ItemLinkProps = LinkProps &
  StandardProps & {
    current?: boolean;
  };

export const ItemLink: FC<ItemLinkProps> = ({
  children,
  classBlock,
  classModifiers = [],
  className,
  current = false,
  ...attrs
}) => {
  const classes = classBuilder('govuk-pagination', classBlock);

  return (
    <li
      className={classes('item', [...classModifiers, current ? 'current' : undefined], className)}
    >
      <a {...attrs} className={classes('link')}>
        {children}
      </a>
    </li>
  );
};

ItemLink.displayName = 'PageList.Link';

export default ItemLink;
