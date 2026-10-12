'use client';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { Provider } from './provider';
const WorkspaceApp = dynamic(() => import('./workspace-app').then(m => m.WorkspaceApp), { loading: () => <div className="empty" role="status">Preparazione del workspace…</div> });
export function WorkspaceRoot({ children }: {
    children: ReactNode;
}) {
    const pathname = usePathname();
    const legal = pathname === '/privacy-policy' || pathname === '/ts';
    const path = pathname.split('/').filter(Boolean);
    return <Provider publicHome={pathname === '/'} inactive={legal}>
    {legal ? children : <WorkspaceApp path={path[0] === 'accesso' ? [] : path}/>}
  </Provider>;
}
