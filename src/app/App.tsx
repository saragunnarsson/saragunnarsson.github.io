import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Force scroll to top on initial load
    window.history.scrollRestoration = 'manual';
  }, []);

  return <RouterProvider router={router} />;
}