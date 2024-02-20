export type MenuItemType = 'default' | 'primary' | 'error'

export interface MenuItem {
  id: string
  title: string
  type?: MenuItemType
}
