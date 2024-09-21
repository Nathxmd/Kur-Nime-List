"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async (page) => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      <HeaderMenu title={"Populer Anime"} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
