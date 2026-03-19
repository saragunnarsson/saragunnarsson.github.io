import { ImageWithFallback } from "./figma/ImageWithFallback";
import { mobileRecurringInvoicesImages } from "./mobileRecurringInvoicesImages";

export function MobileRecurringInvoices() {
  return (
    <div className="w-full px-[24px] sm:px-[40px] pt-[90px] pb-[40px]">
      {/* Title */}
      <div className="max-w-[600px] mx-auto mb-[40px] text-left">
        <h2 className="font-lexend-deca font-bold text-[#0a0a0a] text-[26px] leading-[34px] sm:text-[30px] sm:leading-[40px] mb-[12px]">
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
            src={mobileRecurringInvoicesImages.invoicesList}
            alt="Invoices list view"
            className="w-full h-auto"
            sizes="(max-width: 368px) calc(100vw - 48px), 320px"
            loading="eager"
          />
        </div>

        {/* Screen 2: Recurring Series */}
        <div className="w-full rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <ImageWithFallback
            src={mobileRecurringInvoicesImages.recurringSeries}
            alt="Recurring series detail view"
            className="w-full h-auto"
            sizes="(max-width: 368px) calc(100vw - 48px), 320px"
            loading="lazy"
          />
        </div>

        {/* Screen 3: Recurring Invoice */}
        <div className="w-full rounded-[16px] shadow-[0px_2px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-white">
          <ImageWithFallback
            src={mobileRecurringInvoicesImages.recurringInvoice}
            alt="Recurring invoice detail view"
            className="w-full h-auto"
            sizes="(max-width: 368px) calc(100vw - 48px), 320px"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
