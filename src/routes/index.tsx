import { createFileRoute } from '@tanstack/react-router';
import { MultiplicationTable } from '@/components/MultiplicationTable';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return <MultiplicationTable base={2} />;
}
