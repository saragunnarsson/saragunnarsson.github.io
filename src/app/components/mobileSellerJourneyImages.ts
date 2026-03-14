import type { ResponsivePictureData } from "@/app/components/ResponsiveImage";

// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgEllipse91 from "@assets/90008e966066e71cd3d854476de63f4bd5a3c713.png?w=80;160&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgEstimateScreen from "@assets/9cdd76a6cbf24fad48fddef9449cf93b451887cc.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgConfirmScreen from "@assets/ab8605fa58d4c481a011eea6d0eb68f0147d3cba.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgBuyerScreen from "@assets/cc628af6983107aa1d4f8d1bd64887146e047949.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgOfferScreen from "@assets/6285d119e74d5a989d2277ac0fead859edf77f52.png?w=340;680&format=avif;webp;png&as=picture";

export const mobileSellerJourneyImages = {
  avatar: imgEllipse91 as ResponsivePictureData,
  estimate: imgEstimateScreen as ResponsivePictureData,
  confirm: imgConfirmScreen as ResponsivePictureData,
  buyer: imgBuyerScreen as ResponsivePictureData,
  offer: imgOfferScreen as ResponsivePictureData,
};
