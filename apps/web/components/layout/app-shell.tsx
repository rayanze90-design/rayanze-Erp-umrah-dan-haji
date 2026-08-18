import type { ReactNode } from 'react';

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main style={{ padding: 24 }}>
      <h1>{title}</h1>
      {children}
    </main>
  );
}
