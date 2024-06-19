import DashboardSkeleton from '@/app/ui/skeletons';

// this loading component is applicable for the page file only and all other nested route defined in the same folder as this file
// So it will not affect the layout.tsx file
export default function Loading() {
  return <DashboardSkeleton />;
}
