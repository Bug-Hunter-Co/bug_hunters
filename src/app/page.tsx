'use client'
import { Navbar } from "@/components/layout/Navbar";
import { ButtonMode } from "@/components/ui/ButtonMode";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh dark:bg-[#1E1E1E] bg-[#FFFFFB]">
      <Navbar />
    </div>
  );
}
