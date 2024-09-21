import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";
import {
  getAnimeResponse,
  getMangaResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 4);

  return (
    <>
      <section>
        <Header title="Top Anime" linkTitle="View All" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommended Anime" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
