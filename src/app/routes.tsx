import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { AutozenCaseStudy } from "./pages/AutozenCaseStudy";
import { NetCentsCaseStudy } from "./pages/NetCentsCaseStudy";
import { NetCentsRecurringInvoices } from "./pages/NetCentsRecurringInvoices";
import { ForgeCaseStudy } from "./pages/ForgeCaseStudy";
import { ScrollToTopLayout } from "./components/ScrollToTop";

export const router = createBrowserRouter(
  [
    {
      Component: ScrollToTopLayout,
      children: [
        {
          path: "/",
          Component: LandingPage,
        },
        {
          path: "/case-study/autozen",
          Component: AutozenCaseStudy,
        },
        {
          path: "/case-study/netcents",
          Component: NetCentsCaseStudy,
        },
        {
          path: "/case-study/netcents-recurring-invoices",
          Component: NetCentsRecurringInvoices,
        },
        {
          path: "/case-study/forge",
          Component: ForgeCaseStudy,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);
