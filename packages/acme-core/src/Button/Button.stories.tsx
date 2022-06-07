import Button from './Button';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

// -----------------------------------------------------------------------------

export default {
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example',
};

/* TODO: Write <Button /> stories. */
