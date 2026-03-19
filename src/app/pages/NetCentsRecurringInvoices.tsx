import { useState, useEffect } from "react";
import { MobileRecurringInvoices } from "../components/MobileRecurringInvoices";
import { Link, useNavigate } from "react-router";
import { Mail } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import svgPaths from "../../imports/svg-si7wdvwp4g";
import SkandiUxuiLogo from "../../imports/SkandiUxuiLogo";
import SkandiUxuiLogoWhite from "../../imports/SkandiUxuiLogoWhite";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { mobileRecurringInvoicesImages } from "../components/mobileRecurringInvoicesImages";
import { usePreloadImages } from "../components/usePreloadImages";
import { caseStudyImages } from "./caseStudyImages";

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] flex gap-[5px] items-center justify-center px-[10px] sm:px-[12px] py-[7px] sm:py-[9px] rounded-[10px] shrink-0 relative">
      <div
        aria-hidden="true"
        className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="shrink-0 size-[20px] sm:size-[24px] relative">
        <div className="absolute bottom-1/4 left-[16.04%] right-[16.04%] top-[24.9%]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16.3 12.025"
          >
            <path d={svgPaths.p23b3580} fill="#272A35" />
          </svg>
        </div>
      </div>
      <p className="font-medium shrink-0 text-[#0a0a0a] text-center text-[13px] leading-[20px] sm:text-[15px] sm:leading-[23px]">
        {text}
      </p>
    </div>
  );
}

export function NetCentsRecurringInvoices() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const navigate = useNavigate();

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("work-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      // Check if navbar is over dark sections
      const navbar = document.querySelector("nav");
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        const navbarCenter = navbarRect.top + navbarRect.height / 2;

        // Get all dark sections
        const darkSections = document.querySelectorAll(".dark-section");
        let overDark = false;

        darkSections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (navbarCenter >= rect.top && navbarCenter <= rect.bottom) {
            overDark = true;
          }
        });

        setIsOverDark(overDark);
      }
    };

    // Add a small delay to ensure DOM is fully rendered before initial check
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  usePreloadImages([caseStudyImages.netCentsRecurringInvoice]);

  return (
    <div className="bg-[#fafbff] min-h-screen relative overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all ${isScrolled ? "bg-white/5 backdrop-blur-sm border-b border-white/30 shadow-sm" : ""}`}
      >
        <div
          className={`mx-auto flex items-center justify-between lg:mx-[75px] ${isScrolled ? "md:mt-[8px]" : "md:mt-[18px]"} md:mb-[0px] px-[26px] sm:px-[40px] md:px-[60px] lg:px-[32px] py-[12px]`}
          style={{ maxWidth: "2000px" }}
        >
          <Link to="/" className="block">
            <div className="scale-[0.7] origin-left sm:scale-[0.85] md:scale-100">
              {isOverDark ? <SkandiUxuiLogoWhite /> : <SkandiUxuiLogo />}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/#work-section"
              onClick={handleWorkClick}
              className={`${isOverDark ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-gray-900"} transition-colors font-semibold`}
            >
              Work
            </a>
            <a
              href="/#contact"
              className="flex items-center gap-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all px-[28px] lg:px-[33px] py-[11px] lg:py-[12px]"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium text-[13px] lg:text-[14px]">
                Let's Talk
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 ${isOverDark ? "bg-white" : "bg-black"} transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-full h-0.5 ${isOverDark ? "bg-white" : "bg-black"} transition-all ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-full h-0.5 ${isOverDark ? "bg-white" : "bg-black"} transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden bg-white/5 backdrop-blur-sm flex flex-col items-center gap-8 ${isScrolled ? "border-t border-white/30 shadow-sm" : ""} px-[24px] pt-[35px] pb-[50px]`}
          >
            <a
              href="/#work-section"
              className={`block ${isOverDark ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-gray-900"} font-semibold`}
              onClick={handleWorkClick}
            >
              Work
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 px-[17px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-10 md:py-4 bg-gray-900 text-white rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-[17px] h-[17px] sm:w-[19px] sm:h-[19px] md:w-6 md:h-6" />
              <span className="font-medium text-[14px] sm:text-[14.5px] md:text-base">
                Let's Talk
              </span>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="px-[24px] sm:px-[40px] md:px-[60px] lg:pl-[100px] lg:pr-[80px] pt-[120px] sm:pt-[140px] md:pt-[160px] lg:pt-[180px] pb-[140px] sm:pb-[120px] md:pb-[180px] lg:pb-[250px]"
        style={{
          backgroundImage:
            "linear-gradient(156.188deg, rgb(231, 243, 255) 0%, rgb(243, 231, 255) 100%)",
        }}
      >
        <AnimatedSection>
          <div className="flex flex-col xl:flex-row gap-[24px] sm:gap-[28px] md:gap-[32px] items-start xl:items-center xl:justify-center">
            <div className="w-full xl:max-w-[756px] xl:flex-1 flex flex-col gap-[20px] sm:gap-[28px] md:gap-[32px] lg:gap-[37px]">
              <div className="flex flex-col gap-[10px] md:gap-[12px] lg:gap-[17px]">
                <div className="bg-[#f4f4ff] inline-flex rounded-[10px] self-start relative">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#3a3de8] border-solid inset-0 pointer-events-none rounded-[10px]"
                  />
                  <div className="flex items-center justify-center px-[11px] py-[4px]">
                    <p className="font-medium leading-[20px] text-[#0c0faf] text-[11px] sm:text-[12px] md:text-[13px]">
                      Feature Redesign within Merchant Platform
                    </p>
                  </div>
                </div>
                <h1 className="font-bold text-[#0a0a0a] text-[32px] leading-[42px] sm:text-[38px] sm:leading-[48px] md:text-[48px] md:leading-[60px] lg:text-[56px] lg:leading-[68px] xl:text-[65px] xl:leading-[77px]">
                  NetCents
                </h1>
                <p className="text-[#0a0a0a] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] text-[24px] font-[Lexend_Deca]">
                  Recurring Invoices
                </p>
              </div>
              <div className="flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px]">
                <p className="font-normal text-black text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[18px] lg:leading-[32px]">
                  NetCents provides cryptocurrency payment solutions for
                  merchants globally.
                </p>
                <p className="font-normal text-black max-w-[706px] text-[15px] leading-[25px] sm:text-[16px] sm:leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[18px] lg:leading-[32px]">
                  Skandi was brought in to refine and redesign the recurring
                  invoice feature — improving clarity, structure, and long-term
                  usability within an active merchant platform.
                </p>
              </div>
            </div>
            <div className="w-full xl:w-[450px] flex flex-wrap gap-[10px] md:gap-[12px] lg:gap-[16px] xl:pt-[115px] xl:pb-[13px] xl:shrink-0">
              <Tag text="UX Audit" />
              <Tag text="Feature Redesign" />
              <Tag text="Interaction Design" />
              <Tag text="UI Systems Alignment" />
              <Tag text="Cross-Functional Collaboration" />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Content Sections */}
      <div className="max-w-[1200px] mx-auto px-[30px] sm:px-[24px] md:px-[40px] -mt-[90px] sm:-mt-[60px] md:-mt-[110px] lg:-mt-[170px] pb-[100px] md:pb-0 flex flex-col gap-[20px] relative z-10">
        {/* The Context */}
        <AnimatedSection>
          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-[0px_0px_16.44px_0px_rgba(21,20,72,0.08)] px-[30px] md:px-[60px] py-[30px] md:py-[50px] flex flex-col gap-[10px]">
            <h2 className="font-bold text-[#0a0a0a] text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[30px] md:leading-[38px] lg:text-[33px] lg:leading-[42px] mb-[8px] md:mb-[10px]">
              The Context
            </h2>
            <div className="max-w-[701px] lg:max-w-[500px] xl:max-w-[701px]">
              <p className="font-normal text-black mb-[10px] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27.6px]">
                The recurring invoice flow was functional but difficult to
                navigate. Key information lacked hierarchy, settings were
                fragmented, and users faced friction when configuring billing
                details.
              </p>
              <p className="font-normal text-black text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27.6px]">
                This feature directly impacted merchant workflow and customer
                billing experience — precision mattered.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* The Approach */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-[0px_0px_16.44px_0px_rgba(21,20,72,0.08)] px-[30px] md:px-[60px] py-[30px] md:py-[50px] flex flex-col gap-[20px] relative overflow-visible">
            <h2 className="font-bold text-[#0a0a0a] text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[30px] md:leading-[38px] lg:text-[33px] lg:leading-[42px] mb-[8px] md:mb-[10px]">
              The Approach
            </h2>
            <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
              <div className="flex-1 lg:max-w-[620px] flex flex-col gap-[24px] md:gap-[30px] lg:gap-[43px]">
                <ul className="font-normal text-black list-disc pl-[24px] md:pl-[30px] space-y-[8px] md:space-y-[10px] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27.6px]">
                  <li>Audited the existing invoice configuration flow</li>
                  <li>
                    Identified usability gaps and structural inconsistencies
                  </li>
                  <li>
                    Reorganized settings into clearer sections with stronger
                    visual hierarchy
                  </li>
                  <li>Reduced unnecessary steps and improved field grouping</li>
                  <li>
                    Refined interaction patterns to better align with merchant
                    expectations
                  </li>
                  <li>
                    Collaborated closely with product and engineering to
                    implement within system constraints
                  </li>
                </ul>
                <div className="bg-[#f6f4ff] rounded-[10px] px-[18px] md:px-[20px] lg:px-[25px] py-[14px] md:py-[16px] lg:py-[20px] relative">
                  <div
                    aria-hidden="true"
                    className="absolute border-2 border-[#d7cbe6] border-solid inset-0 pointer-events-none rounded-[10px]"
                  />
                  <p className="font-normal text-black relative text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27px]">
                    <span>
                      The goal was not aesthetic overhaul — it was structural
                      improvement.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* The Outcome */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-[0px_0px_16.44px_0px_rgba(21,20,72,0.08)] px-[30px] md:px-[60px] py-[30px] md:py-[50px] flex flex-col gap-[20px] relative overflow-visible">
            <h2 className="font-bold text-[#0a0a0a] text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] md:text-[30px] md:leading-[38px] lg:text-[33px] lg:leading-[42px] mb-[8px] md:mb-[10px]">
              The Outcome
            </h2>
            <div className="flex-1 lg:max-w-[620px] flex flex-col gap-[24px] md:gap-[30px] lg:gap-[43px]">
              <ul className="font-normal text-black list-disc pl-[24px] md:pl-[30px] space-y-[8px] md:space-y-[10px] text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27.6px]">
                <li>Clearer invoice configuration experience</li>
                <li>Improved scannability and decision flow</li>
                <li>Reduced friction during recurring setup</li>
                <li>A more cohesive and scalable billing interface</li>
              </ul>
              <div className="bg-[#f6f4ff] rounded-[10px] px-[18px] md:px-[20px] lg:px-[25px] py-[14px] md:py-[16px] lg:py-[20px] relative">
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-[#d7cbe6] border-solid inset-0 pointer-events-none rounded-[10px]"
                />
                <p className="font-normal text-black relative text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[17px] lg:leading-[27px]">
                  <span>
                    The updated feature better supported merchants managing
                    subscription-based payments within the platform.
                  </span>
                </p>
              </div>
            </div>
            {/* Image - at bottom on mobile, absolute positioned on desktop */}
            <div className="w-full max-w-[300px] md:max-w-[400px] mx-auto mt-[30px] lg:mt-0 lg:mx-0 lg:absolute lg:left-[640px] xl:left-[780px] lg:top-[-850px] xl:top-[-850px] lg:w-[384px]">
              <ImageWithFallback
                src={caseStudyImages.netCentsRecurringInvoice}
                alt="NetCents Recurring Invoices"
                className="w-full h-auto xl:translate-x-[45px]"
                sizes="(max-width: 767px) 300px, 400px"
                loading="eager"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Flow Diagram Section - Full Width */}
      <AnimatedSection delay={0.3}>
        {/* Mobile: Stacked vertical layout */}
        <div
          className="md:hidden w-full mb-[100px]"
          style={{
            backgroundImage:
              "linear-gradient(147deg, #E7F3FF 0%, #F3E7FF 100%)",
          }}
        >
          <MobileRecurringInvoices />
        </div>

        {/* Tablet/Desktop: Scaled original diagram */}
        <div className="hidden md:block relative w-full mb-[100px] md:mb-[140px] lg:mb-[180px]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 right-0 rounded-r-[240px] lg:rounded-r-[320px] xl:rounded-r-[380px] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(147deg, #E7F3FF 0%, #F3E7FF 100%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1200px] px-[40px] lg:px-[56px] pt-[96px] lg:pt-[112px] pb-[88px] lg:pb-[110px]">
            <div className="mx-auto max-w-[976px] text-left">
              <h2
                className="text-[#0a0a0a] text-[34px] leading-[42px] lg:text-[42px] lg:leading-[52px] xl:text-[48px] xl:leading-[58px]"
                style={{
                  fontFamily: "Lexend Deca, sans-serif",
                  fontWeight: 700,
                }}
              >
                Recurring Billing Series & Invoices
              </h2>
              <p className="mt-[16px] max-w-[871px] text-black text-[15px] leading-[24px] lg:text-[16px] lg:leading-[26px]">
                A structured redesign of the recurring billing workflow,
                improving clarity, hierarchy, and merchant control.
              </p>
            </div>

            <div className="mx-auto mt-[52px] grid max-w-[976px] grid-cols-3 items-start gap-[18px] lg:gap-[32px] xl:gap-[54px]">
              <div>
                <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08)]">
                  <ImageWithFallback
                    src={mobileRecurringInvoicesImages.invoicesList}
                    alt="Invoices list view"
                    className="block w-full h-auto"
                    sizes="(max-width: 1023px) calc((100vw - 80px - 36px) / 3), (max-width: 1279px) calc((100vw - 112px - 64px) / 3), 289px"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08)]">
                  <ImageWithFallback
                    src={mobileRecurringInvoicesImages.recurringSeries}
                    alt="Recurring series detail view"
                    className="block w-full h-auto"
                    sizes="(max-width: 1023px) calc((100vw - 80px - 36px) / 3), (max-width: 1279px) calc((100vw - 112px - 64px) / 3), 289px"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08)]">
                  <ImageWithFallback
                    src={mobileRecurringInvoicesImages.recurringInvoice}
                    alt="Recurring invoice detail view"
                    className="block w-full h-auto"
                    sizes="(max-width: 1023px) calc((100vw - 80px - 36px) / 3), (max-width: 1279px) calc((100vw - 112px - 64px) / 3), 289px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer / CTA */}
      <footer className="bg-[#232034] border-t-[11px] border-[#E9F2FF] px-[30px] md:px-[60px] lg:px-[82px] pt-[60px] md:pt-[70px] lg:pt-[100px] pb-[50px] lg:pb-[30px]">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-left lg:text-center text-white">
              <div className="mb-8 sm:mb-10">
                <h2 className="text-[28px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[37px] md:leading-[47px] font-bold mb-3 sm:mb-4 text-white">
                  Have something in mind?
                </h2>
                <p className="text-[20px] leading-[28px] sm:text-[23px] sm:leading-[36px] md:text-[27px] md:leading-[47px] font-normal text-white">
                  Let's talk.
                </p>
              </div>

              {/* Contact methods */}
              <div className="flex flex-col lg:flex-row lg:justify-center gap-5 sm:gap-6 lg:gap-8 mb-16 sm:mb-20">
                {/* Email */}
                <a
                  href="mailto:sara@skandi.io"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] text-white" />
                  <p className="text-[15px] sm:text-[16px] md:text-[20px] leading-[1.2] text-white">
                    sara@skandi.io
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:7782230420"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-[15px] sm:text-[16px] md:text-[20px] leading-[1.2] text-white">
                    778 223 0420
                  </p>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/saragunnarsson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    />
                    <circle
                      cx="4"
                      cy="4"
                      r="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[15px] sm:text-[16px] md:text-[20px] leading-[1.2] text-white">
                    linkedin.com/in/saragunnarsson
                  </p>
                </a>
              </div>

              {/* Footer info */}
              <div className="px-[0px] pt-[20px] pb-[0px]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <p className="text-white/70 text-left lg:text-center w-full text-[9px] lg:text-[12px] text-[#ffffff3b]">
                    © {new Date().getFullYear()} Skandi. Independent Product &
                    Design Partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
}
