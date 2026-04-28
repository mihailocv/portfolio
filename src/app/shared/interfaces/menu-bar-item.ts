export interface MenuSubItem {
  label: string;
  shortcut?: string;
}

export interface MenuItem {
  label: string;
  subItems: MenuSubItem[];
}
