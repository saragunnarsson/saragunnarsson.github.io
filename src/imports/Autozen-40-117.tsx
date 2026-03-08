import clsx from "clsx";
import svgPaths from "./svg-brtw5efk3s";
import imgImage7 from "figma:asset/a45a90b46f1a72f3d69feb9f0b27c0e3488eddc0.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative rounded-[40px] shadow-[0px_0px_16.44px_0px_rgba(21,20,72,0.08)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[60px] py-[50px] relative w-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className={clsx("bg-[rgba(255,255,255,0.5)] content-stretch flex gap-[5px] items-center justify-center pl-[15px] py-[12px] relative rounded-[10px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]" data-name="icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3 12.025">
            <path d={svgPaths.p23b3580} fill="var(--fill-0, #272A35)" id="icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] text-center">{text}</p>
    </div>
  );
}

export default function Autozen() {
  return (
    <div className="bg-[#fafbff] relative size-full" data-name="Autozen">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[861px] items-start left-[calc(50%+0.5px)] pb-[200px] pt-[180px] px-[360px] rounded-[54px] top-[9px] w-[1951px]" data-name="Section" style={{ backgroundImage: "linear-gradient(156.188deg, rgb(231, 243, 255) 0%, rgb(243, 231, 255) 100%)" }}>
        <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative rounded-[50px]" data-name="Container">
            <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
              <div className="bg-[#f4f4ff] relative rounded-[10px] shrink-0" data-name="Badges">
                <div aria-hidden="true" className="absolute border border-[#3a3de8] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[11px] py-[4px] relative">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0c0faf] text-[13px]">{`Marketplace Funnel Optimization & Product Strategy`}</p>
                  </div>
                </div>
              </div>
              <p className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[77px] min-w-full relative shrink-0 text-[#0a0a0a] text-[65px] w-[min-content] whitespace-pre-wrap">Autozen</p>
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] min-w-full not-italic relative shrink-0 text-[20px] text-black w-[min-content] whitespace-pre-wrap">Autozen is a digital marketplace designed to simplify the process of selling a used vehicle.</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[20px] text-black w-[706px] whitespace-pre-wrap">Skandi led a strategic evaluation of the full seller onboarding funnel — identifying friction points, analyzing drop-off behaviour, and systematically refining the experience to strengthen conversion and trust.</p>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-[31px]" data-name="workspace_premium">
                <div className="absolute inset-[6.25%_16.67%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6667 27.125">
                    <path d={svgPaths.pe9fb00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[17px] text-black">{`Winner of Vancouver UX Award for Best Retail Experience -  2023 `}</p>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-[16px] items-center pb-[13px] pt-[115px] relative shrink-0 w-[443px]">
            <ContainerBackgroundImageAndText text="UX Audit" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="Funnel Evaluation" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="Product Strategy" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="UX Architecture" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="UX/UI Design" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="Design System Upgrade" additionalClassNames="pr-[24px]" />
            <ContainerBackgroundImageAndText text="Cross-Functional Collaboration" additionalClassNames="pr-[25px]" />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex h-[80px] items-center justify-between left-1/2 px-[37px] top-[29px] w-[1440px]" data-name="Container">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#0a0a0a] text-[35px]">Skandi.io</p>
        <div className="h-[44px] relative shrink-0 w-[265.773px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
            <div className="h-[44px] relative shrink-0 w-[265.773px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
                <div className="h-[24px] relative shrink-0 w-[39.602px]" data-name="Link">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px]">Work</p>
                  </div>
                </div>
                <div className="bg-[#232034] relative rounded-[16777200px] shrink-0" data-name="Link">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[41px] py-[16px] relative">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mail">
                      <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                          <path d={svgPaths.pb499780} fill="var(--fill-0, white)" id="icon" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Let’s Talk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[345px] top-[707px] w-[1200px]">
        <BackgroundImage>
          <p className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#0a0a0a] text-[33px] w-[765px] whitespace-pre-wrap">The Context</p>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-[701px]">
            <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[27.646px] min-h-px min-w-px not-italic relative text-[17.013px] text-black whitespace-pre-wrap">
              <p className="mb-[10px]">As Autozen prepared to scale, early onboarding data revealed significant drop-off across key stages of the seller journey.</p>
              <p>The MVP required deeper structural refinement — not just interface adjustments — to improve clarity, confidence, and completion rates.</p>
            </div>
          </div>
        </BackgroundImage>
        <div className="bg-white relative rounded-[40px] shadow-[0px_0px_16.44px_0px_rgba(21,20,72,0.08)] shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[60px] py-[50px] relative w-full">
            <p className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#0a0a0a] text-[33px] w-[765px] whitespace-pre-wrap">The Approach</p>
            <div className="content-stretch flex items-start relative shrink-0 w-[667px]">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[43px] items-center justify-center min-h-px min-w-px relative">
                <ul className="block font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc not-italic relative shrink-0 text-[17.013px] text-black w-full whitespace-pre-wrap">
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Audited the full end-to-end seller onboarding funnel</span>
                  </li>
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Identified major drop-off points and friction areas</span>
                  </li>
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Restructured onboarding flows to reduce cognitive load</span>
                  </li>
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Clarified decision stages and strengthened user guidance</span>
                  </li>
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Improved hierarchy and interaction patterns across the MVP</span>
                  </li>
                  <li className="mb-[10px] ms-[25.5195px]">
                    <span className="leading-[27.646px]">Collaborated closely with product and engineering to implement iterative improvements</span>
                  </li>
                  <li className="ms-[25.5195px]">
                    <span className="leading-[27.646px]">Rather than isolated fixes, each improvement supported a broader restructuring of the seller experience.</span>
                  </li>
                </ul>
                <div className="bg-[#f6f4ff] relative rounded-[10px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-2 border-[#d7cbe6] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center px-[25px] py-[20px] relative w-full">
                      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[0px] text-[17px] text-black whitespace-pre-wrap">
                        <span className="leading-[27px]">{`Rather than isolated fixes, `}</span>
                        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[27px]">each improvement supported a broader restructuring of the seller experience.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white h-[99.234px] left-[842px] rounded-[25.169px] top-[327px] w-[357.56px]" />
            <div className="absolute content-stretch flex flex-col items-center left-[849.25px] shadow-[0px_0px_15.068px_0px_rgba(21,20,72,0.08)] top-[-182px]">
              <div className="h-[466.507px] relative rounded-[54.066px] shrink-0 w-[485.599px]" data-name="image 7">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[54.066px]">
                  <img alt="" className="absolute h-[116.52%] left-[-26.05%] max-w-none top-[-5.51%] w-[154.18%]" src={imgImage7} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundImage>
          <p className="font-['Lexend_Deca:Bold',sans-serif] font-bold leading-[42px] relative shrink-0 text-[#0a0a0a] text-[33px] w-[765px] whitespace-pre-wrap">The Outcome</p>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
            <ul className="block flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] list-disc min-h-px min-w-px not-italic relative text-[17.013px] text-black whitespace-pre-wrap">
              <li className="mb-[10px] ms-[25.5195px]">
                <span className="leading-[27.646px]">Reduced friction across key onboarding stages</span>
              </li>
              <li className="mb-[10px] ms-[25.5195px]">
                <span className="leading-[27.646px]">Stronger flow continuity from valuation to transaction</span>
              </li>
              <li className="mb-[10px] ms-[25.5195px]">
                <span className="leading-[27.646px]">A more cohesive and scalable MVP</span>
              </li>
              <li className="ms-[25.5195px]">
                <span className="leading-[27.646px]">Improved alignment between user behaviour and business goals</span>
              </li>
            </ul>
          </div>
        </BackgroundImage>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#232034] bottom-0 content-stretch flex flex-col h-[508px] items-center justify-center left-[calc(50%-1.5px)] p-[80px] w-[2003px]" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e9f2ff] border-solid border-t-11 inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[55px] items-center relative shrink-0 w-full" data-name="Container">
          <div className="font-['Inter:Bold',sans-serif] font-bold leading-[47px] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
            <p className="mb-0 text-[37px]">Have something in mind?</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[27px]">Let’s talk.</p>
          </div>
          <div className="content-stretch flex gap-[55px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[27px]" data-name="mail">
                <div className="absolute inset-[16.67%_8.33%]" data-name="icon">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 18">
                    <path d={svgPaths.p275a9980} fill="var(--fill-0, white)" id="icon" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[23px] text-center text-white">sara@skandi.io</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <BackgroundImage1>
                <g id="phone">
                  <path d={svgPaths.p375d9e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage1>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[23px] text-center text-white">778 223 0420</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <BackgroundImage1>
                <g id="linkedin">
                  <path d={svgPaths.p30958080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 9H2V21H6V9Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1bb3a100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </BackgroundImage1>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[23px] text-center text-white">linkedin.com/in/saragunnarsson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}