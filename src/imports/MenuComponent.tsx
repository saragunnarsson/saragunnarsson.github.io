function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex font-['SF_Pro:Regular',sans-serif] font-normal h-[111.61px] items-center justify-between leading-[0] left-1/2 px-[42px] py-[28px] rounded-[200px] text-[42.559px] text-center text-white top-0 tracking-[-1.0765px] w-[379.435px] whitespace-nowrap" data-name="Frame">
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[55.077px]">􀰚</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[55.077px]">􀈕</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[55.077px]">􀈑</p>
      </div>
    </div>
  );
}

export default function MenuComponent() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[100px] size-full" data-name="Menu component">
      <Frame />
    </div>
  );
}