import cartIcon from '@/components/ui/icons/cartIcon';
import gnbMenuIcon from '@/components/ui/icons/gnbMenuIcon';
import searchIcon from '@/components/ui/icons/searchIcon';
import { gnbMenuType } from '@/types/initialDataTypes';

export const navMenuData: gnbMenuType[] = [
  {
    id: 1,
    title: 'gnb',
    icon: gnbMenuIcon,
  },
  {
    id: 2,
    title: 'search',
    icon: searchIcon,
  },
  {
    id: 3,
    title: 'cart',
    icon: cartIcon,
  },
];
