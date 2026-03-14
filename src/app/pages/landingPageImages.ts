import type { ResponsivePictureData } from "@/app/components/ResponsiveImage";

// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgImage7 from "@assets/a45a90b46f1a72f3d69feb9f0b27c0e3488eddc0.png?w=450;900&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgImage22 from "@assets/b996682d6dd5ccade0cc1b24d89a2f5bc1216ac7.png?w=451;902&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgNetCentsInvoice from "@assets/ac1c428d77638327b9e42bc771b747d3da7d282d.png?w=450;900&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgForgeWebsite from "@assets/c34225359a1aff7003664cea48ea13fdf869ba7f.png?w=451;902&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgIntroUi from "@assets/1117912c537834e67fd7274899254df76457af3d.png?w=720;1112&format=avif;webp;png&as=picture";

export const landingPageImages = {
  autozenCard: imgImage7 as ResponsivePictureData,
  netCentsWidgetCard: imgImage22 as ResponsivePictureData,
  netCentsInvoiceCard: imgNetCentsInvoice as ResponsivePictureData,
  forgeCard: imgForgeWebsite as ResponsivePictureData,
  introUi: imgIntroUi as ResponsivePictureData,
};
