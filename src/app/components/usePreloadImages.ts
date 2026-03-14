import { useEffect } from 'react';
import {
  getPreferredResponsiveImageSource,
  type ResponsivePictureData,
} from '@/app/components/ResponsiveImage';

export function usePreloadImages(imageSrcs: Array<string | ResponsivePictureData>) {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    imageSrcs.forEach((image) => {
      if (!image) return;
      const { href, type } = getPreferredResponsiveImageSource(image);
      // Avoid duplicate preloads
      const existing = document.querySelector(`link[rel="preload"][href="${href}"]`);
      if (existing) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      if (type) {
        link.type = type;
      }
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
