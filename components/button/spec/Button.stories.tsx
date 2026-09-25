import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonGroup } from '@not-govuk/button-group';
import { Panel } from '@not-govuk/panel';
import { Button } from '../src/Button';

const meta = {
  title: 'Button',
  parameters: {
    chromatic: {
      viewports: [640, 480]
    },
    description: 'A component to allow users to carry out an action.'
  },
  component: Button,
  args: { children: 'Save and continue' }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Save and continue'
  }
};

export const Standard: Story = {
  args: {
    children: 'Save and continue',
  }
};

export const Start: Story = {
  args: {
    variant: 'start',
    href: '#',
    children: 'Start now'
  },
};

export const Secondary: Story = {
  args: { children: 'Find address', variant: 'secondary' }
};

export const Warning: Story = {
  args: { children: 'Delete account', variant: 'warning' }
};

export const DarkBackgrounds: Story = {
  args: { children: 'Create an account', variant: 'inverse' },
  render: ({ ...props }) => (
    <Panel classModifiers="interruption">
      <Button {...props} />
    </Panel>
  ),
  name: 'Dark backgrounds'
};

export const Disabled: Story = {
  args: { children: 'Disabled button', disabled: true }
};

export const Group: Story = {
  args: {},
  render: ({ ...props }) => (
    <ButtonGroup>
      <Button {...props} />
      <Button variant="secondary">Save as draft</Button>
    </ButtonGroup>
  )
};

export const GroupWithLink: Story = {
  args: { children: 'Continue' },
  render: ({ ...props }) => (
    <ButtonGroup>
      <Button {...props} />
      <a className="govuk-link" href="#">Cancel</a>
    </ButtonGroup>
  ),
  name: 'Group with link'
};

export const PreventDoubleClick: Story = {
  args: { children: 'Confirm and send', preventDoubleClick: true },
  name: 'Prevent double click'
};
