import { Skeleton } from "./ui/skeleton";

export const UserCardSkeleton = () => {
  return (
    <div className="p-4 border rounded-lg hover:border-primary flex items-center gap-2 hover:shadow-lg hover:shadow-zinc-100 transition-all">
      <Skeleton className="w-8 h-8 rounded-full" />
      <Skeleton className="w-32 h-4" />
      <Skeleton className="w-10 h-4 ml-auto" />
    </div>
  );
};
