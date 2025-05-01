import ClipPathImage from "@/components/element/clip-path-image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd, House, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const words = [
    "help businesses grow.",
    "engage users effectively.",
    "achieve project goals.",
    "boost online presence.",
    "bring visions to life.",
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center mt-10 sm:mt-0 min-h-screen px-4">
        <main className="grid grid-cols-1 md:grid-cols-2 items-center sm:items-start gap-8">
          <div className="my-auto">
            <h1 className="text-xl md:text-2xl font-normal text-center sm:text-left">
              👋 Hello, I’m Mantha
            </h1>
            <div className="mt-3 mb-8 max-w-[90vw] relative">
              <h1 className="text-2xl sm:text-4xl font-light text-center sm:text-left text-muted-foreground">
                A software engineer and designer based in Cambodia. I love to
                create things that <AnimatedTextCycle
                  words={words}
                  interval={3000}
                  className={"text-foreground font-semibold block sm:inline-block"}
                />
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full py-0 ps-0 pe-4 gap-0 hover:cursor-pointer group relative w-auto">
                <div className="me-2 flex aspect-square h-full p-1.5">
                  <Image
                    className="h-auto w-full rounded-full"
                    src="/mantha-profile-pic-sm.png?"
                    alt="Mantha Profile Image"
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </div>
                <div className="h-full flex items-center py-2">
                  <span className="transition-opacity duration-300 group-hover:opacity-0 group-hover:hidden block whitespace-nowrap">
                    @mantha
                  </span>
                  <span className="transition-opacity duration-300 opacity-0 hidden group-hover:opacity-100 group-hover:block whitespace-nowrap">
                    Contact @mantha
                  </span>
                </div>
              </Button>
            </div>
          </div>
          <div className="w-full flex justify-center relative">
            <div className="w-60 sm:w-96">
              <ClipPathImage />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center my-10">
          <Link
            className="flex items-center gap-2 group"
            href="/"
          >
            <House className="w-6 h-6" strokeWidth={1} />
            <span className="group-hover:underline underline-offset-4">Home</span>
            <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
          </Link>
          <Link
            className="flex items-center gap-2 group"
            href="/projects"
          >
            <GalleryVerticalEnd className="w-6 h-6" strokeWidth={1} />
            <span className="group-hover:underline underline-offset-4">Projects</span>
            <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
          </Link>
          <Link
            className="flex items-center gap-2 group"
            href="/about"
          >
            <Info className="w-6 h-6" strokeWidth={1} />
            <span className="group-hover:underline underline-offset-4">About</span>
            <span className="inline-block transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">→</span>
          </Link>
        </footer>
      </div>
    </>
  );
}
