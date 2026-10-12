import { createFileRoute } from '@tanstack/react-router';
import { MultiplicationTable } from '@/components/MultiplicationTable';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <ThemeSwitcher />
      <MultiplicationTable base={2} />
    </div>
  );
}
