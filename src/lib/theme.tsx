import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { themes, DEFAULT_THEME_ID, type Theme } from './themes';

const STORAGE_KEY = 'table-of-two-theme';

interface ThemeContextValue {
  theme: Theme;
  setThemeId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readSavedThemeId(): string {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && themes.some((t) => t.id === saved)) return saved;
  } catch {
    // localStorage unavailable — fall back to the default theme.
  }
  return DEFAULT_THEME_ID;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<string>(readSavedThemeId);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, themeId);
    } catch {
      // Ignore write failures — the theme simply won't persist.
    }
  }, [themeId]);

  const theme = themes.find((t) => t.id === themeId) ?? themes[0];

  return (
    <ThemeContext.Provider value={{ theme, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
