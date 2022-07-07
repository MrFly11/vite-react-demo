import { ReactNode } from "react";
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

export type MenuItem = {
  itemKey: string;
  text: string;
  icon: ReactNode
}

export const menuItems: MenuItem[] = [
  { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
  { itemKey: 'Histogram', text: '基础数据', icon: <IconHistogram size="large" /> },
  { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
  { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
]