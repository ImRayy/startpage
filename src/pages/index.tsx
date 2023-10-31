import Tabs from "@/components/Tabs/Tabs";
import { background_image } from "../../config/general";

export default function Home() {
  return (
    <main
      className="font-roboto"
      style={{
        background: `url(${background_image.url}) center/cover no-repeat`,
      }}
    >
      <div className="min-h-screen w-full  flex flex-col justify-center items-center backdrop-blur-sm">
        <Tabs />
      </div>
    </main>
  );
}
