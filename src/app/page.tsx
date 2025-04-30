import ClipPathImage from "@/components/element/clip-path-image";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import Image from "next/image";

export default function Home() {

  const words = [
    "live on the internet.",
    "solve user problems.",
    "are fast and responsive.",
    "look great on any device.",
    "are accessible to everyone.",
    "push the boundaries of the web.",
  ];
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen px-4">
      <main className="grid grid-cols-1 md:grid-cols-2 items-center sm:items-start gap-8">
        <div className="relative">
          <h1 className="text-2xl font-medium text-center sm:text-left">
            👋 Hello, I’m Mantha
          </h1>
          <h1 className="mt-4 text-3xl text-muted-foreground font-semibold text-center sm:text-left">
            I’m a software engineer and designer based in Cambodia. I love to
            create things that <span><AnimatedTextCycle words={words} className="font-semibold text-foreground"/></span>
          </h1>
        </div>
        <div className="w-60 md:w-90 relative">
          <ClipPathImage />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          About →
        </a>
      </footer>
    </div>
  );
}
