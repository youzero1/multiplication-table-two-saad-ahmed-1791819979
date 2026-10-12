import { useTheme } from '@/lib/theme';

interface MultiplicationTableProps {
  base: number;
  count?: number;
}

export function MultiplicationTable({ base, count = 12 }: MultiplicationTableProps) {
  const { theme } = useTheme();
  const p = theme.palette;
  const multipliers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className={`w-full max-w-md rounded-3xl p-8 shadow-xl transition-colors duration-500 ${p.card} ${p.cardRing} ${p.cardShadow}`}
    >
      <h1
        className={`text-center text-3xl font-extrabold tracking-tight ${p.heading}`}
      >
        Table of {base}
      </h1>
      <p className={`mb-6 mt-1 text-center text-sm ${p.subtitle}`}>
        Multiplication facts from 1 to {count}
      </p>
      <div className={`overflow-hidden rounded-2xl ring-1 ${p.tableRing}`}>
        {multipliers.map((n, index) => (
          <div
            key={n}
            className={`flex items-center justify-between px-6 py-3 text-lg transition-colors ${p.rowHover} ${
              index % 2 === 0 ? p.rowEven : p.rowOdd
            }`}
          >
            <span className={`font-semibold ${p.rowText}`}>
              {base} <span className={p.rowMuted}>×</span> {n}
            </span>
            <span className={p.rowMuted}>=</span>
            <span className={`w-14 text-right text-xl font-bold ${p.answer}`}>
              {base * n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
