import clsx from "clsx";
import svgPaths from "./svg-h83xvxr80i";
import { frame1406Images } from "./frame1406Images";
type Frame1296Helper1Props = {
  additionalClassNames?: string;
};

function Frame1296Helper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Frame1296Helper1Props>) {
  return (
    <div
      style={
        {
          "--transform-inner-width": "1200",
          "--transform-inner-height": "19",
        } as React.CSSProperties
      }
      className={clsx(
        "absolute flex h-[18.614px] items-center justify-center top-[54.2px]",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div
      style={{ fontVariationSettings: "'wdth' 100" }}
      className={clsx(
        "flex flex-col justify-center leading-[0] relative shrink-0 text-[9.93px] text-center whitespace-nowrap",
        additionalClassNames,
      )}
    >
      <p className="leading-[1.5]">{children}</p>
    </div>
  );
}
type Frame1296HelperProps = {
  additionalClassNames?: string;
};

function Frame1296Helper({ additionalClassNames = "" }: Frame1296HelperProps) {
  return (
    <div
      className={clsx(
        "absolute h-[24.636px] top-[50.91px] w-0",
        additionalClassNames,
      )}
    >
      <div className="absolute inset-[-2.22%_-0.55px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1.09494 25.731"
        >
          <path
            d={svgPaths.p3dd69000}
            id="Vector 57"
            stroke="var(--stroke-0, #350E70)"
            strokeLinecap="square"
            strokeWidth="1.09494"
          />
        </svg>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13.687px] py-[5.475px] relative w-full">
          <p
            className="font-['Archivo:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#350e70] text-[7.665px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <p className="absolute font-['Lexend_Deca:Bold',sans-serif] md:leading-[58px] lg:leading-[56px] xl:leading-[48px] left-[175px] text-[#0a0a0a] md:text-[45px] lg:text-[44px] xl:text-[38px] top-[122px] whitespace-nowrap font-[Lexend_Deca] font-bold">
        Seller Journey
      </p>
      <div className="absolute bg-white content-stretch flex flex-col gap-[15.329px] items-center left-[647px] pb-[27.373px] pt-[21.899px] px-[21.899px] rounded-[10.949px] shadow-[0px_0px_13.687px_0px_rgba(40,11,107,0.16)] top-0 w-[346px]">
        <div className="bg-[#faf9fb] relative rounded-[6.57px] shrink-0 w-full">
          <div
            aria-hidden="true"
            className="absolute border-[#ebe6fa] border-[0.547px] border-solid inset-0 pointer-events-none rounded-[6.57px]"
          />
          <div className="content-stretch flex flex-col items-start pl-[3.832px] pr-[10.949px] py-[3.832px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative rounded-tl-[10.949px] rounded-tr-[10.949px] shrink-0 w-full">
              <div className="content-stretch flex h-[22.446px] items-start relative shrink-0 w-full">
                <div className="bg-[#6b2dfb] content-stretch flex h-full items-center justify-center px-[13.687px] py-[5.475px] relative rounded-[4.38px] shrink-0 w-[70.623px]">
                  <p
                    className="font-['Archivo:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#f4f4fc] text-[7.665px]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Estimate
                  </p>
                </div>
                <Text text="How it compares" />
                <Text text="Accessories and options" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[3.285px] items-start relative rounded-[6.57px] shrink-0 text-[#2a156b] w-full whitespace-pre-wrap">
          <p
            className="font-['Archivo:Bold',sans-serif] font-bold leading-[14.782px] relative shrink-0 text-[12.044px] w-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            2017 Honda - Civic
          </p>
          <div className="font-['Mulish:Regular',sans-serif] font-normal h-[13.139px] leading-[13.139px] relative shrink-0 text-[8.759px] w-full">
            <p className="mb-[10.949366569519043px]">{`2.5i Touring w/Tech 4D Utility   |    123,000km `}</p>
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="bg-[#faf9fb] content-stretch flex flex-col gap-[18.614px] items-start p-[16.424px] relative rounded-[5.475px] shrink-0 w-[301.108px]">
            <div
              aria-hidden="true"
              className="absolute border-[#e6e6ef] border-[0.547px] border-solid inset-0 pointer-events-none rounded-[5.475px]"
            />
            <div className="content-stretch flex flex-col gap-[2.19px] items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p
                  className="font-['Archivo:Bold',sans-serif] font-bold leading-[16.424px] relative shrink-0 text-[#2a156b] text-[12.044px] w-[268.259px] whitespace-pre-wrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >{`Autozen's estimated value range for your car`}</p>
              </div>
              <p className="font-['Mulish:Regular',sans-serif] font-normal leading-[12.592px] relative shrink-0 text-[#2a156b] text-[8.212px] w-[268.259px] whitespace-pre-wrap">{`The range below is an initial estimate, Autozen creates competition amongst 100's of buyers which helps get you a firm offer. This results in a higher price than the alternatives, without the hassle. `}</p>
            </div>
            <div className="h-[104.019px] relative shrink-0 w-full">
              <div className="absolute bg-[#c6c6d8] h-[18.614px] left-[1.64px] rounded-[3.285px] top-[54.2px] w-[257.31px]" />
              <div
                className="absolute flex h-[31.753px] items-center justify-center left-[251.29px] top-[47.63px] w-[16.972px]"
                style={
                  {
                    "--transform-inner-width": "1200",
                    "--transform-inner-height": "19",
                  } as React.CSSProperties
                }
              >
                <div className="flex-none rotate-90">
                  <div className="h-[16.972px] relative w-[31.753px]">
                    <div className="absolute bottom-1/4 left-[9.37%] right-[9.37%] top-[1.17%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 25.8017 12.5301"
                      >
                        <path
                          d={svgPaths.p917ec00}
                          fill="var(--fill-0, #C6C6D8)"
                          id="Polygon 9"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[19.709px] left-[54.75px] text-[#350e70] text-[17.519px] top-[79.38px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >{`$31,000 `}</p>
              <p
                className="absolute font-['Archivo:Bold',sans-serif] font-bold h-[16.424px] leading-[16.424px] left-[208.04px] text-[#706f85] text-[12.044px] top-[79.38px] w-[50.915px] whitespace-pre-wrap"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                $33,000
              </p>
              <div className="absolute bg-[#6b2dfb] h-[18.614px] left-[87.59px] top-[54.2px] w-[143.437px]" />
              <div className="absolute h-[6.57px] left-[37.23px] top-[56.93px] w-[27.373px]">
                <div className="absolute inset-[-41.65%_0_-141.69%_-32%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 36.133 18.6139"
                  >
                    <g id="Frame 1281">
                      <rect
                        fill="var(--fill-0, #9696A9)"
                        height="18.6139"
                        id="Rectangle 269"
                        width="27.3734"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute h-[33.396px] left-[-8.76px] top-[18.06px] w-[81.573px]">
                <div
                  className="absolute h-[32.847px] left-[0.55px] top-[0.01px] w-[77.74px]"
                  data-name="Union"
                >
                  <div className="absolute inset-[-10.83%_-10.92%_-24.59%_-3.87%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 89.2371 44.4815"
                    >
                      <g filter="url(#filter0_d_66_713)" id="Union">
                        <path
                          d={svgPaths.p38b2d000}
                          fill="var(--fill-0, white)"
                        />
                        <path
                          d={svgPaths.pfda3880}
                          fill="var(--stroke-0, #E6E6EF)"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="44.4815"
                          id="filter0_d_66_713"
                          width="89.2371"
                          x="-5.96046e-08"
                          y="-5.96046e-08"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="2.73734" dy="2.18987" />
                          <feGaussianBlur stdDeviation="2.73734" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="effect1_dropShadow_66_713"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_66_713"
                            mode="normal"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p
                  className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[10.402px] left-[4.38px] text-[#3b3b4e] text-[7.665px] top-[4.38px] w-[75.003px] whitespace-pre-wrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {`Typical dealership `}
                  <br aria-hidden="true" />
                  or online cash offer
                </p>
              </div>
              <p className="absolute bottom-[46.54px] font-['Mulish:Bold',sans-serif] font-bold leading-[11.46px] left-[112.78px] text-[8.212px] text-white translate-y-full">
                Autozen estimated range
              </p>
              <div
                className="absolute flex h-[3.832px] items-center justify-center left-[88.14px] top-[42.7px] w-[71.718px]"
                style={
                  {
                    "--transform-inner-width": "1200",
                    "--transform-inner-height": "19",
                  } as React.CSSProperties
                }
              >
                <div className="-rotate-90 -scale-y-100 flex-none">
                  <div className="h-[71.718px] relative w-[3.832px]">
                    <div className="absolute inset-[-1.53%_-28.57%_-1.53%_0]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 4.92721 73.9082"
                      >
                        <path
                          d={svgPaths.p13fa800}
                          id="Vector 61"
                          stroke="var(--stroke-0, #FF9263)"
                          strokeWidth="2.18987"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <Frame1296Helper1 additionalClassNames="left-[226.65px] w-[14.234px]">
                <div className="flex-none rotate-90">
                  <div className="h-[14.234px] relative w-[18.614px]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 18.6139 14.2342"
                    >
                      <path
                        d={svgPaths.p920fb80}
                        fill="url(#paint0_linear_66_689)"
                        id="Rectangle 273"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_66_689"
                          x1="9.30696"
                          x2="9.30696"
                          y1="0"
                          y2="14.2342"
                        >
                          <stop
                            offset="0.0520833"
                            stopColor="#AD8AFE"
                            stopOpacity="0"
                          />
                          <stop offset="0.890625" stopColor="#6B2DFB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Frame1296Helper1>
              <Frame1296Helper1 additionalClassNames="left-[77.19px] w-[13.139px]">
                <div className="-rotate-90 flex-none">
                  <div className="h-[13.139px] relative w-[18.614px]">
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 18.6139 13.1392"
                    >
                      <path
                        d={svgPaths.p2810b500}
                        fill="url(#paint0_linear_66_703)"
                        id="Rectangle 274"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_66_703"
                          x1="9.30696"
                          x2="9.30696"
                          y1="0"
                          y2="13.1392"
                        >
                          <stop
                            offset="0.0520833"
                            stopColor="#AD8AFE"
                            stopOpacity="0"
                          />
                          <stop offset="0.890625" stopColor="#6B2DFB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </Frame1296Helper1>
              <div className="absolute h-[37.775px] left-[89.78px] top-[0.55px] w-[65.149px]">
                <div
                  className="absolute h-[37.229px] left-[0.55px] top-0 w-[64.602px]"
                  data-name="Union"
                >
                  <div className="absolute inset-[-9.56%_-13.14%_-21.65%_-4.66%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 76.0984 48.8464"
                    >
                      <g filter="url(#filter0_d_66_644)" id="Union">
                        <path
                          d={svgPaths.p3915c400}
                          fill="var(--fill-0, white)"
                        />
                        <path
                          d={svgPaths.p218e6400}
                          fill="var(--stroke-0, #350E70)"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="48.8464"
                          id="filter0_d_66_644"
                          width="76.0984"
                          x="-5.96046e-08"
                          y="-5.96046e-08"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="2.73734" dy="2.18987" />
                          <feGaussianBlur stdDeviation="2.73734" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="effect1_dropShadow_66_644"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_66_644"
                            mode="normal"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <p
                  className="absolute font-['Archivo:Bold',sans-serif] font-bold leading-[10.402px] left-[7.12px] text-[#350e70] text-[7.665px] top-[5.47px] w-[56.389px] whitespace-pre-wrap"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Most common Autozen offer
                </p>
              </div>
              <Frame1296Helper additionalClassNames="left-[230.48px]" />
              <Frame1296Helper additionalClassNames="left-[88.14px]" />
            </div>
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[1.095px] items-center relative rounded-[3.832px] shrink-0">
                <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[11.497px] relative shrink-0 text-[8.212px] text-black text-center">
                  Driven by
                </p>
                <div
                  className="h-[13.139px] relative shrink-0 w-[28.625px]"
                  data-name="image 144"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={frame1406Images.autozenBadge}
                  />
                </div>
              </div>
              <div className="content-stretch flex gap-[3.832px] items-center relative rounded-[5.475px] shrink-0">
                <div
                  className="relative shrink-0 size-[12.044px]"
                  data-name="help-circle"
                >
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 12.0443 12.0443"
                  >
                    <g id="help-circle">
                      <path
                        d={svgPaths.p31290b80}
                        id="Vector"
                        stroke="var(--stroke-0, #5D24DF)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.09494"
                      />
                      <path
                        d={svgPaths.p16747580}
                        id="Vector_2"
                        stroke="var(--stroke-0, #CA6639)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.09494"
                      />
                      <path
                        d="M6.0222 8.52903H6.02885"
                        id="Vector_3"
                        stroke="var(--stroke-0, #CA6639)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.09494"
                      />
                    </g>
                  </svg>
                </div>
                <p className="[text-decoration-skip-ink:none] decoration-solid font-['Mulish:Bold',sans-serif] font-bold leading-[11.497px] relative shrink-0 text-[#5d24df] text-[8.212px] underline">
                  How is this calculated?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[15.329px] h-[104.019px] items-center justify-end relative shrink-0">
          <div className="bg-[#f9ab88] content-stretch flex gap-[6.57px] h-[34.491px] items-center justify-center p-[5.475px] relative rounded-[54.747px] shrink-0 w-[193.804px]">
            <div
              className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#350e70] text-[9.307px] text-center whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p>
                <span className="leading-[1.5]">{`Sounds good, `}</span>
                <span
                  className="font-['Archivo:ExtraBold',sans-serif] font-extrabold leading-[1.5]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  let’s get started
                </span>
              </p>
            </div>
            <div className="h-0 relative shrink-0 w-[8.212px]">
              <div className="absolute inset-[-4.03px_-6.67%_-4.03px_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 8.75949 8.06307"
                >
                  <path
                    d={svgPaths.p39b9c900}
                    fill="var(--stroke-0, #350E70)"
                    id="Arrow 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col font-['Archivo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5d24df] text-[0px] text-center w-[138.509px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="text-[9.307px] whitespace-pre-wrap">
              <span
                className="font-['Archivo:Regular',sans-serif] font-normal leading-[14.234px] text-[#350e70]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Not ready yet?
              </span>
              <span
                className="font-['Archivo:Bold',sans-serif] font-bold leading-[14.234px] text-[#5d24df]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >{` `}</span>
              <span
                className="[text-decoration-skip-ink:none] decoration-solid font-['Archivo:Bold',sans-serif] font-bold leading-[14.234px] underline"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Save for later
              </span>
            </p>
          </div>
          <div className="content-stretch flex gap-[4.38px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[10.949px]" data-name="mail">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 10.9494 10.9494"
              >
                <g clipPath="url(#clip0_66_717)" id="mail">
                  <path
                    d={svgPaths.p2b6c480}
                    id="Vector"
                    stroke="var(--stroke-0, #5D24DF)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.09494"
                  />
                  <path
                    d={svgPaths.p29880e80}
                    id="Vector_2"
                    stroke="var(--stroke-0, #5D24DF)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.09494"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_66_717">
                    <rect fill="white" height="10.9494" width="10.9494" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              className="flex flex-col font-['Archivo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5d24df] text-[9.854px] text-center whitespace-nowrap"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              <p className="[text-decoration-skip-ink:none] decoration-solid leading-[13.139px] underline">
                Share estimate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[376.895px] left-[200px] top-[636px] w-[326px]">
        <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.572px] shadow-[0px_0px_16.663px_0px_rgba(40,11,107,0.16)] top-0">
          <div
            className="bg-[#f4f4fc] h-[39.463px] mb-[-0.572px] relative rounded-tl-[6.863px] rounded-tr-[6.863px] shrink-0 w-[326px]"
            data-name="STEPPER IN FRAME"
          >
            <div
              aria-hidden="true"
              className="absolute border-[#e6e6ef] border-[0.572px] border-solid inset-0 pointer-events-none rounded-tl-[6.863px] rounded-tr-[6.863px]"
            />
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center pb-[2.86px] px-[27.453px] relative size-full">
                <div
                  className="relative shrink-0 w-full"
                  data-name="on page stepper"
                >
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[3.432px] items-start justify-center relative w-full">
                      <p
                        className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[9.723px] relative shrink-0 text-[#350e70] text-[7.44px]"
                        style={{ fontVariationSettings: "'wdth' 100" }}
                      >
                        Step 3/3
                      </p>
                      <div className="content-stretch flex gap-[2.288px] items-start relative shrink-0 w-full">
                        <div className="bg-[#6b2dfb] flex-[1_0_0] h-[2.86px] min-h-px min-w-px rounded-bl-[2.86px] rounded-tl-[2.86px]" />
                        <div className="bg-[#6b2dfb] flex-[1_0_0] h-[2.86px] min-h-px min-w-px" />
                        <div className="bg-[#6b2dfb] flex-[1_0_0] h-[2.86px] min-h-px min-w-px rounded-br-[2.86px] rounded-tr-[2.86px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[18.302px] items-center mb-[-0.572px] pb-[36.604px] pt-[27.453px] px-[27.453px] relative rounded-bl-[6.863px] rounded-br-[6.863px] shrink-0 w-[326px]">
            <div
              aria-hidden="true"
              className="absolute border-[#e6e6ef] border-[0.572px] border-solid inset-0 pointer-events-none rounded-bl-[6.863px] rounded-br-[6.863px]"
            />
            <div className="content-stretch flex flex-col gap-[4.575px] items-start relative shrink-0 text-[#350e70] w-full whitespace-pre-wrap">
              <p
                className="font-['Archivo:Bold',sans-serif] font-bold leading-[12.582px] relative shrink-0 text-[9.723px] w-[211.042px]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Confirm Appointment
              </p>
              <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[12.011px] min-w-full relative shrink-0 text-[8.579px] w-[min-content]">{`Please confirm that the details for your appointment are correct.  You can change your appointment up to 4 hours before the scheduled time.`}</p>
            </div>
            <div className="content-stretch flex flex-col gap-[4.575px] items-start relative shrink-0">
              <div
                className="bg-[#faf9fb] relative rounded-[8px] shrink-0 w-[268.807px]"
                data-name="info-card/Frame 892"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[#e6e6ef] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[8px]"
                />
                <div className="content-stretch flex gap-[6.863px] items-start p-[8.579px] relative w-full">
                  <div
                    className="relative shrink-0 size-[13.726px]"
                    data-name="Icons/Information/Calendar"
                  >
                    <div
                      className="absolute inset-[8.33%_12.5%]"
                      data-name="calendar"
                    >
                      <div className="absolute inset-[-5%_-5.56%_-4.99%_-5.56%]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 11.4386 12.5825"
                        >
                          <g id="calendar">
                            <rect
                              height="10.2947"
                              id="Rectangle"
                              rx="1.14386"
                              stroke="var(--stroke-0, #6B2DFB)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.14386"
                              width="10.2947"
                              x="0.57193"
                              y="1.71579"
                            />
                            <path
                              d="M8.00702 0.57193V2.85965"
                              id="Path"
                              stroke="var(--stroke-0, #CA6639)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.14386"
                            />
                            <path
                              d="M3.43158 0.57193V2.85965"
                              id="Path_2"
                              stroke="var(--stroke-0, #CA6639)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.14386"
                            />
                            <path
                              d="M0.57193 5.14737H10.8667"
                              id="Path_3"
                              stroke="var(--stroke-0, #6B2DFB)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.14386"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.716px] items-start leading-[10.867px] min-h-px min-w-px relative whitespace-pre-wrap">
                    <p className="font-['Mulish:Bold',sans-serif] font-bold relative shrink-0 text-[#350e70] text-[8.58px] w-full">
                      March 23, 2022
                    </p>
                    <p className="font-['Mulish:Medium',sans-serif] font-medium relative shrink-0 text-[#535365] text-[8.01px] w-full">
                      4:00 PM - 4:40 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[268.807px]">
                <div className="bg-[#faf9fb] relative rounded-[4.575px] shrink-0 w-full">
                  <div
                    aria-hidden="true"
                    className="absolute border-[#e6e6ef] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[4.575px]"
                  />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center p-[8.579px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.716px] items-start min-h-px min-w-px relative">
                        <div className="content-stretch flex gap-[6.863px] items-center relative rounded-[4.575px] shrink-0 w-full">
                          <div
                            className="relative shrink-0 size-[13.726px]"
                            data-name="Icons/Information/Location"
                          >
                            <div
                              className="absolute inset-[12.5%_17.8%_12.5%_20.83%]"
                              data-name="map-pin"
                            >
                              <div className="absolute inset-[-5.56%_-6.79%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 9.56683 11.4386"
                                >
                                  <g id="map-pin">
                                    <path
                                      clipRule="evenodd"
                                      d={svgPaths.p19316d80}
                                      fillRule="evenodd"
                                      id="Path"
                                      stroke="var(--stroke-0, #6B2DFB)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.14386"
                                    />
                                    <path
                                      clipRule="evenodd"
                                      d={svgPaths.p3fde9b80}
                                      fillRule="evenodd"
                                      id="Oval"
                                      stroke="var(--stroke-0, #CA6639)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.14386"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="flex-[1_0_0] font-['Mulish:Bold',sans-serif] font-bold leading-[10.867px] min-h-px min-w-px relative text-[#350e70] text-[8.579px] whitespace-pre-wrap">
                            555 Street St, Vancouver, BC VXV XVX, Canada
                          </p>
                        </div>
                        <div className="content-stretch flex items-start px-[20.018px] relative rounded-[4.575px] shrink-0 w-[234.491px]">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                            <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#535365] text-[0px] text-[8.007px] w-full whitespace-pre-wrap">
                              <span className="font-['Mulish:Bold',sans-serif] font-bold leading-[11.439px]">
                                Special instructions
                              </span>
                              <span className="leading-[10.867px]">
                                : Go around the back to the basement suite, dont
                                mind the dog she’s friendly
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[271.095px]">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[18.302px] items-center pt-[18.302px] relative w-full">
                  <div
                    className="bg-[#ffac88] h-[32.6px] relative rounded-[1000px] shrink-0 w-[142.982px]"
                    data-name="Pill button"
                  >
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[17.158px] relative size-full">
                        <div
                          className="flex flex-col font-['Archivo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#350e70] text-[8.58px] text-center whitespace-nowrap"
                          style={{ fontVariationSettings: "'wdth' 100" }}
                        >
                          <p className="leading-[1.5]">Confirm pickup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Mulish:Bold',sans-serif] font-bold leading-[12.011px] relative shrink-0 text-[#5d24df] text-[8.579px] underline">
              Back
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[89.5px] left-[361px] top-[526.5px] w-[303px]">
        <div className="absolute inset-[0_-0.33%_-1.12%_-2.43%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 311.364 90.5"
          >
            <path
              d={svgPaths.pbf33d00}
              fill="var(--stroke-0, black)"
              id="Vector 62"
            />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[204px] not-italic text-[14px] text-black top-[1039px] tracking-[0.14px] w-[354px] whitespace-pre-wrap">
        With expectations set, she books her vehicle pickup to initiate the
        selling process.
      </p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[927px] not-italic text-[14px] text-black top-[1039px] tracking-[0.14px] w-[298px] whitespace-pre-wrap">
        She receives the strongest offer from the auction and retains full
        control over the final decision.
      </p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[603px] not-italic text-[14px] text-black top-[1039px] tracking-[0.14px] w-[257px] whitespace-pre-wrap">
        Autozen activates its dealer network, creating competitive pressure to
        maximize value.
      </p>
      <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[204px] top-[232px]">
        <div className="relative shrink-0 size-[112px]">
          <img
            alt=""
            className="absolute block max-w-none size-full"
            height="112"
            src={frame1406Images.avatar}
            width="112"
          />
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[25px] text-black tracking-[0.25px] w-[279px] whitespace-pre-wrap">
          Amanda is selling her car with Autozen
        </p>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[689px] not-italic text-[14px] text-black top-[519px] tracking-[0.14px] w-[304px] whitespace-pre-wrap">
        Amanda begins with a transparent market estimate, establishing clarity
        and confidence before moving forward.
      </p>
      <div className="absolute bg-white content-stretch flex flex-col gap-[22.507px] items-start left-[927px] pb-[42.366px] pt-[31.775px] px-[31.775px] rounded-[7.944px] top-[635px] w-[311.789px]">
        <div
          aria-hidden="true"
          className="absolute border-[#e6e6ef] border-[0.662px] border-solid inset-0 pointer-events-none rounded-[7.944px] shadow-[0px_0px_16.884px_0px_rgba(40,11,107,0.16)]"
        />
        <div className="content-stretch flex flex-col font-['Archivo:Bold',sans-serif] font-bold gap-[5.296px] items-start relative shrink-0 text-[#350e70] w-full">
          <p
            className="leading-[normal] relative shrink-0 text-[13.239px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Your offer
          </p>
          <div
            className="flex flex-col justify-center leading-[0] relative shrink-0 text-[31.775px] whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <p className="leading-[37.07px]">$31,300</p>
          </div>
        </div>
        <div className="bg-[#faf9fb] relative rounded-[8px] shrink-0 w-[248.239px]">
          <div
            aria-hidden="true"
            className="absolute border-[#e6e6ef] border-[0.662px] border-solid inset-0 pointer-events-none rounded-[8px]"
          />
          <div className="content-stretch flex gap-[7.944px] items-start p-[9.93px] relative w-full">
            <div
              className="relative shrink-0 size-[15.887px]"
              data-name="Icons/Information/Time"
            >
              <div className="absolute inset-[8.33%]" data-name="clock">
                <div className="absolute inset-[-5%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 14.5634 14.5634"
                  >
                    <g id="clock">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p18bcb580}
                        fillRule="evenodd"
                        id="Oval"
                        stroke="var(--stroke-0, #6B2DFB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.32394"
                      />
                      <path
                        d={svgPaths.p11ce4d00}
                        id="Path"
                        stroke="var(--stroke-0, #CA6639)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.32394"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[1.986px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
              <p className="font-['Mulish:Bold',sans-serif] font-bold leading-[12.577px] relative shrink-0 text-[#350e70] text-[9.93px] w-full">
                23:58:14
              </p>
              <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[8.326px] relative shrink-0 text-[#535365] text-[6.13px] w-full">
                {`Opportunities like this don’t last forever. `}
                <br aria-hidden="true" />
                This offer expires soon.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[9.93px] items-center relative shrink-0">
          <div
            className="bg-[#ffac88] h-[37.732px] relative rounded-[1000px] shrink-0 w-[165.493px]"
            data-name="Pill button"
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[19.859px] relative size-full">
                <Wrapper additionalClassNames="font-['Archivo:Bold',sans-serif] font-bold text-[#350e70]">
                  Accept Offer
                </Wrapper>
              </div>
            </div>
          </div>
          <div
            className="h-[37.732px] relative rounded-[100px] shrink-0 w-[166.817px]"
            data-name="Component 2"
          >
            <div
              aria-hidden="true"
              className="absolute border-[#6b2dfb] border-[1.324px] border-solid inset-0 pointer-events-none rounded-[100px]"
            />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[6.62px] relative size-full">
                <Wrapper additionalClassNames="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#5d24df]">
                  Reject Offer
                </Wrapper>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Mulish:Bold',sans-serif] font-bold h-[45.014px] justify-center leading-[0] relative shrink-0 text-[#5d24df] text-[9.93px] text-center w-[152.915px]">
            <p className="[text-decoration-skip-ink:none] decoration-solid leading-[13.901px] underline whitespace-pre-wrap">
              My vehicle is no longer available
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-0 left-[394px] top-[286px] w-[190px]">
        <div className="absolute inset-[-7.36px_-0.53%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 191 14.7279"
          >
            <path
              d={svgPaths.p25290d00}
              fill="var(--stroke-0, black)"
              id="Arrow 8"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[884px] top-[790px] w-[29px]">
        <div className="absolute inset-[-7.36px_-3.45%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 30 14.7279"
          >
            <path
              d={svgPaths.p394fef80}
              fill="var(--stroke-0, black)"
              id="Arrow 9"
            />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[6.315px] items-start left-[595px] shadow-[0px_0px_21.558px_0px_rgba(40,11,107,0.16)] top-[705px] w-[278.348px]">
        <div
          className="bg-white relative rounded-[12px] shrink-0 w-[278.348px]"
          data-name="Top primary card - desktop"
        >
          <div
            aria-hidden="true"
            className="absolute border-[#e6e6ef] border-[0.632px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div className="content-stretch flex flex-col items-start px-[30.314px] py-[20.209px] relative w-full">
            <div className="content-stretch flex flex-col gap-[5.684px] items-start relative shrink-0 text-[#350e70] w-full whitespace-pre-wrap">
              <p
                className="font-['Archivo:Bold',sans-serif] font-bold leading-[15.789px] relative shrink-0 text-[12.63px] w-full"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                We’re looking for a buyer
              </p>
              <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[13.262px] relative shrink-0 text-[9.47px] w-full">
                {`We have set times when we showcase your vehicle to our network of buyers. `}
                <br aria-hidden="true" />
                <br aria-hidden="true" />
                Don’t worry, we’ll notify you when we have an offer.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-[7.579px] shrink-0 w-full">
          <div
            aria-hidden="true"
            className="absolute border-[#e6e6ef] border-[0.632px] border-solid inset-0 pointer-events-none rounded-[7.579px]"
          />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[20.209px] items-center pb-[40.419px] pt-[30.314px] px-[30.314px] relative w-full">
              <div className="content-stretch flex flex-col gap-[5.052px] items-start relative shrink-0 text-[#350e70] w-full whitespace-pre-wrap">
                <p
                  className="font-['Archivo:Bold',sans-serif] font-bold leading-[13.894px] relative shrink-0 text-[10.736px] w-[299.353px]"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  If your vehicle is no longer available
                </p>
                <p className="font-['Mulish:Medium',sans-serif] font-medium leading-[13.262px] relative shrink-0 text-[9.473px] w-[299.353px]">
                  Please let us know by clicking the button below.
                </p>
              </div>
              <div
                className="h-0 shrink-0 w-[299.353px]"
                data-name="Dividers/Solid"
              />
              <div
                className="h-[35.998px] relative rounded-[100px] shrink-0 w-[159.15px]"
                data-name="Pill button"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[#6b2dfb] border-[1.263px] border-solid inset-0 pointer-events-none rounded-[100px]"
                />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[6.315px] relative size-full">
                    <div
                      className="flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#5d24df] text-[9.47px] text-center whitespace-nowrap"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      <p className="leading-[1.5]">Stop showing my vehicle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[467px] top-[790px]">
        <div className="absolute h-[140.5px] left-[467px] top-[790px] w-[121px]">
          <div className="absolute inset-[-5.24%_-0.83%_-0.71%_-0.83%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 123 148.864"
            >
              <g id="Group 22">
                <path
                  d={svgPaths.p38a14ec0}
                  fill="var(--stroke-0, black)"
                  id="Arrow 5"
                />
                <path
                  d={svgPaths.p14bf8980}
                  id="Line 8"
                  stroke="var(--stroke-0, black)"
                  strokeDasharray="1 6"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
