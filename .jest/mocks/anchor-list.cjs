const React = require('react');

const AnchorList = ({ as: Component = 'ul', items = [], ...props }) => React.createElement(
  Component,
  props,
  items.map(({ children, href, text }, index) => React.createElement(
    'li',
    { key: index },
    React.createElement('a', { href }, children || text)
  ))
);

module.exports = {
  AnchorList
};
