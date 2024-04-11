import { getSingleUser } from "@/lib/services/get-single-user";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  BookIcon,
  BriefcaseIcon,
  MailIcon,
  Undo2,
  UsersIcon,
} from "lucide-react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function UserPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getSingleUser(username);

  if (!user) notFound();

  const {
    name,
    login,
    avatar_url,
    followers,
    following,
    company,
    email,
    blog,
  } = user.data;

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
        <Image
          alt={name ?? login}
          src={avatar_url}
          width={80}
          height={80}
          className="object-cover rounded-full bg-primary/5"
        />
        <div className="grid gap-2">
          <h1 className="text-2xl md:text-4xl font-bold">{name ?? login}</h1>
          <div className="flex items-center">
            <UsersIcon className="w-5 h-5 flex-shrink-0 mr-3" />
            <span>
              <span className="font-semibold">{followers} </span>
              followers
            </span>
            <span className="opacity-20 mx-2">|</span>
            <span>
              <span className="font-semibold">{following} </span>
              following
            </span>
          </div>
        </div>
      </div>

      <hr className="mb-6 md:mb-10" />

      <section className="md:border md:px-5 md:py-6 rounded-lg w-max">
        <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-3">Details:</h2>
        <div className="grid justify-start md:text-lg">
          <div className="grid md:items-center gap-1 border-b py-4 md:py-5 md:flex">
            <span className="flex items-center">
              <BriefcaseIcon className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0 mr-1.5" />
              <span className="font-semibold min-w-[160px]">Company</span>
            </span>
            {company ? (
              <p className="">{company}</p>
            ) : (
              <span className="opacity-50">Not available</span>
            )}
          </div>
          <div className="grid items-center gap-1 border-b py-4 md:py-5 md:flex">
            <span className="flex items-center">
              <MailIcon className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0 mr-1.5" />
              <span className="font-semibold min-w-[160px]">Email</span>
            </span>
            {email ? (
              <Link
                href={`mailto:${email}`}
                className="hover:underline hover:text-primary"
              >
                {email}
              </Link>
            ) : (
              <span className="opacity-50">Not available</span>
            )}
          </div>
          <div className="grid items-center gap-1 pt-4 md:pt-5 md:flex">
            <span className="flex items-center">
              <BookIcon className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0 mr-1.5" />
              <span className="font-semibold min-w-[160px]">Blog</span>
            </span>
            {blog ? (
              <Link href={blog} className="hover:underline hover:text-primary">
                {blog}
              </Link>
            ) : (
              <span className="opacity-50">Not available</span>
            )}
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
