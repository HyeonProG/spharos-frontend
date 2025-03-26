'use client';
import { mainTabMenuData } from '@/data/initialDatas';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname} from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function MainTabMenu() {
  // const [activeTab, setActiveTab] = React.useState(0);
  const pathName = usePathname();

  const [activeMenuStyle, setActiveMenuStyle] = useState({ left: 0, width: 0 });

  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeMenu = menuRefs.current.find(
      (el, index) => mainTabMenuData[index].link === pathName && el
    );

    if (activeMenu) {
      const { offsetLeft, offsetWidth } = activeMenu;
      setActiveMenuStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathName]);

  return (
    <div>
      <ul className="grid grid-cols-4 relative">
        {mainTabMenuData.map((menu, index) => (
          <Link key={menu.id} href={menu.link}>
            <li
              ref={(el) => {
                menuRefs.current[index] = el; // 콜백 함수가 값을 반환하지 않도록 수정
              }}
              data-state={menu.link === pathName ? 'active' : 'inactive'}
              className={cn(
                'w-fit py-3 text-nowrap cursor-pointer',
                'data-[state=active]:text-blue-500'
              )}
            >
              {menu.title}
            </li>
          </Link>
        ))}
        <div
          className="absolute bottom-0 h-[2px] bg-gray-700 transition-all duration-300"
          style={{ left: activeMenuStyle.left, width: activeMenuStyle.width }}
        ></div>
      </ul>
    </div>
  );
}