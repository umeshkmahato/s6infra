import { useCallback } from 'react';

export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) => {
  return useCallback(
    (element: HTMLElement | null) => {
      if (!element) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      }, options);

      observer.observe(element);

      return () => observer.unobserve(element);
    },
    [callback, options]
  );
};
