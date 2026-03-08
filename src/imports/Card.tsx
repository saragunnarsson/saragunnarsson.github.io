import svgPaths from "./svg-fja516hzyv";
import imgImage7 from "@assets/a45a90b46f1a72f3d69feb9f0b27c0e3488eddc0.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.013px]" data-name="Icon">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 17.013 17.013"
      >
        <g id="Icon">
          <path
            d="M3.54434 8.50669H13.4686"
            id="Vector"
            stroke="var(--stroke-0, #070AC7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.41775"
          />
          <path
            d={svgPaths.pe1d8a30}
            id="Vector_2"
            stroke="var(--stroke-0, #070AC7)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.41775"
          />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex gap-[6.805px] items-center relative shrink-0"
      data-name="Container"
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20.416px] not-italic relative shrink-0 text-[#070ac7] text-[13.61px]">
        View Project
      </p>
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] min-w-full not-italic relative shrink-0 text-[#464c55] text-[14px] w-[min-content] whitespace-pre-wrap">
        Evaluated and restructured the full seller onboarding funnel, reducing
        friction and strengthening conversion across a high-growth digital
        marketplace.
      </p>
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col gap-[11.42px] items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="bg-[#f4f4ff] relative rounded-[10px] shrink-0 w-full"
        data-name="Badges"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#3a3de8] border-[0.851px] border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[9px] py-[3px] relative w-full">
            <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[13.61px] min-h-px min-w-px not-italic relative text-[#0c0faf] text-[9.36px] whitespace-pre-wrap">{`Marketplace Funnel Optimization & Product Strategy`}</p>
          </div>
        </div>
      </div>
      <p className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[35px] relative shrink-0 text-[#0a0a0a] text-[25px] w-full whitespace-pre-wrap">
        Autozen
      </p>
      <Frame />
    </div>
  );
}

export default function Card() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[30px] items-start justify-center px-[17px] py-[30px] relative rounded-[20px] shadow-[0px_0px_13.985px_0px_rgba(21,20,72,0.08)] size-full"
      data-name="card"
    >
      <Container />
      <div
        className="aspect-[290/232] relative rounded-[25.52px] shrink-0 w-full"
        data-name="image 7"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25.52px]">
          <img
            alt=""
            className="absolute h-[116.52%] left-[-21.65%] max-w-none top-[-5.48%] w-[128.13%]"
            src={imgImage7}
          />
        </div>
      </div>
    </div>
  );
}
