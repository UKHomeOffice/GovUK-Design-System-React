const React = require('react');

const Link = React.forwardRef(({ children, to, href, ...props }, ref) => {
  const resolvedHref = href ?? (typeof to === 'string'
    ? to
    : `${to?.pathname ?? ''}${to?.search ?? ''}${to?.hash ?? ''}`);

  return React.createElement('a', {
    ...props,
    href: resolvedHref || '#',
    ref
  }, children);
});

Link.displayName = 'Link';

module.exports = {
  Link,
  needSuspense: false,
  useIsActive: () => () => false,
  useLocation: () => ({
    pathname: '/',
    search: '',
    hash: ''
  }),
  useNavigate: () => () => undefined,
  useParams: () => ({})
};
