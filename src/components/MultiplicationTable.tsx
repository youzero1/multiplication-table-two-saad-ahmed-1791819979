interface MultiplicationTableProps {
  base: number;
  count?: number;
}

export function MultiplicationTable({ base, count = 12 }: MultiplicationTableProps) {
  const multipliers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-indigo-200/40 ring-1 ring-slate-100">
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-800">
        Table of {base}
      </h1>
      <p className="mb-6 mt-1 text-center text-sm text-slate-400">
        Multiplication facts from 1 to {count}
      </p>
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-100">
        {multipliers.map((n, index) => (
          <div
            key={n}
            className={`flex items-center justify-between px-6 py-3 text-lg transition-colors hover:bg-indigo-100 ${
              index % 2 === 0 ? 'bg-indigo-50/60' : 'bg-white'
            }`}
          >
            <span className="font-semibold text-slate-700">
              {base} <span className="text-slate-400">×</span> {n}
            </span>
            <span className="text-slate-300">=</span>
            <span className="w-14 text-right text-xl font-bold text-indigo-600">
              {base * n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
