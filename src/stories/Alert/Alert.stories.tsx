import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import {Alert} from './Alert'

const meta: Meta = {
    title: 'Example/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta;
type Story = StoryObj<typeof meta>;


export const Success: Story = {
    args: {
        type: 'success',
        message: 'This is a success alert!',
    },
}

export const info: Story = {
    args: {
        type: 'info',
        message: 'This is a info alert!',
    },
}
export const warning: Story = {
    args: {
        type: 'warning',
        message: 'This is a warning alert!',
    },
}
export const error: Story = {
    args: {
        type: 'error',
        message: 'This is a error alert!',
    },
}


