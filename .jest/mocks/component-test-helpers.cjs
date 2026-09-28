const React = require('react');
const testingLibraryReact = require('@testing-library/react');
const userEventModule = require('@testing-library/user-event');
require('@testing-library/jest-dom');

const MemoryRouter = ({ children }) => React.createElement(React.Fragment, null, children);

const render = (ui, options = {}) => testingLibraryReact.render(ui, {
  wrapper: ({ children }) => React.createElement(MemoryRouter, null, children),
  ...options
});

module.exports = {
  ...testingLibraryReact,
  render,
  userEvent: userEventModule.default ?? userEventModule
};
