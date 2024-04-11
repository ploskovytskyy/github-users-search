import { UsernameField } from "@/components/username-field";
import { Users } from "@/components/users";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <section className="py-10 lg:pt-12 lg:pb-5 px-5">
        <h1 className="text-3xl lg:text-5xl font-bold text-center">
          Github Users
        </h1>
      </section>
      <section className="sticky top-0 left-0 z-10 space-y-2 shadow-sm bg-white/80 backdrop-blur-sm py-6">
        <div className="max-w-xl mx-auto px-4">
          <UsernameField />
        </div>
      </section>
      <section className="relative max-w-xl mx-auto py-6 space-y-2 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </section>
    </main>
  );
}
