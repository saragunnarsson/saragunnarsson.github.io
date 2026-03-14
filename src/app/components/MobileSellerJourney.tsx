import { ResponsiveImage } from "@/app/components/ResponsiveImage";
import { mobileSellerJourneyImages } from "@/app/components/mobileSellerJourneyImages";

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

export function MobileSellerJourney() {
  return (
    <div
      className="flex flex-col items-center px-[24px] py-[40px]"
      style={{
        backgroundImage: "linear-gradient(156deg, #E7F3FF 0%, #F3E7FF 100%)",
      }}
    >
      {/* Title */}
      <h3 className="font-['Lexend_Deca'] font-bold text-[24px] leading-[32px] text-[#0a0a0a] text-center mb-[28px]">
        Seller Journey
      </h3>

      {/* Amanda intro */}
      <div className="flex flex-col items-center text-center">
        <ResponsiveImage
          image={mobileSellerJourneyImages.avatar}
          alt="Amanda"
          sizes="80px"
          className="w-[80px] h-[80px] rounded-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <p className="font-['Inter'] font-semibold text-[18px] leading-[24px] text-black mt-[16px] max-w-[240px]">
          Amanda is selling her car with Autozen
        </p>
      </div>

      <DownArrow />

      {/* Step 1: Estimate */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          Amanda begins with a transparent market estimate, establishing clarity
          and confidence before moving forward.
        </StepDescription>
        <ResponsiveImage
          image={mobileSellerJourneyImages.estimate}
          alt="Autozen estimate screen showing 2017 Honda Civic with estimated value range of $31,000 - $33,000"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="eager"
        />
      </div>

      <DownArrow />

      {/* Step 2: Confirm Appointment */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          With expectations set, she books her vehicle pickup to initiate the
          selling process.
        </StepDescription>
        <ResponsiveImage
          image={mobileSellerJourneyImages.confirm}
          alt="Confirm Appointment screen showing Step 3/3 with date March 23, 2022 and location details"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>

      <DownArrow />

      {/* Step 3: Looking for buyer */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          Autozen activates its dealer network, creating competitive pressure to
          maximize value.
        </StepDescription>
        <ResponsiveImage
          image={mobileSellerJourneyImages.buyer}
          alt="Looking for a buyer screen with stop showing vehicle option"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>

      <DownArrow />

      {/* Step 4: Your offer */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          She receives the strongest offer from the auction and retains full
          control over the final decision.
        </StepDescription>
        <ResponsiveImage
          image={mobileSellerJourneyImages.offer}
          alt="Your offer screen showing $31,300 with accept and reject options"
          sizes="(max-width: 388px) calc(100vw - 48px), 340px"
          className="w-full rounded-[12px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
