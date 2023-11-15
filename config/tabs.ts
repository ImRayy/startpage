import { Tab } from "../src/types/TabInterface";
import { EverForest as ef } from "./colors";

const color1 = ef.color1;
const color2 = ef.color2;
const color3 = ef.color3;
const color4 = ef.color4;
const color5 = ef.color5;
const color6 = ef.color6;
const color7 = ef.color7;
const color8 = ef.color8;

const tab_title = {
  text: "day",
  image: {
    url: "https://ik.imagekit.io/rayshold/dotfiles/startpage/image.webp?updatedAt=1698519594209",
  },
};
const open_links_in_new_tab: boolean = false;
const tabs: Tab[] = [
  {
    name: "一",
    categories: [
      {
        name: "social media",
        links: [
          {
            name: "whatscrap",
            url: "https://web.whatsapp.com/",
            icon: "tabler:brand-whatsapp",
            color: color5,
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "tabler:brand-reddit",
            color: color3,
          },
          {
            name: "YouTube",
            url: "https://www.youtube.com/",
            icon: "tabler:brand-youtube",
            color: color2,
          },
        ],
      },
      {
        name: "Anime",
        links: [
          {
            name: "AniList",
            url: "https://anilist.co/home",
            icon: "simple-icons:anilist",
            color: color6,
          },
          {
            name: "pixiv",
            url: "https://www.pixiv.net/en/",
            icon: "simple-icons:pixiv",
            color: color7,
          },
          {
            name: "r/AnimeArt",
            url: "https://www.reddit.com/r/AnimeART/",
            icon: "tabler:brand-reddit",
            color: color3,
          },
        ],
      },
      {
        name: "music",
        links: [
          {
            name: "spotify",
            url: "https://open.spotify.com/",
            icon: "tabler:brand-spotify",
            color: color5,
          },
          {
            name: "radio",
            url: "https://r-a-d.io/",
            icon: "tabler:radio",
            color: color2,
          },
        ],
      },
    ],
  },
  {
    name: "二",
    categories: [
      {
        name: "resources",
        links: [
          {
            name: "tailwindcss",
            url: "https://tailwindcss.com/",
            icon: "tabler:brand-tailwind",
            color: color7,
          },
          {
            name: "adobe color",
            url: "https://icon-sets.iconify.design/tabler/brand-adobe/",
            icon: "tabler:brand-adobe",
            color: color2,
          },
          {
            name: "real time colors",
            url: "https://www.realtimecolors.com",
            icon: "tabler:color-swatch",
            color: color6,
          },
          {
            name: "nerd font icons",
            url: "https://icon-sets.iconify.design/?query=icon",
            icon: "tabler:sunglasses",
            color: color3,
          },
          {
            name: "phind",
            url: "https://www.phind.com/",
            icon: "tabler:brand-openai",
            color: color4,
          },
          {
            name: "ChatGPT",
            url: "https://chat.openai.com/chat",
            icon: "tabler:brand-openai",
            color: color6,
          },
        ],
      },
      {
        name: "code",
        links: [
          {
            name: "GitHub",
            url: "https://github.com/",
            icon: "tabler:brand-github",
            color: color1,
          },
          {
            name: "pretty code",
            url: "https://ray.so/",
            icon: "tabler:device-ipad-horizontal-code",
            color: color8,
          },
          {
            name: "snippet generator",
            url: "https://snippet-generator.app/",
            icon: "tabler:code",
            color: color4,
          },
        ],
      },
      {
        name: "games",
        links: [
          {
            name: "monketype",
            url: "https://monkeytype.com/",
            icon: "tabler:keyboard",
            color: color4,
          },
          {
            name: "zty.pe",
            url: "https://zty.pe/",
            icon: "tabler:rocket",
            color: color2,
          },
        ],
      },
    ],
  },
];
export { tab_title, open_links_in_new_tab, tabs };
