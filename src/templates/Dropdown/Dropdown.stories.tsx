import type { Meta as MetaStory, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dropdown } from '@/components/common';
import type { ICommon } from '@/interfaces';

const meta = {
  title: 'Common/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    options: {
      control: {
        type: 'select',
        labels: {
          first: '1 options',
          second: '2 options',
        },
      },
      options: ['first', 'second'],
      mapping: {
        first: [{ id: 1, label: 'o1', value: 'o1' }],
        second: [
          { id: 1, label: 'label 1', value: 'v 1' },
          { id: 2, label: 'label 2', value: 'v 2' },
        ],
      },
    },
  },
} satisfies MetaStory<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Simple: Story = {
  decorators: [
    () => {
      const options: ICommon.IOption[] = [
        { id: 1, label: '1', value: '1' },
        { id: 2, label: '2', value: '2' },
      ];
      const [selected, setSelected] = useState(options[0]);
      return (
        <Dropdown
          options={options}
          selected={selected}
          onChange={(option: ICommon.IOption) => setSelected(option)}
          labelE="Select option"
          classList="left-0"
          classOption=""
          classActiveOption=""
        />
      );
    },
  ],
};
