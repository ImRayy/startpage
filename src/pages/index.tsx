import { Roboto } from "next/font/google";
import Tabs from "@/components/Tabs";
import Day from "@/components/TimeDate/Day";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main
      className={roboto.className}
      style={{
        background:
          "url('https://ik.imagekit.io/rayshold/dotfiles/startpage/background.webp?updatedAt=1698519594804') center/cover no-repeat",
      }}
    >
      <div className="min-h-screen items-center flex justify-center backdrop-blur-md">
        <div className="w-5/6 lg:w-[62rem] h-[30rem] p-4 flex gap-2 bg-primary shadow-md border-2 border-color5">
          {/* IMAGE */}
          <div
            className="h-full  w-full overflow-hidden sm:w-4/6 lg:w-3/6 shadow-md gap-4"
            style={{
              background:
                "url('https://ik.imagekit.io/rayshold/dotfiles/startpage/image.webp?updatedAt=1698519594209') center/cover",
            }}
          >
            <Day />
          </div>
          {/* LINKS */}
          <div className="p-10 w-full h-full rounded-xl hidden sm:flex sm:items-center ">
            <Tabs />
          </div>
        </div>
      </div>
    </main>
  );
}
