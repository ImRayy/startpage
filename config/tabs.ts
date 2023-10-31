import { Tab } from "../Types/TabInterface";

const color1 = "#d3c6aa";
const color2 = "#e67e80";
const color3 = "#e69875";
const color4 = "#dbbc7f";
const color5 = "#a7c080";
const color6 = "#83c092";
const color7 = "#7fbbb3";
const color8 = "#d699b6";

const tab_title = {
  text: "day",
  image: {
    url: "image.webp",
  },
};
const open_links_in_new_tab: boolean = true;
const tabs: Tab[] = [
  {
    name: "tab1",
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
        ],
      },
      {
        name: "work",
        links: [
          {
            name: "tailwindcss",
            url: "https://tailwindcss.com/",
            icon: "tabler:brand-tailwind",
            color: color7,
          },
          {
            name: "github",
            url: "https://github.com/",
            icon: "tabler:brand-github",
            color: "white",
          },
          {
            name: "ChatGPT",
            url: "https://chat.openai.com/chat",
            icon: "tabler:brand-openai",
            color: color6,
          },
          {
            name: "phind",
            url: "https://www.phind.com/",
            icon: "tabler:brand-openai",
            color: "white",
          },
        ],
      },
      {
        name: "entertainment",
        links: [
          {
            name: "spotify",
            url: "https://open.spotify.com/",
            icon: "tabler:brand-spotify",
            color: color5,
          },
          {
            name: "YouTube",
            url: "https://www.youtube.com/",
            icon: "tabler:brand-youtube",
            color: color2,
          },
        ],
      },
    ],
  },
  {
    name: "tab1",
    categories: [
      {
        name: "FUCK FACE",
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
        ],
      },
    ],
  },
];
export { tab_title, open_links_in_new_tab, tabs };
