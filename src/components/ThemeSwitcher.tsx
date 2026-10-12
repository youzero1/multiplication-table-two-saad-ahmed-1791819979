import { themes } from '@/lib/themes';
import { useTheme } from '@/lib/theme';

export function ThemeSwitcher() {
  const { theme, setThemeId } = useTheme();

  return (
    <div className="flex max-w-md flex-wrap items-center justify-center gap-3">
      {themes.map((t) => {
        const isActive = t.id === theme.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setThemeId(t.id)}
            aria-pressed={isActive}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 ${
              theme.palette.heading
            } ${isActive ? 'ring-2 ring-current' : 'opacity-60 hover:opacity-100'}`}
          >
            <span
              className={`h-4 w-4 rounded-full ring-1 ring-black/10 ${t.swatch}`}
            />
            {t.name}
          </button>
        );
      })}
    </div>
  );
}
