import React from 'react';

export function PCLayoutHeaderActions({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-3">{children}</div>;
}
