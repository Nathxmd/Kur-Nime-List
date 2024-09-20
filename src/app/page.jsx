import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="View All" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
