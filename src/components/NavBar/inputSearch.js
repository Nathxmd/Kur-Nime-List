"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="search"
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-1.5 end-1" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
