import type { Meta, StoryObj } from '@storybook/react-vite';

import { Panel } from '@not-govuk/panel';
import {BackLink, BackLinkProps} from '../src/BackLink';

const meta = {
  title: 'Back link',
  component: BackLink,
  parameters: {
    chromatic: { viewports: [320, 320] },
    description: 'A component to help users navigate back one page.'
  },
  args: {
    href: '#',
  }
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Back',
    href: '#'
  }
};

export const Standard: Story = {
  args: {}
};

export const DarkBackgrounds: Story = {
  args: {
    inverse: true
  },
  render: ({...props}: BackLinkProps) => (
    <Panel classModifiers="interruption">
      <BackLink {...props} />
    </Panel>
  )
};

export const CustomText: Story = {
  args: {
    text: 'Yn ôl'
  }
};

export const NoHRef: Story = {
  name: 'No HRef',
  args: {
    href: undefined
  }
};
