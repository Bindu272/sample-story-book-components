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
        content: 'This is the content of the card',
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX9pl8af7Y7nzBN_8gY3XmGZKCzkUOqRcod9oXuBf4g&s',
        btnText:'Button',
       color:'#ffffff',
       backgroundColor:'#1ea7fd'
    }
}