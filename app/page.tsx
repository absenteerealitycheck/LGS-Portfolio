"use client";
import { HeroUIProvider } from "@heroui/react";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
export default function Home() {
  const PortfolioContent = dynamic(
    () => import("./components/PortfolioContent"),
    { ssr: false }
  );
  const PortfolioNavBar = dynamic(
    () => import("./components/PortfolioNav"),
    { ssr: false }
  );
  const BackToTopButton = dynamic(() => import("./components/BackToTopButton"), { ssr: false});
  return (
    <HeroUIProvider>
      <PortfolioNavBar></PortfolioNavBar>
      <div id="nav-container" className="z-80"></div>
      <BackToTopButton />
      <Toaster />
      <main className="w-full flex min-h-screen flex-col items-center justify-between dark">
        <PortfolioContent></PortfolioContent>
      </main>
    </HeroUIProvider>
  );
}
