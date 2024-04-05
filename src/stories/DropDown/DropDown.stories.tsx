// Dropdown.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropdown from './DropDown';

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const Default: Story = {
  args: {
    options,
    onSelect: action('Option Selected'),
  },
};
