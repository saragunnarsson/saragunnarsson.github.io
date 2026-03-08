import svgPaths from "./svg-8351tnyafa";

function Container() {
  return (
    <div className="absolute content-stretch flex items-start left-[53px] px-[20px] py-[10px] rounded-[18px] top-[35px]" data-name="Container" style={{ backgroundImage: "linear-gradient(176.372deg, rgb(250, 245, 255) 7.5329%, rgb(253, 242, 248) 50%, rgb(255, 247, 237) 92.467%)" }}>
      <p className="font-['Lexend_Deca:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[18px] text-black">Intentional design</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59px] px-[20px] py-[10px] rounded-[18px] top-[187.34px]" data-name="Container" style={{ backgroundImage: "linear-gradient(177.665deg, rgb(250, 245, 255) 6.6667%, rgb(253, 242, 248) 50%, rgb(255, 247, 237) 93.333%)" }}>
      <p className="font-['Lexend_Deca:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[18px] text-black">Collaborative execution</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-start left-[88px] px-[20px] py-[10px] rounded-[18px] top-[110px]" data-name="Container" style={{ backgroundImage: "linear-gradient(176.278deg, rgb(250, 245, 255) 7.5547%, rgb(253, 242, 248) 50%, rgb(255, 247, 237) 92.445%)" }}>
      <p className="font-['Lexend_Deca:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[18px] text-black">Strategic thinking</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[89px] px-[25px] py-[15px] rounded-[18px] top-[260.34px] w-[231px]" data-name="Container" style={{ backgroundImage: "linear-gradient(168.003deg, rgb(250, 245, 255) 7.7206%, rgb(253, 242, 248) 50%, rgb(255, 247, 237) 92.279%)" }}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[15px] text-black w-full whitespace-pre-wrap">Working directly with decision-makers, we reduce noise, define priorities, and design solutions that move projects forward efficiently.</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute h-[231.349px] left-[22px] top-[57px] w-[52.192px]">
        <div className="absolute inset-[-1.15%_-5.11%_-1.15%_-0.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.3585 236.682">
            <path d={svgPaths.p87afd80} fill="var(--stroke-0, black)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}