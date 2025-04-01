'use client';
import { cartItemAllCheck } from '@/actions/cart-service';
import { Checkbox } from '@/components/ui/checkbox';
import { SectionContainer } from '@/components/ui/SectionContainer';
import React from 'react';

export default function CartListAllChecker({ checked }: { checked: boolean }) {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log('checked');
    // cartItemAllCheck(e.target.checked);
  };
  return (
    <SectionContainer.InnerPaddingSection className="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={checked}
        id="all-check"
        onChange={handleChangeCheckbox}
      />
      <label
        htmlFor="all-check"
        className="text-sm text-slate-500 cursor-pointer"
      >
        전체선택
      </label>
    </SectionContainer.InnerPaddingSection>
  );
}
