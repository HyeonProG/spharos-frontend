'use client';
import ProductCardItem from '@/components/ui/ProductCardItem';
import { productDataListType } from '@/types/ResponseDataTypes';
import React, { useEffect, useRef } from 'react';

export default function ProductList({ data }: { data: productDataListType[] }) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('entries', entries);
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 w-full px-4">
        {data.map((product) => (
          <ProductCardItem key={product.productCode} product={product} />
        ))}
      </ul>
      <div className="bg-red-400 text-white w-full px-4 p-4" ref={loaderRef}>
        load checker
      </div>
    </>
  );
}
