import { Meta, StoryObj } from "@storybook/react";
import {fn} from '@storybook/test'
import { Heading, HeadingProps } from "./Heading";

const meta: Meta = {
    title: 'Example/Heading',
    component: Heading,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      color:{control:'color'}
    },
  }satisfies Meta<typeof Heading>

export default meta;
type Story = StoryObj<typeof meta>;


export const Level1 :Story={
    args :{
        level: 1,
        text: 'Heading Level 1',
      },
}
export const Level2 :Story={
    args :{
        level: 2,
        text: 'Heading Level 2',
      },
}
export const Level3 :Story={
    args :{
        level: 3,
        text: 'Heading Level 3',
      },
}
export const Level4 :Story={
    args :{
        level: 4,
        text: 'Heading Level 4',
      },
}
export const Level5 :Story={
    args :{
        level: 5,
        text: 'Heading Level 5',
      },
}
export const Level6 :Story={
    args :{
        level: 6,
        text: 'Heading Level 6',
      },
}
