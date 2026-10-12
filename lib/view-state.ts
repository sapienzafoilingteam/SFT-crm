'use client';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
// UI preferences only, in memory for this browser session. Cleared on logout.
const values = new Map<string, unknown>();
export function clearViewState() { values.clear(); }
export function useViewState<T>(key: string, initial: T | (() => T)): [
    T,
    Dispatch<SetStateAction<T>>
] {
    const [value, setValue] = useState<T>(() => typeof window !== 'undefined' && values.has(key) ? values.get(key) as T : typeof initial === 'function' ? (initial as () => T)() : initial);
    useEffect(() => { values.set(key, value); }, [key, value]);
    return [value, setValue];
}
