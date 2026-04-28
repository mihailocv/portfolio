import { ChangeDetectionStrategy, Component } from '@angular/core';

// interfaces
import type { MenuItem } from '@shared/interfaces/menu-bar-item';

// components
import { MenuBar } from '@storybook/menu-bar/menu-bar';

@Component({
  selector: 'app-desktop',
  imports: [MenuBar],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Desktop {
  menuItems: MenuItem[] = [
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
  ];
}
