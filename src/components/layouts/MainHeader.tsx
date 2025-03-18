import { navMenuData } from '@/data/initialDatas';
import { gnbMenuType } from '@/types/initialDataTypes';
import React from 'react';

export default function MainHeader() {
  return (
    <header>
      <nav className="w-full px-[16px] py-3">
        <ul className="w-full flex justify-between items-center">
          {navMenuData.map((menu: gnbMenuType) => (
            <li key={menu.id}>
              <menu.icon className="red" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
