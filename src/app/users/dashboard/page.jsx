import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h5 className="text-xl font-bold">WELCOME, {user.name}</h5>
      <Image src={user.image} alt="..." width={250} height={250} />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/bookmark"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Bookmark
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold py-3 px-4 text-xl"
        >
          My Comments
        </Link>
      </div>
    </div>
  );
};

export default Page;
