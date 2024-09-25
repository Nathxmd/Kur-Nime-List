import Header from "@/components/Dashboard/header";
import Link from "next/link";

const { authUserSession } = require("@/libs/auth-libs");
const { default: prisma } = require("@/libs/prisma");

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <ection className="mt-4 px-4 w-full">
      <Header title={"My Comments"} />
      <div className="grid grid-cols-1 py-4 gap-4">
        {comments.map((comment) => {
          return (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-primary text-color-dark p-4"
            >
              <p className="text-sm">{comment.anime_title}</p>
              <p className="italic">{comment.comment}</p>
            </Link>
          );
        })}
      </div>
    </ection>
  );
};

export default Page;
