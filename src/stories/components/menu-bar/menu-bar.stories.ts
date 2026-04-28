import type { Meta, StoryObj } from '@storybook/angular';

import type { MenuItem } from '@shared/interfaces/menu-bar-item';
import { MenuBar } from '@storybook/menu-bar/menu-bar';

const defaultMenuItems = [
  {
    label: 'File',
    subItems: [
      {
        label: 'New',
        shortcut: '⌘N',
      },
      {
        label: 'Open',
        shortcut: '⇧⌘O',
      },
      {
        label: 'Save',
        shortcut: '⇧⌘S',
      },
    ],
  },
  {
    label: 'Edit',
    subItems: [
      {
        label: 'Cut',
        shortcut: '⌘X',
      },
    ],
  },
  {
    label: 'View',
    subItems: [
      {
        label: 'Zoom In',
        shortcut: '⌘+',
      },
    ],
  },
  {
    label: 'Help',
    subItems: [
      {
        label: 'About',
      },
    ],
  },
] satisfies MenuItem[];

const meta = {
  component: MenuBar,
  tags: ['autodocs'],
  title: 'Components/Menu Bar',
  parameters: {
    docs: {
      description: {
        component:
          'Desktop-style menu bar used to display top-level application menus such as File, Edit, View, and Help. The component is presentation-only: it receives the menu model through `menuItems` and renders the provided top-level labels in order. Sub-items are part of the input model so the same data can later drive dropdown menu interactions.',
      },
    },
  },
  args: {
    menuItems: defaultMenuItems,
  },
  argTypes: {
    menuItems: {
      name: 'menuItems',
      control: 'object',
      description: 'Top-level menu items displayed in the menu bar.',
      required: true,
      table: {
        category: 'Inputs',
        type: {
          summary: 'MenuItem[]',
          detail:
            'MenuItem: { label: string; subItems: { label: string; shortcut?: string }[] }',
        },
        defaultValue: {
          summary: 'required',
        },
      },
    },
  },
} satisfies Meta<MenuBar>;

export default meta;
type Story = StoryObj<MenuBar>;

export const Default: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'Default menu bar with common desktop menu groups and shortcut metadata in the input model.',
      },
    },
  },
};

export const Empty: Story = {
  name: 'Empty',
  args: {
    menuItems: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Empty state for layout checks. The input is still required, but it can be an empty array when no menu entries should be displayed.',
      },
    },
  },
};
