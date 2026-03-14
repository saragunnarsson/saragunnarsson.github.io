import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import { mobileCryptoCheckoutImages } from "@/app/components/mobileCryptoCheckoutImages";

function DownArrow() {
  return (
    <div className="flex justify-center py-[6px]">
      <div className="flex flex-col items-center">
        <div className="w-[2px] h-[24px] bg-black" />
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className="-mt-[1px]"
        >
          <path d="M6 8L0 0H12L6 8Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}

function StepDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Inter'] font-medium text-[13px] leading-[20px] text-black mb-[12px] text-center">
      {children}
    </p>
  );
}

export function MobileCryptoCheckout() {
  return (
    <div
      className="flex flex-col items-center px-[24px] pt-[90px] pb-[40px]"
      style={{
        backgroundImage: "linear-gradient(156deg, #E7F3FF 0%, #F3E7FF 100%)",
      }}
    >
      {/* Title */}
      <h3 className="font-['Lexend_Deca'] font-bold text-[24px] leading-[32px] text-[#0a0a0a] text-center mb-[28px]">
        Crypto Checkout Experience
      </h3>

      {/* Josh intro */}
      <div className="flex flex-col items-center text-center">
        <ResponsiveImage
          image={mobileCryptoCheckoutImages.avatar}
          alt="Josh"
          sizes="80px"
          className="w-[80px] h-[80px] rounded-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <p className="font-['Inter'] font-semibold text-[18px] leading-[24px] text-black mt-[16px] max-w-[260px]">
          Josh is buying a watch and wants to pay with cryptocurrency
        </p>
      </div>

      <DownArrow />

      {/* Step 1: Shopping Cart */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          At checkout, Josh selects cryptocurrency as his preferred payment
          method.
        </StepDescription>
        <ResponsiveImage
          image={mobileCryptoCheckoutImages.shoppingCart}
          alt="Watches.com shopping cart with Pay with Credit Card and Pay with Cryptocurrency buttons"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="eager"
        />
      </div>

      <DownArrow />

      {/* Step 2: Select Currency */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          A secure redirect to NetCents presents supported currencies, allowing
          him to select Ethereum.
        </StepDescription>
        <ResponsiveImage
          image={mobileCryptoCheckoutImages.selectCurrency}
          alt="NetCents currency selection screen showing Bitcoin, Ethereum, Litecoin, Verge, Bitcoin Cash, and Netcents wallet options"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>

      <DownArrow />

      {/* Step 3: Payment Interface */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          A structured payment interface simplifies wallet connection and guides
          completion.
        </StepDescription>
        <ResponsiveImage
          image={mobileCryptoCheckoutImages.paymentInterface}
          alt="NetCents payment interface showing QR code, Ethereum amount, and countdown timer"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>

      <DownArrow />

      {/* Step 4: Confirmation */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          A clear confirmation state reinforces trust before returning Josh to
          the checkout flow.
        </StepDescription>
        <ResponsiveImage
          image={mobileCryptoCheckoutImages.confirmation}
          alt="Thank You For Your Payment confirmation screen with checkmark"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
