import cartIcon from '@/components/ui/icons/cartIcon';
import gnbMenuIcon from '@/components/ui/icons/gnbMenuIcon';
import searchIcon from '@/components/ui/icons/searchIcon';
import { gnbMenuType, mainTabMenuType } from '@/types/initialDataTypes';

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

export const mainTabMenuData: mainTabMenuType[] = [
  {
    id: 1,
    title: '메인',
    link: '/',
  },
  {
    id: 2,
    title: '기획전',
    link: '/event',
  },
  {
    id: 3,
    title: '베스트',
    link: '/best',
  },
  {
    id: 4,
    title: '마이페이지',
    link: '/mypage',
  },
]
