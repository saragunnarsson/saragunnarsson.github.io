import { useLayoutEffect } from 'react';
import { useLocation, Outlet } from 'react-router';

export function ScrollToTopLayout() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return <Outlet />;
}
