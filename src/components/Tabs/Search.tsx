import React, { useState } from "react";
import Input from "../Input";
import { search_engines } from "../../../config/general";
import { useRouter } from "next/router";

interface SearchProps {
  isShow: boolean;
}
const Search = ({ isShow }: SearchProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const engines = search_engines.map((i) => `!${i[1]}`);

  // Form submit handler
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Selected search engine, ex: !b = brave, !g = google
    const selectedSearchEngine = query.split("").splice(0, 2).join("");

    // Filter out engine hint, ex: !b, !g, !d etc
    let search_query = query.split(" ");
    search_query.splice(0, 1);

    // Router push with selected search engine
    if (engines.includes(selectedSearchEngine)) {
      const url = search_engines.filter(
        (i) => i[1] === selectedSearchEngine.split("")[1]
      )[0][0];
      router.push(url + search_query.join("+"));
    } else {
      router.push(search_engines[0][0] + search_query.join(" "));
    }
  };
  return (
    <div
      className={`w-full  h-full flex flex-col items-center justify-center absolute backdrop-blur-md bg-black bg-opacity-40 px-16 transition-transform duration-500 ${
        isShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <form className="w-full" onSubmit={submitHandler}>
        <Input
          placeholder="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      {/* Available search engines list */}
      <div className="w-full flex gap-2 text-md text-opacity-60 text-white">
        {search_engines.map((engine, index) => (
          <span key={index}>!{engine[1]}</span>
        ))}
      </div>
    </div>
  );
};

export default Search;
