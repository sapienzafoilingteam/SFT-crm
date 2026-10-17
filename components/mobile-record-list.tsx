'use client';
import { ChevronRight } from 'lucide-react';
export function MobileRecordList({ items, onOpen, empty }: {
  items: { id: string; title: string; subtitle: string; value?: string; status?: string }[];
  onOpen: (id: string) => void;
  empty: string;
}) {
  return items.length ? <ul className="mobile-group mobile-record-list">{items.map(item => <li key={item.id}><button onClick={() => onOpen(item.id)}><span className="mobile-record-copy"><strong>{item.title}</strong><small>{item.subtitle}</small>{item.status && <span className="badge">{item.status}</span>}</span>{item.value && <span className="mobile-record-value">{item.value}</span>}<ChevronRight size={18} /></button></li>)}</ul> : <div className="empty">{empty}</div>;
}
