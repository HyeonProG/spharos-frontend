'use client';
import ProductCardItem from '@/components/ui/ProductCardItem';
import { productDataListType } from '@/types/ResponseDataTypes';
import { useRouter } from 'next/navigation';
import React, { Suspense, useEffect, useRef } from 'react';

export default function ProductList({
  data,
  page = 1,
}: {
  data: productDataListType[];
  page?: number;
}) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const changePage = React.useCallback(
    (page: number) => {
      router.push(`/products?page=${page + 1}&pageSize=20`, { scroll: false });
    },
    [router]
  );

  // const changePage = (page: number) => {
  //   router.push(`/products?page=${page + 1}&pageSize=20`, { scroll: false });
  // };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('entries', entries);
      if (entries[0].isIntersecting) {
        console.log('load more');
        changePage(page);
      }
    });
    // if (loaderRef.current) {
    //   observer.observe(loaderRef.current);
    // }

    // return () => {
    //   if (loaderRef.current) {
    //     observer.unobserve(loaderRef.current);
    //   }
    // };
    const ref = loaderRef.current;
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [loaderRef, page, changePage]);
  return (
    <>
      <ul className="grid grid-cols-2 gap-4 w-full px-4">
        {data.map((product) => (
          <Suspense key={product.productCode} fallback={<div>Loading...</div>}>
            <ProductCardItem product={product} />
          </Suspense>
        ))}
      </ul>
      <div className="bg-red-400 text-white w-full px-4 p-4" ref={loaderRef}>
        load checker
      </div>
    </>
  );
}
