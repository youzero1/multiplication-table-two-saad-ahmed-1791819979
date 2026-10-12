export interface ThemePalette {
  page: string;
  card: string;
  cardRing: string;
  cardShadow: string;
  heading: string;
  subtitle: string;
  tableRing: string;
  rowEven: string;
  rowOdd: string;
  rowHover: string;
  rowText: string;
  rowMuted: string;
  answer: string;
}

export interface Theme {
  id: string;
  name: string;
  /** Small gradient dot shown on the theme's chip. */
  swatch: string;
  palette: ThemePalette;
}

export const themes: Theme[] = [
  {
    id: 'light',
    name: 'Light',
    swatch: 'bg-gradient-to-br from-white to-indigo-300',
    palette: {
      page: 'bg-gradient-to-br from-indigo-50 via-slate-50 to-sky-100',
      card: 'bg-white',
      cardRing: 'ring-1 ring-slate-100',
      cardShadow: 'shadow-indigo-200/40',
      heading: 'text-slate-800',
      subtitle: 'text-slate-400',
      tableRing: 'ring-slate-100',
      rowEven: 'bg-indigo-50/60',
      rowOdd: 'bg-white',
      rowHover: 'hover:bg-indigo-100',
      rowText: 'text-slate-700',
      rowMuted: 'text-slate-400',
      answer: 'text-indigo-600',
    },
  },
  {
    id: 'dark',
    name: 'Dark',
    swatch: 'bg-gradient-to-br from-slate-600 to-slate-950',
    palette: {
      page: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
      card: 'bg-slate-900',
      cardRing: 'ring-1 ring-slate-800',
      cardShadow: 'shadow-black/50',
      heading: 'text-slate-100',
      subtitle: 'text-slate-500',
      tableRing: 'ring-slate-800',
      rowEven: 'bg-slate-800/50',
      rowOdd: 'bg-slate-900',
      rowHover: 'hover:bg-slate-800',
      rowText: 'text-slate-200',
      rowMuted: 'text-slate-500',
      answer: 'text-sky-400',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    swatch: 'bg-gradient-to-br from-cyan-400 to-blue-800',
    palette: {
      page: 'bg-gradient-to-br from-sky-950 via-cyan-950 to-blue-950',
      card: 'bg-sky-900/50 backdrop-blur-sm',
      cardRing: 'ring-1 ring-sky-700/50',
      cardShadow: 'shadow-black/40',
      heading: 'text-cyan-100',
      subtitle: 'text-sky-300/70',
      tableRing: 'ring-sky-700/50',
      rowEven: 'bg-sky-800/30',
      rowOdd: 'bg-transparent',
      rowHover: 'hover:bg-sky-800/50',
      rowText: 'text-sky-100',
      rowMuted: 'text-sky-400/70',
      answer: 'text-cyan-300',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    swatch: 'bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500',
    palette: {
      page: 'bg-gradient-to-br from-amber-100 via-orange-100 to-rose-200',
      card: 'bg-white',
      cardRing: 'ring-1 ring-orange-200/70',
      cardShadow: 'shadow-orange-300/40',
      heading: 'text-orange-950',
      subtitle: 'text-orange-400',
      tableRing: 'ring-orange-100',
      rowEven: 'bg-orange-50',
      rowOdd: 'bg-white',
      rowHover: 'hover:bg-orange-100',
      rowText: 'text-stone-700',
      rowMuted: 'text-orange-300',
      answer: 'text-rose-600',
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    swatch: 'bg-gradient-to-br from-lime-300 to-emerald-700',
    palette: {
      page: 'bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100',
      card: 'bg-white',
      cardRing: 'ring-1 ring-emerald-100',
      cardShadow: 'shadow-emerald-200/50',
      heading: 'text-emerald-950',
      subtitle: 'text-emerald-600/70',
      tableRing: 'ring-emerald-100',
      rowEven: 'bg-emerald-50/70',
      rowOdd: 'bg-white',
      rowHover: 'hover:bg-emerald-100',
      rowText: 'text-stone-700',
      rowMuted: 'text-emerald-400',
      answer: 'text-emerald-600',
    },
  },
];

export const DEFAULT_THEME_ID = 'light';
