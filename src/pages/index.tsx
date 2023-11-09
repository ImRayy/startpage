import Tabs from "@/components/Tabs/Tabs";
import Head from "next/head";
import { background_image } from "../../config/general";

interface HomeProps {
  isPageLoaded: boolean;
}
export default function Home({ isPageLoaded }: HomeProps) {
  return (
    <main
      className="font-roboto"
      style={{
        background: `url(${background_image.url}) center/cover no-repeat`,
      }}
    >
      <Head>
        <title>Startpage</title>
      </Head>
      <div className="min-h-screen w-full flex flex-col justify-center items-center backdrop-blur-sm">
        <Tabs enableAnimations={isPageLoaded} />
      </div>
    </main>
  );
}
