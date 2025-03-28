import React from 'react';

export default function layout({
  children,
  review,
  recommand,
}: Readonly<{
  children: React.ReactNode;
  review: React.ReactNode;
  recommand: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      {review}
      {recommand}
    </main>
  );
}
