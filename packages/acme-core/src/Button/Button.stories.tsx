import Button from './Button';

import type { ButtonProps } from './Button';
import type { Meta, Story } from '@storybook/react';

// -----------------------------------------------------------------------------

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example',
};

/* TODO: Write <Button /> stories. */
