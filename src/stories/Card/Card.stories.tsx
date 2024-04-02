import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Card } from './Card';
const meta: Meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Card Title',
        content: 'This is the content of the card'
    }
}