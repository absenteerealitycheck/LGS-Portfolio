"use client";
import { HeroUIProvider } from "@heroui/react";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import BackToTopButton from "./components/BackToTopButton";
import PortfolioNavBar from "./components/PortfolioNav";
export default function Home() {
  const PortfolioContent = dynamic(
    () => import("./components/PortfolioContent"),
    { ssr: false }
  );
  return (
    <HeroUIProvider>
      <PortfolioNavBar></PortfolioNavBar>
      <div id="nav-container" className="z-80"></div>
      <BackToTopButton />
      <Toaster />
      <main className="w-full flex min-h-screen flex-col items-center justify-between">
        <PortfolioContent></PortfolioContent>
      </main>
    </HeroUIProvider>
  );
}
