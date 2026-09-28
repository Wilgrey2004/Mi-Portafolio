import LiquidBackground from "@/components/liquid-background";
import Introduction from "./introduction";

export default function Home() {
  return (
    <main id="main-content" className="relative isolate overflow-hidden">
      <div className="relative flex min-h-[100svh] bg-[#09221e]">
        <LiquidBackground variant="home" />
        <Introduction />
      </div>
    </main>
  );
}
