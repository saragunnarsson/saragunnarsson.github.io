import imgEllipse91 from "figma:asset/90008e966066e71cd3d854476de63f4bd5a3c713.png";
import imgImage144 from "figma:asset/fe69bcc173270ef38c4afac121d0ff1f1dcbecad.png";
import imgEstimateScreen from "figma:asset/9cdd76a6cbf24fad48fddef9449cf93b451887cc.png";
import imgConfirmScreen from "figma:asset/ab8605fa58d4c481a011eea6d0eb68f0147d3cba.png";
import imgBuyerScreen from "figma:asset/cc628af6983107aa1d4f8d1bd64887146e047949.png";
import imgOfferScreen from "figma:asset/6285d119e74d5a989d2277ac0fead859edf77f52.png";
import { ChevronDown } from "lucide-react";

function DownArrow() {
  return (
    <div className="flex justify-center py-[6px]">
      <div className="flex flex-col items-center">
        <div className="w-[2px] h-[24px] bg-black" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="-mt-[1px]">
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
    <div className="flex flex-col items-center px-[24px] py-[40px]" style={{ backgroundImage: "linear-gradient(156deg, #E7F3FF 0%, #F3E7FF 100%)" }}>
      {/* Title */}
      <h3 className="font-['Lexend_Deca'] font-bold text-[24px] leading-[32px] text-[#0a0a0a] text-center mb-[28px]">
        Seller Journey
      </h3>

      {/* Amanda intro */}
      <div className="flex flex-col items-center text-center">
        <img
          src={imgEllipse91}
          alt="Amanda"
          className="w-[80px] h-[80px] rounded-full object-cover"
        />
        <p className="font-['Inter'] font-semibold text-[18px] leading-[24px] text-black mt-[16px] max-w-[240px]">
          Amanda is selling her car with Autozen
        </p>
      </div>

      <DownArrow />

      {/* Step 1: Estimate */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          Amanda begins with a transparent market estimate, establishing clarity and confidence before moving forward.
        </StepDescription>
        <img
          src={imgEstimateScreen}
          alt="Autozen estimate screen showing 2017 Honda Civic with estimated value range of $31,000 - $33,000"
          className="w-full rounded-[12px]"
        />
      </div>

      <DownArrow />

      {/* Step 2: Confirm Appointment */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          With expectations set, she books her vehicle pickup to initiate the selling process.
        </StepDescription>
        <img
          src={imgConfirmScreen}
          alt="Confirm Appointment screen showing Step 3/3 with date March 23, 2022 and location details"
          className="w-full rounded-[12px]"
        />
      </div>

      <DownArrow />

      {/* Step 3: Looking for buyer */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          Autozen activates its dealer network, creating competitive pressure to maximize value.
        </StepDescription>
        <img
          src={imgBuyerScreen}
          alt="Looking for a buyer screen with stop showing vehicle option"
          className="w-full rounded-[12px]"
        />
      </div>

      <DownArrow />

      {/* Step 4: Your offer */}
      <div className="w-full max-w-[340px] pt-[10px]">
        <StepDescription>
          She receives the strongest offer from the auction and retains full control over the final decision.
        </StepDescription>
        <img
          src={imgOfferScreen}
          alt="Your offer screen showing $31,300 with accept and reject options"
          className="w-full rounded-[12px]"
        />
      </div>
    </div>
  );
}