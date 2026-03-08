import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgInvoicesList from "@assets/4e61a37dc6df489bb2855e6f2664021adb84c291.png";
import imgRecurringSeries from "@assets/da8d318aa15816a8337fc94481826106a187b959.png";
import imgRecurringInvoice from "@assets/d932143eaea2ef56a7a3d4f69717cb95276d3116.png";

export function MobileRecurringInvoices() {
  return (
    <div className="w-full px-[24px] sm:px-[40px] pt-[90px] pb-[40px]">
      {/* Title */}
      <div className="max-w-[600px] mx-auto mb-[40px] text-center">
        <h2
          className="text-[#0a0a0a] text-[26px] leading-[34px] sm:text-[30px] sm:leading-[40px] mb-[12px]"
          style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: 700 }}
        >
          Recurring Billing Series & Invoices
        </h2>
        <p className="text-black text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px]">
          A structured redesign of the recurring billing workflow, improving
          clarity, hierarchy, and merchant control.
        </p>
      </div>

      {/* Screens */}
      <div className="flex flex-col items-center gap-[32px] max-w-[320px] mx-auto">
        {/* Screen 1: Invoices List */}
        <div className="w-full rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <ImageWithFallback
            src={imgInvoicesList}
            alt="Invoices list view"
            className="w-full h-auto"
          />
        </div>

        {/* Screen 2: Recurring Series */}
        <div className="w-full rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <ImageWithFallback
            src={imgRecurringSeries}
            alt="Recurring series detail view"
            className="w-full h-auto"
          />
        </div>

        {/* Screen 3: Recurring Invoice */}
        <div className="w-full rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <ImageWithFallback
            src={imgRecurringInvoice}
            alt="Recurring invoice detail view"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
