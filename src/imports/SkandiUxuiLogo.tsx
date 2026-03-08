function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[2px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-none min-h-px min-w-px relative text-[#2f1658] text-[13px] whitespace-pre-wrap">UX/UI Design</p>
        </div>
      </div>
    </div>
  );
}

export default function SkandiUxuiLogo() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] items-start relative size-full" data-name="skandi-uxui-logo">
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#2f1658] text-[35px] w-full whitespace-pre-wrap">Skandi</p>
      <Frame />
    </div>
  );
}