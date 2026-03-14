import type { ResponsivePictureData } from "@/app/components/ResponsiveImage";

// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgAutozenPhone from "@assets/ac121c8480b9c211e8dade76bf8abe69216bffbc.png?w=400;800&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import netCentsImage from "@assets/b550a68f6e40dfbd1b7442612a007a4b4fcc075a.png?w=400;800&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgNetCentsInvoice from "@assets/01b6af83a1f0b019ce633d7046079c734780ef0f.png?w=400;800&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgForgeDesign from "@assets/f42cf35f18ecba4bbca996d4f87373602830732c.png?w=425;850&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgForgeWebsite from "@assets/75adac05843b30fef4e2293fc3d842442f439f4f.png?w=770;1487&format=avif;webp;png&as=picture";

export const caseStudyImages = {
  autozenPhone: imgAutozenPhone as ResponsivePictureData,
  netCentsWidget: netCentsImage as ResponsivePictureData,
  netCentsRecurringInvoice: imgNetCentsInvoice as ResponsivePictureData,
  forgeDesign: imgForgeDesign as ResponsivePictureData,
  forgeWebsite: imgForgeWebsite as ResponsivePictureData,
};
