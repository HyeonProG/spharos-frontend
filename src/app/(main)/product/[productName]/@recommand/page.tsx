import React from 'react';

export default async function page({
  params,
}: {
  params: Promise<{ productName: string }>;
}) {
  const { productName } = await params;
  return (
    <div>
      recommand
      <p>추천 상품 {decodeURIComponent(productName)}</p>
    </div>
  );
}
