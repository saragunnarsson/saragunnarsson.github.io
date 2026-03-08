import { useEffect } from 'react';

export function usePreloadImages(imageSrcs: string[]) {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    imageSrcs.forEach((src) => {
      if (!src) return;
      // Avoid duplicate preloads
      const existing = document.querySelector(`link[rel="preload"][href="${src}"]`);
      if (existing) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [imageSrcs]);
}
