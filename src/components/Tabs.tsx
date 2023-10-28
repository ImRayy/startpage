import React from "react";
import Button from "./Button";
import {
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconBrandReddit,
  IconBrandYoutube,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandOpenai,
  IconBrandSpotify,
} from "@tabler/icons-react";

const Tabs = () => {
  const icon = ["faWhatsapp"];
  return (
    <div className="flex flex-col gap-3 h-full">
      <h3 className="uppercase border-zinc-700 text-sm font-bold  text-crust">
        Social Media
      </h3>
      <div className="flex gap-3 flex-wrap mb-2 ">
        <Button href="https://web.whatsapp.com/">
          <IconBrandWhatsapp className="text-color5" />
          WhatsCrap
        </Button>
        <Button href="https://www.reddit.com/">
          <IconBrandReddit className="text-color3" />
          reddit
        </Button>
        <Button href="https://web.telegram.org/">
          <IconBrandTelegram className="text-color7" />
          Telegram
        </Button>
      </div>
      <hr className="border-zinc-700" />
      <h3 className="uppercase border-zinc-700 text-sm font-bold  text-crust">
        Work
      </h3>
      <div className="flex gap-3 flex-wrap mb-2">
        <Button href="https://tailwindcss.com/">
          <IconBrandTailwind className="text-color7" />
          tailwindcss
        </Button>
        <Button href="https://github.com/">
          <IconBrandGithub />
          GitHub
        </Button>
        <Button href="https://chat.openai.com/chat">
          <IconBrandOpenai className="text-color6" />
          ChatGPT
        </Button>
      </div>
      <hr className="border-zinc-700" />
      <h3 className="uppercase border-zinc-700 text-sm font-bold  text-crust">
        entertainment
      </h3>
      <div className="flex gap-3 flex-wrap mb-2">
        <Button href="https://open.spotify.com/">
          <IconBrandSpotify className="text-color5" />
          Spotify
        </Button>
        <Button href="https://www.youtube.com/">
          <IconBrandYoutube className="text-color2" />
          YouTube
        </Button>
      </div>
    </div>
  );
};

export default Tabs;
