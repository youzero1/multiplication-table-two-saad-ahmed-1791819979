import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { ThemeProvider, useTheme } from '@/lib/theme';

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// The app shell: anything rendered here (nav, footer, providers) appears on every page.
// <Outlet /> is where the matched page renders.
function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedShell />
    </ThemeProvider>
  );
}

function ThemedShell() {
  const { theme } = useTheme();
  return (
    <div
      className={`flex min-h-screen items-center justify-center p-6 transition-colors duration-500 ${theme.palette.page}`}
    >
      <Outlet />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <p className="text-lg">This page does not exist.</p>
      <Link to="/" className="text-sm underline underline-offset-4">
        Go to the home page
      </Link>
    </div>
  );
}
