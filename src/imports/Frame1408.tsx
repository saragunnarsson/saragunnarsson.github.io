import clsx from "clsx";
import svgPaths from "./svg-fpmirmdv67";
import imgNetCentsLogomarkColor128Px from "@assets/34439fc65b27f7d46a22550912f851eb6fa2b020.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f8fa] relative rounded-[6.154px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e5e5f0] border-[0.769px] border-solid inset-0 pointer-events-none rounded-[6.154px]"
      />
      <div className="content-stretch flex flex-col items-start pb-[15.386px] pt-[7.693px] px-[15.386px] relative w-full">
        {children}
      </div>
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
      className={clsx(
        "bg-white relative rounded-[11.54px] shrink-0 w-[288.49px]",
        additionalClassNames,
      )}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d3d2e1] border-solid inset-0 pointer-events-none rounded-[11.54px]"
      />
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<VectorProps>) {
  return (
    <div
      className={clsx("absolute h-[5.385px] w-[8.462px]", additionalClassNames)}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8.46238 5.38515"
      >
        {children}
      </svg>
    </div>
  );
}

function Rectangle({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[33.08px] left-0 right-0 top-0">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 246.948 33.0802"
      >
        {children}
      </svg>
    </div>
  );
}
type CloseProps = {
  additionalClassNames?: string;
};

function Close({ additionalClassNames = "" }: CloseProps) {
  return (
    <div
      className={clsx("overflow-clip size-[29.234px]", additionalClassNames)}
    >
      <div className="absolute inset-[20.83%]" data-name="icon">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17.053 17.053"
        >
          <path d={svgPaths.peaaf300} fill="var(--fill-0, #272A35)" id="icon" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="bg-[#4a90e2] content-stretch flex items-center justify-center px-[13.078px] py-[17.694px] relative rounded-[8.462px] shrink-0 w-[259.256px]">
      <p className="font-['Gibson:SemiBold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[10.001px] text-center text-white tracking-[0.7001px] uppercase">
        {text}
      </p>
    </div>
  );
}
type Helper4Props = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper4({
  text,
  text1,
  text2,
  additionalClassNames = "",
}: Helper4Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col font-['Gibson:Regular',sans-serif] items-start leading-[normal] not-italic relative shrink-0 text-[10.001px] w-full whitespace-pre-wrap",
        additionalClassNames,
      )}
    >
      <p className="capitalize h-[13.078px] relative shrink-0 text-black w-full">{`Company Name `}</p>
      <p className="capitalize h-[13.078px] relative shrink-0 text-black w-full">
        {text}
      </p>
      <p className="h-[13.078px] relative shrink-0 text-[#1660b6] w-full">
        {text1}
      </p>
      <p className="capitalize h-[13.078px] relative shrink-0 text-black tracking-[0.2px] w-full">
        {text2}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center justify-center py-[1.539px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-b-[0.769px] border-solid inset-0 pointer-events-none"
      />
      <p className="flex-[1_0_0] font-['Gibson:SemiBold',sans-serif] h-[14.617px] leading-[1.273] min-h-px min-w-px not-italic relative text-[8.462px] text-black tracking-[0.1692px] uppercase whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
};

function Helper3({ text, text1 }: Helper3Props) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Gibson:Medium',sans-serif] leading-[1.273] min-h-px min-w-px relative tracking-[0.2px]">
        {text}
      </p>
      <p className="font-['Gibson:Regular',sans-serif] leading-[1.327] relative shrink-0 w-[96.933px]">
        {text1}
      </p>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
};

function Helper2({ text, text1 }: Helper2Props) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Gibson:Medium',sans-serif] leading-[1.273] min-h-px min-w-px relative tracking-[0.2px]">
        {text}
      </p>
      <p className="font-['Gibson:Regular',sans-serif] leading-[normal] relative shrink-0 w-[96.933px]">
        {text1}
      </p>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex gap-[2.308px] items-center relative",
        additionalClassNames,
      )}
    >
      <p className="font-['Gibson:Medium',sans-serif] h-[8.462px] leading-[1.273] not-italic relative shrink-0 text-[#343537] text-[8.462px] tracking-[0.1692px] w-[120.012px] whitespace-pre-wrap">{`Incl. NC Processing Fee: $2.99 `}</p>
      <div
        className="overflow-clip relative shrink-0 size-[13.848px]"
        data-name="info"
      >
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 11.5396 11.5396"
          >
            <path
              d={svgPaths.p144ac060}
              fill="var(--fill-0, #1F5EA8)"
              id="Vector"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
type FiltersActiveTextProps = {
  text: string;
  additionalClassNames?: string;
};

function FiltersActiveText({
  text,
  additionalClassNames = "",
}: FiltersActiveTextProps) {
  return (
    <ul
      className={clsx(
        "absolute block capitalize font-['Gibson:Regular',sans-serif] leading-[0] not-italic text-[#939393] text-[8.462px] whitespace-nowrap",
        additionalClassNames,
      )}
    >
      <li className="list-disc ms-[12.693px] whitespace-pre-wrap">
        <span className="leading-[normal]">{text}</span>
      </li>
    </ul>
  );
}
type BorderProps = {
  additionalClassNames?: string;
};

function Border({ additionalClassNames = "" }: BorderProps) {
  return (
    <div className={clsx("absolute h-0", additionalClassNames)}>
      <div className="absolute inset-[-0.77px_0_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 248.486 0.769307"
        >
          <line
            id="border"
            stroke="var(--stroke-0, #E2E2E2)"
            strokeWidth="0.769307"
            x2="248.486"
            y1="0.384653"
            y2="0.384653"
          />
        </svg>
      </div>
    </div>
  );
}

function NetCentsLogomarkColor128PxImage() {
  return (
    <div className="absolute h-[32.311px] left-[10px] top-[6.92px] w-[34.619px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
        src={imgNetCentsLogomarkColor128Px}
      />
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute h-[12.309px] left-[1.11px] top-[1.08px] w-[24.434px]">
      <div className="absolute inset-[-9.38%_-4.72%_-9.37%_-2.73%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 26.254 14.6168"
        >
          <g id="Frame 1377">
            <path
              d="M1.15396 1.15396H25.1"
              id="Vector"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2.30792"
            />
            <path
              d="M1.15396 7.30842H25.1"
              id="Vector_2"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2.30792"
            />
            <path
              d="M12.206 13.4629H25.1"
              id="Vector_3"
              stroke="var(--stroke-0, black)"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2.30792"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex gap-[54px] items-start left-[347px] top-[189px]">
        <Wrapper additionalClassNames="h-[573.134px]">
          <div
            className="absolute bg-white h-[44.62px] left-0 overflow-clip right-0 shadow-[0px_1.539px_3.077px_0px_rgba(134,134,134,0.16)] top-0"
            data-name="Header"
          >
            <div
              className="absolute contents right-[21.54px] top-[13.85px]"
              data-name="menu"
            >
              <div
                className="absolute h-[16.155px] overflow-clip right-[21.54px] top-[13.85px] w-[26.156px]"
                data-name="Frame"
              >
                <Helper />
              </div>
            </div>
            <NetCentsLogomarkColor128PxImage />
          </div>
          <div className="absolute bg-[#f8f8fa] border-[#e2e2e2] border-[0.769px] border-solid h-[226.176px] left-0 top-[44.62px] w-[288.49px]" />
          <div className="absolute content-stretch flex flex-col gap-[8.462px] items-start left-[22.31px] top-[117.7px] w-[246.948px]">
            <div
              className="h-[33.08px] relative shrink-0 w-full"
              data-name="search row middle"
            >
              <Rectangle>
                <path
                  d={svgPaths.p3c7bfac0}
                  fill="var(--fill-0, white)"
                  id="Rectangle"
                  stroke="var(--stroke-0, #E2E2E2)"
                  strokeWidth="0.769307"
                />
              </Rectangle>
              <p className="absolute font-['Gibson:Regular',sans-serif] leading-[normal] left-[30.77px] not-italic text-[#565656] text-[10.001px] top-[12.31px] tracking-[0.2px]">
                Search
              </p>
              <div
                className="absolute left-[10px] overflow-clip size-[13.848px] top-[9.23px]"
                data-name="Search"
              >
                <div className="absolute inset-[12.5%]" data-name="Icon">
                  <div className="absolute inset-[-5.56%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 11.5396 11.5396"
                    >
                      <path
                        d={svgPaths.p1878d100}
                        id="Icon"
                        stroke="var(--stroke-0, #767676)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.15396"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[33.85px] relative shrink-0 w-full"
              data-name="top row status"
            >
              <div
                className="absolute bg-white border-[#e2e2e2] border-[0.769px] border-solid h-[33.08px] left-0 right-0 rounded-[6.154px] top-0"
                data-name="Rectangle"
              />
              <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.14] left-[12.31px] not-italic text-[#565656] text-[10.001px] top-[12.31px] tracking-[0.3px]">
                Status
              </p>
            </div>
            <div
              className="h-[33.85px] relative shrink-0 w-full"
              data-name="bottom row"
            >
              <Rectangle>
                <path
                  d={svgPaths.p3c7bfac0}
                  fill="var(--fill-0, white)"
                  id="Rectangle"
                  stroke="var(--stroke-0, #4A90E2)"
                  strokeWidth="0.769307"
                />
              </Rectangle>
              <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.14] left-[30.77px] not-italic text-[#0b51a4] text-[10.001px] top-[12.31px] tracking-[0.3px]">{`12/12/20  -  12/12/20`}</p>
              <Vector additionalClassNames="right-[10.77px] top-[14.62px]">
                <path
                  d={svgPaths.p391490f0}
                  fill="var(--fill-0, #4A90E2)"
                  id="Vector"
                />
              </Vector>
              <div
                className="absolute left-[12.31px] overflow-clip size-[13.848px] top-[9.23px]"
                data-name="Calendar"
              >
                <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                  <div className="absolute inset-[-5%_-5.56%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 11.5396 12.6936"
                    >
                      <path
                        d={svgPaths.pc8d6500}
                        id="Icon"
                        stroke="var(--stroke-0, #397BCA)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.15396"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[250.02px] size-[7.539px] top-[214.64px]"
            data-name="x 1"
          />
          <Vector additionalClassNames="-translate-x-1/2 left-[calc(50%+109.24px)] top-[175.4px]">
            <path
              d={svgPaths.p391490f0}
              fill="var(--fill-0, #96989C)"
              id="Vector"
            />
          </Vector>
          <div className="absolute border border-[#397bca] border-solid h-[31.542px] left-[170.02px] rounded-[6.154px] top-[75px] w-[98.471px]">
            <div
              className="absolute left-[76.7px] size-[11.924px] top-[9px]"
              data-name="plus minus x close"
            >
              <div
                className="absolute inset-[0_-0.65%_-0.65%_0]"
                data-name="Vector"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12.0012 12.0012"
                >
                  <path
                    d={svgPaths.p2261c980}
                    fill="var(--fill-0, #397BCA)"
                    id="Vector"
                  />
                </svg>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Gibson:Medium',sans-serif] justify-center leading-[0] not-italic right-[84.39px] text-[#397bca] text-[10.77px] top-[15.23px] translate-x-full whitespace-nowrap">
              <p className="leading-[1.273]">New invoice</p>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute capitalize flex flex-col font-['Gibson:Medium',sans-serif] justify-center leading-[0] not-italic right-[261.49px] text-[15px] text-black top-[95px] translate-x-full whitespace-nowrap">
            <p className="leading-[1.273]">Invoices</p>
          </div>
          <div
            className="absolute h-[559.286px] left-[-2.31px] right-[-5.39px] top-[583.13px]"
            data-name="Invoice table"
          >
            <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[27.7px] text-[10.001px] text-black text-right top-[97.7px] w-[69.238px] whitespace-pre-wrap">
              $50.00
            </p>
            <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[27.7px] text-[10.001px] text-black text-right top-[51.55px] w-[69.238px] whitespace-pre-wrap">
              $130.50
            </p>
            <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[27.7px] text-[10.001px] text-black text-right top-[143.09px] w-[69.238px] whitespace-pre-wrap">
              $5.23
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[273.1px] text-[#00bc7c] text-[9.232px] top-[16.16px] tracking-[0.1846px] translate-x-full w-[74.623px] whitespace-pre-wrap">
              Paid
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[272.33px] text-[#00bc7c] text-[9.232px] top-[106.94px] tracking-[0.1846px] translate-x-full w-[74.623px] whitespace-pre-wrap">
              Paid
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[272.33px] text-[#00bc7c] text-[9.232px] top-[152.32px] tracking-[0.1846px] translate-x-full w-[74.623px] whitespace-pre-wrap">
              Paid
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[23.85px] not-italic text-[10.001px] text-black top-[91.55px] w-[138.475px] whitespace-pre-wrap">
              Museo Arts
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[23.85px] not-italic text-[10.001px] text-black top-[45.39px] w-[138.475px] whitespace-pre-wrap">
              Andolis Cannolis
            </p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[23.85px] not-italic text-[10.001px] text-black top-[136.94px] w-[138.475px] whitespace-pre-wrap">{`NetCents `}</p>
            <Border additionalClassNames="left-[22.31px] right-[25.39px] top-[82.32px]" />
            <Border additionalClassNames="left-[22.31px] right-[25.39px] top-[36.16px]" />
            <Border additionalClassNames="left-[22.31px] right-[25.39px] top-[128.48px]" />
            <Border additionalClassNames="left-[22.31px] right-[25.39px] top-[174.63px]" />
            <p className="absolute bottom-[338.49px] font-['Gibson:Regular',sans-serif] leading-[114%] left-[75.39px] not-italic text-[#bebebe] text-[10.001px] tracking-[1.9002px] translate-y-full uppercase">{`{Load more button}`}</p>
            <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[1.26] not-italic right-[270.8px] text-[#00bc7c] text-[9.232px] top-[60.01px] tracking-[0.1846px] translate-x-full w-[47.697px] whitespace-pre-wrap">
              Paid
            </p>
          </div>
          <p className="absolute font-['Gibson:SemiBold',sans-serif] h-[10.77px] leading-[1.273] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[297.72px] tracking-[0.2px] uppercase w-[53.851px] whitespace-pre-wrap">
            Amount
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[333.11px] w-[44.62px] whitespace-pre-wrap">
            $150.00
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[382.35px] w-[38.465px] whitespace-pre-wrap">
            $130.50
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[566.98px] w-[69.238px] whitespace-pre-wrap">
            $130.50
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[473.89px] w-[69.238px] whitespace-pre-wrap">
            $158.50
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[426.97px] w-[69.238px] whitespace-pre-wrap">
            $73.90
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[22.31px] text-[10.001px] text-black text-right top-[516.97px] w-[69.238px] whitespace-pre-wrap">
            $73.90
          </p>
          <p className="absolute font-['Gibson:Regular',sans-serif] h-[8.462px] leading-[1.26] not-italic right-[267.72px] text-[#ff7a00] text-[9.232px] top-[349.27px] tracking-[0.1846px] translate-x-full w-[40.773px] whitespace-pre-wrap">
            Unpaid
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[266.95px] text-[#00bc7c] text-[9.232px] top-[392.35px] tracking-[0.1846px] translate-x-full w-[33.85px] whitespace-pre-wrap">
            Paid
          </p>
          <p className="absolute font-['Gibson:SemiBold',sans-serif] h-[10.77px] leading-[1.273] left-[21.54px] not-italic text-[10.001px] text-black top-[297.72px] tracking-[0.2px] uppercase w-[68.468px] whitespace-pre-wrap">
            Recipient
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[21.54px] not-italic text-[10.001px] text-black top-[560.06px] w-[138.475px] whitespace-pre-wrap">
            Financial Corp
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[normal] left-[21.54px] not-italic text-[10.001px] text-black top-[467.74px]">
            Francos Holm Inc.
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[21.54px] not-italic text-[10.001px] text-black top-[420.81px] w-[138.475px] whitespace-pre-wrap">
            Janas Jellybeans
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] h-[13.078px] leading-[normal] left-[21.54px] not-italic text-[10.001px] text-black top-[513.13px] w-[138.475px] whitespace-pre-wrap">
            Hellys Holy trinkets
          </p>
          <Border additionalClassNames="left-[20px] right-[20px] top-[320.03px]" />
          <Border additionalClassNames="left-[20px] right-[20px] top-[365.42px]" />
          <Border additionalClassNames="left-[20px] right-[20px] top-[550.05px]" />
          <Border additionalClassNames="left-[20px] right-[20px] top-[457.74px]" />
          <Border additionalClassNames="left-[20px] right-[20px] top-[411.58px]" />
          <Border additionalClassNames="left-[20px] right-[20px] top-[503.9px]" />
          <p className="absolute font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[267.72px] text-[#ff7a00] text-[9.232px] top-[436.2px] tracking-[0.1846px] translate-x-full w-[33.08px] whitespace-pre-wrap">
            Unpaid
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[267.72px] text-[#00bc7c] text-[9.232px] top-[483.12px] tracking-[0.1846px] translate-x-full">
            Paid
          </p>
          <p className="absolute capitalize font-['Gibson:Regular',sans-serif] leading-[1.26] not-italic right-[267.72px] text-[#00bc7c] text-[9.232px] top-[528.51px] tracking-[0.1846px] translate-x-full">
            Paid
          </p>
          <div
            className="absolute h-[8.462px] left-[64.62px] overflow-clip top-[393.89px] w-[12.309px]"
            data-name="envelope"
          />
          <FiltersActiveText
            text="next due: Feb 23 - 2021"
            additionalClassNames="left-[50px] top-[350.03px]"
          />
          <FiltersActiveText
            text="next due: Feb 23 - 2021"
            additionalClassNames="left-[39.23px] top-[393.12px]"
          />
          <div className="absolute content-stretch flex gap-[5.385px] items-center left-[21.54px] top-[333.11px]">
            <div className="relative shrink-0 size-[9.232px]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 9.23175 9.23322"
              >
                <g id="Frame 28">
                  <path
                    d={svgPaths.p2a1c9980}
                    fill="var(--fill-0, #4A90E2)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p2a02fe00}
                    fill="var(--fill-0, #4A90E2)"
                    id="Vector_2"
                  />
                </g>
              </svg>
            </div>
            <p className="capitalize font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.001px] text-black w-[138.475px] whitespace-pre-wrap">
              Museo Arts
            </p>
          </div>
          <div className="absolute content-stretch flex gap-[5.385px] items-center left-[21.54px] top-[376.96px]">
            <div className="relative shrink-0 size-[9.232px]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 9.23175 9.23298"
              >
                <g id="Frame 28">
                  <path
                    d={svgPaths.p3c50a100}
                    fill="var(--fill-0, #4A90E2)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p8ec8680}
                    fill="var(--fill-0, #4A90E2)"
                    id="Vector_2"
                  />
                </g>
              </svg>
            </div>
            <p className="capitalize font-['Gibson:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.001px] text-black w-[138.475px] whitespace-pre-wrap">
              cando Inc.
            </p>
          </div>
        </Wrapper>
        <Wrapper additionalClassNames="h-[777px]">
          <div
            className="absolute bg-white h-[44.62px] left-0 overflow-clip right-0 shadow-[0px_1.539px_3.077px_0px_rgba(134,134,134,0.16)] top-0"
            data-name="Header"
          >
            <div
              className="absolute contents right-[16.92px] top-[14.62px]"
              data-name="menu"
            >
              <div
                className="absolute h-[16.155px] overflow-clip right-[16.92px] top-[14.62px] w-[26.156px]"
                data-name="Frame"
              >
                <Helper />
              </div>
            </div>
            <NetCentsLogomarkColor128PxImage />
          </div>
          <div className="absolute bg-[#154f93] h-[22.31px] left-[-0.77px] rounded-br-[6.154px] rounded-tr-[6.154px] top-[72.31px] w-[127.705px]" />
          <p className="absolute font-['Gibson:SemiBold',sans-serif] h-[10.77px] leading-[1.273] left-[26.16px] not-italic text-[10.001px] text-white top-[77.7px] uppercase w-[90.009px] whitespace-pre-wrap">
            Recurring series
          </p>
          <div className="absolute content-stretch flex flex-col gap-[3.077px] items-start left-[30px] top-[111.55px] w-[231.561px]">
            <div className="content-stretch flex flex-col gap-[1.539px] items-start not-italic relative shrink-0 text-black w-full whitespace-pre-wrap">
              <p className="font-['Gibson:Medium',sans-serif] leading-[1.273] min-w-full relative shrink-0 text-[8.462px] tracking-[0.1692px] w-[min-content]">
                Amount per Invoice
              </p>
              <p className="font-['Gibson:SemiBold',sans-serif] leading-[1.278] min-w-full relative shrink-0 text-[20.002px] uppercase w-[min-content]">
                $6,500.00
              </p>
              <p className="absolute capitalize font-['Gibson:Medium',sans-serif] leading-[normal] left-[106.16px] text-[10.001px] top-[23.08px] w-[96.933px]">{`/  Monthly`}</p>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-0.77px_0_0_0]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 231.561 0.769307"
                >
                  <line
                    id="Line 8"
                    stroke="var(--stroke-0, #E0E0E0)"
                    strokeWidth="0.769307"
                    x2="231.561"
                    y1="0.384653"
                    y2="0.384653"
                  />
                </svg>
              </div>
            </div>
            <Helper1 additionalClassNames="py-[3.077px] shrink-0 w-full" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[13.848px] items-start left-[17.69px] top-[191.56px] w-[256.949px]">
            <Wrapper1>
              <div className="capitalize content-stretch flex flex-col gap-[6.154px] items-start not-italic pt-[9.232px] relative shrink-0 text-[10.001px] text-black w-[213.867px] whitespace-pre-wrap">
                <Helper2 text="Last paid" text1="jan 19, 2021" />
                <Helper2 text="next Due Date" text1="feb 25, 2021" />
                <Helper2 text="Series End date" text1="When cancelled" />
                <Helper3 text="payout currency" text1="USD" />
              </div>
            </Wrapper1>
            <div className="bg-[#f8f8fa] relative rounded-[6.154px] shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[#e5e5f0] border-[0.769px] border-solid inset-0 pointer-events-none rounded-[6.154px]"
              />
              <div className="content-stretch flex flex-col gap-[3.847px] items-start pb-[15.386px] pt-[10.001px] px-[15.386px] relative w-full">
                <Text text="recipient" />
                <Helper4
                  text="firstname lastname"
                  text1="email@domain.com"
                  text2="+ 1 777 777 7777"
                  additionalClassNames="gap-[3.847px] pt-[6.154px]"
                />
              </div>
            </div>
            <div className="h-[179.249px] relative shrink-0 w-full">
              <div className="absolute content-stretch flex items-center justify-center left-[15.39px] py-[2.308px] top-[10.77px] w-[226.176px]">
                <div
                  aria-hidden="true"
                  className="absolute border-[#e0e0e0] border-b-[0.769px] border-solid inset-0 pointer-events-none"
                />
                <p className="flex-[1_0_0] font-['Gibson:SemiBold',sans-serif] h-[14.617px] leading-[1.273] min-h-px min-w-px not-italic relative text-[8.462px] text-black tracking-[0.1692px] uppercase whitespace-pre-wrap">
                  Invoice History
                </p>
              </div>
              <div className="absolute bg-[#f8f8fa] border-[#e2e2e2] border-[0.769px] border-solid h-[177.71px] left-0 right-0 rounded-[6.154px] top-0" />
              <div className="absolute content-stretch flex flex-col font-['Gibson:Regular',sans-serif] gap-[11.54px] h-[134.629px] items-start leading-[normal] left-[15.39px] not-italic overflow-clip text-[#1660b6] text-[10.001px] top-[42.31px]">
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
                <p className="relative shrink-0">Month dd, 2021</p>
              </div>
              <div className="absolute h-[113.088px] left-[219.25px] top-[40px] w-[2.308px]" />
            </div>
          </div>
          <Close additionalClassNames="absolute left-[250.79px] top-[70.78px]" />
          <div className="absolute content-stretch flex flex-col gap-[36.157px] items-center left-[17.69px] top-[649.3px] w-[259.256px]">
            <Text1 text="cancel recurring series" />
            <p className="font-['Gibson:SemiBold',sans-serif] leading-[114%] min-w-full not-italic relative shrink-0 text-[#797981] text-[10.001px] text-center tracking-[0.7001px] uppercase w-[min-content] whitespace-pre-wrap">
              Close
            </p>
          </div>
        </Wrapper>
        <Wrapper additionalClassNames="h-[739.304px]">
          <div
            className="absolute bg-white h-[44.62px] left-0 overflow-clip right-0 shadow-[0px_1.539px_3.077px_0px_rgba(134,134,134,0.16)] top-0"
            data-name="Header"
          >
            <div
              className="absolute contents right-[13.08px] top-[13.85px]"
              data-name="menu"
            >
              <div
                className="absolute h-[16.155px] overflow-clip right-[13.08px] top-[13.85px] w-[26.156px]"
                data-name="Frame"
              >
                <Helper />
              </div>
            </div>
            <NetCentsLogomarkColor128PxImage />
          </div>
          <div className="absolute bg-[#4a90e2] h-[22.31px] left-0 rounded-br-[6.154px] rounded-tr-[6.154px] top-[71.55px] w-[140.783px]" />
          <p className="absolute font-['Gibson:SemiBold',sans-serif] h-[10.77px] leading-[1.273] left-[29.23px] not-italic text-[10.001px] text-white top-[76.93px] uppercase w-[110.011px] whitespace-pre-wrap">
            Recurring Invoice
          </p>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[13.848px] items-start left-[calc(50%+0.38px)] top-[111.55px] w-[256.949px]">
            <div className="content-stretch flex flex-col gap-[3.077px] items-start overflow-clip px-[13.848px] relative shrink-0 w-[246.948px]">
              <div className="content-stretch flex flex-col gap-[0.769px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
                <p className="font-['Gibson:Medium',sans-serif] leading-[1.273] relative shrink-0 text-[8.462px] text-black tracking-[0.1692px] w-full">
                  Invoice Amount
                </p>
                <div className="content-stretch flex flex-col gap-[2.308px] items-start relative shrink-0 w-full">
                  <p className="font-['Gibson:SemiBold',sans-serif] leading-[1.278] relative shrink-0 text-[20.002px] text-black uppercase w-full">
                    $6,500.00
                  </p>
                  <p className="font-['Gibson:Medium',sans-serif] leading-[1.273] relative shrink-0 text-[#868686] text-[10.77px] tracking-[0.2154px] w-full">
                    0.00556613 BTC
                  </p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-[243.101px]">
                <div className="absolute inset-[-0.77px_0_0_0]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 243.101 0.769307"
                  >
                    <line
                      id="Line 8"
                      stroke="var(--stroke-0, #E0E0E0)"
                      strokeWidth="0.769307"
                      x2="243.101"
                      y1="0.384653"
                      y2="0.384653"
                    />
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-between py-[3.077px] relative shrink-0 w-full">
                <Helper1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              </div>
            </div>
            <Wrapper1>
              <div className="capitalize content-stretch flex flex-col gap-[6.154px] items-start not-italic pt-[9.232px] relative shrink-0 text-[10.001px] text-black w-[213.867px] whitespace-pre-wrap">
                <Helper2 text="Invoice number" text1="MYTL5R2MYTL5R" />
                <Helper2 text="Frequency" text1="Monthly" />
                <Helper2 text="Date Due" text1="feb 25, 2021" />
                <Helper3 text="payout currency" text1="USD" />
              </div>
            </Wrapper1>
            <div className="bg-[#f8f8fa] h-[179.249px] relative rounded-[6.154px] shrink-0 w-full">
              <div
                aria-hidden="true"
                className="absolute border-[#e5e5f0] border-[0.769px] border-solid inset-0 pointer-events-none rounded-[6.154px]"
              />
              <div className="content-stretch flex flex-col gap-[3.847px] items-start pb-[13.848px] pt-[10.001px] px-[15.386px] relative size-full">
                <Text text="recipient" />
                <div className="content-stretch flex flex-col gap-[4.616px] items-start pt-[6.154px] relative shrink-0 w-[130.782px]">
                  <Helper4
                    text="firstname lastname"
                    text1="email@domain.com"
                    text2="+ 1 777 777 7777"
                    additionalClassNames="gap-[4.616px] pb-[3.077px]"
                  />
                  <div className="content-stretch flex items-center justify-center pt-[13.078px] relative shrink-0 w-full">
                    <div
                      aria-hidden="true"
                      className="absolute border-[#e3e3e4] border-solid border-t-[0.769px] inset-0 pointer-events-none"
                    />
                    <div className="capitalize flex-[1_0_0] font-['Gibson:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[10.001px] text-black tracking-[0.16px] tracking-[0.1px] whitespace-pre-wrap">
                      <p className="leading-[1.591] mb-0">123 Streetname</p>
                      <p className="mb-0">
                        <span className="leading-[1.591] uppercase">
                          h5t 2g6,
                        </span>
                        <span className="leading-[1.591]">{` City, State/Prov`}</span>
                      </p>
                      <p className="leading-[1.591]">country</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[8.462px] items-center justify-end left-[180.79px] top-[69.24px]">
            <div className="bg-[#eafdf7] content-stretch flex gap-[4.616px] items-center px-[7.693px] py-[3.847px] relative rounded-[5.385px] shrink-0">
              <div
                aria-hidden="true"
                className="absolute border-[#059e6a] border-[0.769px] border-solid inset-0 pointer-events-none rounded-[5.385px]"
              />
              <div
                className="h-[7.501px] overflow-clip relative shrink-0 w-[10.002px]"
                data-name="checkmark"
              >
                <div
                  className="absolute contents inset-[0_-0.06%_0_0]"
                  data-name="Layer 2"
                >
                  <div
                    className="absolute inset-[0_-0.06%_0_0]"
                    data-name="Outline Old Icons"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 10.0073 7.50134"
                    >
                      <g id="Outline Old Icons">
                        <path
                          d={svgPaths.p33a72000}
                          fill="var(--fill-0, #059E6A)"
                          id="Vector"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Gibson:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#059e6a] text-[10.001px] tracking-[0.2px] whitespace-nowrap">
                <p className="leading-[1.09]">PAID</p>
              </div>
            </div>
            <Close additionalClassNames="relative shrink-0" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[35.388px] items-center left-[17.69px] top-[533.13px] w-[259.256px]">
            <div className="content-stretch flex flex-col gap-[19.233px] items-start relative shrink-0">
              <Text1 text="refund" />
              <div className="content-stretch flex items-center justify-center px-[13.078px] py-[17.694px] relative rounded-[8.462px] shrink-0 w-[259.256px]">
                <div
                  aria-hidden="true"
                  className="absolute border-[#397bca] border-[1.539px] border-solid inset-0 pointer-events-none rounded-[8.462px]"
                />
                <p className="font-['Gibson:SemiBold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#397bca] text-[10.001px] text-center tracking-[0.7001px] uppercase">
                  duplicate
                </p>
              </div>
            </div>
            <p className="font-['Gibson:SemiBold',sans-serif] leading-[114%] min-w-full not-italic relative shrink-0 text-[#797981] text-[10.001px] text-center tracking-[0.7001px] uppercase w-[min-content] whitespace-pre-wrap">
              Close
            </p>
          </div>
        </Wrapper>
      </div>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-[349px] not-italic text-[16px] text-black top-[132px] tracking-[0.16px] w-[871px] whitespace-pre-wrap">
        A structured redesign of the recurring billing workflow, improving
        clarity, hierarchy, and merchant control.
      </p>
      <p className="absolute font-['Lexend_Deca:Bold',sans-serif] font-bold md:leading-[58px] lg:leading-[56px] xl:leading-[48px] left-[342px] text-[#0a0a0a] md:text-[45px] lg:text-[44px] xl:text-[38px] top-[66px] w-[1080px] whitespace-pre-wrap">{`Recurring Billing Series & Invoices`}</p>
    </div>
  );
}
