"use client";
import { useEffect, type RefObject } from 'react';
export function useAutosizeTextarea(ref: RefObject<HTMLTextAreaElement | null>, value: string, kind = '') {
  useEffect(() => {
    const element = ref.current;
    if (element) { element.style.height = 'auto'; element.style.height = element.scrollHeight + 'px'; }
  }, [ref, value, kind]);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let width = -1;
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width === width) return;
      width = entry.contentRect.width;
      element.style.height = 'auto'; element.style.height = element.scrollHeight + 'px';
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, kind]);
}
