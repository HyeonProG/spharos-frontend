'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useSidebarContext } from '@/context/SideBarContext';

export default function AuthHeader() {
  const { isOpen, setIsOpen } = useSidebarContext();
  return (
    <header>
      auth header
      <Button onClick={() => setIsOpen(!isOpen)}>SideBar</Button>
    </header>
  );
}
