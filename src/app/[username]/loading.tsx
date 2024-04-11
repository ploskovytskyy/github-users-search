import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookIcon, BriefcaseIcon, MailIcon, Undo2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserLoading() {
  return (
    <main className="grid container">
      <Link href="/" className="my-5 w-max">
        <Button variant="ghost" className="gap-2" asChild>
          <span>
            <Undo2 className="w-4 h-4" />
            Back
          </span>
        </Button>
      </Link>
      <div className="flex items-center gap-4 pb-6">
        <Skeleton className="w-20 h-20 rounded-full" />
        <div className="grid gap-2">
          <Skeleton className="w-64 h-10" />
          <div className="flex items-center">
            <span>
              <Skeleton className="w-20 h-6" />
            </span>
            <span className="opacity-20 mx-2">|</span>
            <span>
              <Skeleton className="w-20 h-6" />
            </span>
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <section className="border px-5 py-6 rounded-lg w-max">
        <h2 className="text-2xl font-bold mb-3">Details:</h2>
        <div className="grid justify-start text-lg">
          <div className="flex items-center gap-1 border-b py-5">
            <BriefcaseIcon className="w-6 h-6 flex-shrink-0 mr-1.5" />
            <span className="font-semibold min-w-[160px]">Company</span>{" "}
            <Skeleton className="w-40 h-6" />
          </div>
          <div className="flex items-center gap-1 border-b py-5">
            <MailIcon className="w-6 h-6 flex-shrink-0 mr-1.5" />
            <span className="font-semibold min-w-[160px]">Email</span>{" "}
            <Skeleton className="w-44 h-6" />
          </div>
          <div className="flex items-center gap-1 pt-5">
            <BookIcon className="w-6 h-6 flex-shrink-0 mr-1.5" />
            <span className="font-semibold min-w-[160px]">Blog</span>{" "}
            <Skeleton className="w-52 h-6" />
          </div>
        </div>
      </section>
      <Link href="/" className="my-5 w-max">
        <Button variant="ghost" className="gap-2" asChild>
          <span>
            <Undo2 className="w-4 h-4" />
            Back
          </span>
        </Button>
      </Link>
    </main>
  );
}
