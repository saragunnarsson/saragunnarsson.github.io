import type { ResponsivePictureData } from "@/app/components/ResponsiveImage";

// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgInvoicesList from "@assets/4e61a37dc6df489bb2855e6f2664021adb84c291.png?w=320;640&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgRecurringSeries from "@assets/da8d318aa15816a8337fc94481826106a187b959.png?w=320;640&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgRecurringInvoice from "@assets/d932143eaea2ef56a7a3d4f69717cb95276d3116.png?w=320;640&format=avif;webp;png&as=picture";

export const mobileRecurringInvoicesImages = {
  invoicesList: imgInvoicesList as ResponsivePictureData,
  recurringSeries: imgRecurringSeries as ResponsivePictureData,
  recurringInvoice: imgRecurringInvoice as ResponsivePictureData,
};
