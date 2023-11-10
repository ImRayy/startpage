import React, { useState, useRef, useEffect } from "react";
import Input from "../Input";
import { search_engines } from "../../../config/general";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

interface SearchProps {
  isShow: boolean;
}
const Search = ({ isShow }: SearchProps) => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const engines = search_engines.map((i) => `!${i[1]}`);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (isShow && inputRef.current) {
      inputRef.current.focus();
    } else if (inputRef.current) {
      inputRef.current.blur();
    }
  }, [isShow]);
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };
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
    <AnimatePresence mode="wait">
      {isShow && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.4,
            type: "linear",
          }}
          className="w-full bottom-0  h-full flex flex-col items-center justify-center absolute px-16 bg-black bg-opacity-30 backdrop-blur-md"
        >
          <form className="w-full" onSubmit={submitHandler}>
            <Input
              type="text"
              placeholder="search"
              value={query}
              onChange={inputChangeHandler}
              ref={inputRef}
            />
          </form>
          {/* Available search engines list */}
          <div className="w-full flex gap-2 text-md">
            {search_engines.map((engine, index) => (
              <span
                key={index}
                className={`text-white ${
                  query.split("")[1] === engine[1] ? "" : "text-opacity-60"
                }`}
              >
                {query.split("")[1] === engine[1]
                  ? `${engine[2]}`
                  : `!${engine[1]}`}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Search;
