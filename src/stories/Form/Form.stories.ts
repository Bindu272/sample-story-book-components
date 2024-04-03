
import {Form} from "./Form";
import { Meta, StoryObj } from "@storybook/react";
import {fn} from '@storybook/test'

const meta:Meta={
    title:'Example/Form',
    component: Form,
    parameters:{
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
      onSubmit: (formData: any) => {
        console.log(formData); // Log the form data for demonstration
      },
    },
  };
  
  // Story for a pre-filled form
 
  
  // Story for a form with custom onSubmit function
  export const CustomSubmit: Story = {
    args: {
      onSubmit: (formData: any) => {
        alert('Form submitted with custom function');
        console.log(formData); // Log the form data for demonstration
      },
    },
  };