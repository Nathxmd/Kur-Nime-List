import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Search for ${decodedKeyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
