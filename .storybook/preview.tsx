import 'govuk-frontend/dist/govuk/_base.scss';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import React from 'react';

 export const decorators = [ (Story: React.FC) => 
  ( <div className="govuk-template__body"><Story /></div> ),
];
export const preview = {
  parameters: {
    a11y: {
      context: '#storybook-root',
      config: {},
      options: {},
      manual: false // setting this to false will enable automatic accessibility checks
    },
    docs: {
      container: DocsContainer,
      page: DocsPage
    }
  },
  tags: ['autodocs']
};

export default preview;
