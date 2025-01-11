import CoverParticles from "@/components/cover-particles";
import TransitionPages from "@/components/transition-pages";
import Image from "next/image";
import Introduction from "./introduction";

export default function Home() {
  return (
    <main>
      <TransitionPages />
      <div className="flex main-h-[100vh] bg-norepeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
