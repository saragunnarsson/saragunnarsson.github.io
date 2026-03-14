import type { ResponsivePictureData } from "@/app/components/ResponsiveImage";

// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgEllipse91 from "@assets/f190729710350942f45495e70546aa20a9a3f642.png?w=80;160&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgShoppingCart from "@assets/5519c15cc95377e7fff7a20027380824f59f1c3d.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgSelectCurrency from "@assets/845190d0b4c9bc9ca1e0f4ced39d1b35eca2222d.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgPaymentInterface from "@assets/ef6cd9620de627a4d78d3ff8a1839b6a30b9ed2c.png?w=340;680&format=avif;webp;png&as=picture";
// @ts-expect-error Vite resolves imagetools asset queries at build time.
import imgConfirmation from "@assets/b339026a24c43ae435aae63392ae94079258e4c7.png?w=340;680&format=avif;webp;png&as=picture";

export const mobileCryptoCheckoutImages = {
  avatar: imgEllipse91 as ResponsivePictureData,
  shoppingCart: imgShoppingCart as ResponsivePictureData,
  selectCurrency: imgSelectCurrency as ResponsivePictureData,
  paymentInterface: imgPaymentInterface as ResponsivePictureData,
  confirmation: imgConfirmation as ResponsivePictureData,
};
