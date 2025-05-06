import Footer from "@/components/element/footer";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { Button } from "@/components/ui/button";
import TiltedCard from "@/components/ui/tilted-card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const words = [
    "help businesses grow.",
    "engage users effectively.",
    "achieve project goals.",
    "boost online presence.",
    "bring visions to life.",
  ];
  const greetingInDifferentLanguages = [
    "Hello, I'm",
    "សួស្តី ខ្ញុំឈ្មោះ",
    "你好，我是",
    "こんにちは、私は",
    "สวัสดีครับ ผมชื่อ",
    "안녕하세요, 저는",
    "Привет, я",
    "Hola, soy",
    "Bonjour, je suis",
    "Ciao, sono",
    "Merhaba, ben",
    "Salut, je suis",
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center mt-10 sm:mt-0 min-h-screen px-4">
        <main className="grid grid-cols-1 md:grid-cols-2 items-center sm:items-start gap-8">
          <div className="my-auto">
            <div className="relative max-w-[90vw] overflow-hidden">
              <h1 className="text-xl md:text-2xl truncate w-auto leading-10 font-medium text-center sm:text-left">
                👋 <AnimatedTextCycle
                  words={greetingInDifferentLanguages}
                  interval={3000}
                  className={"text-xl md:text-2xl font-medium"}
                />{" "}Mantha
              </h1>
            </div>
            <div className="mb-8 max-w-[90vw] relative">
              <h1 className="text-2xl sm:text-4xl font-light text-center sm:text-left text-muted-foreground">
                A software engineer and designer based in Cambodia. I love to
                create things that <AnimatedTextCycle
                  words={words}
                  interval={3500}
                  className={"text-foreground font-semibold block sm:inline-block"}
                />
              </h1>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4">
              <a href="https://t.me/phalla404" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full py-0 ps-0 pe-4 gap-0 hover:cursor-pointer relative">
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
                    <span className="whitespace-nowrap flex items-center gap-1">
                      Contact @mantha <ArrowUpRight strokeWidth={1.5} className="h-5 w-5" />
                    </span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center relative">
            <div className="relative w-[320px] h-[320px]">
              <TiltedCard
                imageSrc="/mantha-profile-pic.png"
                altText="Mantha Profile Image"
                captionText="Mantha"
                containerHeight="320px"
                containerWidth="320px"
                imageHeight="320px"
                imageWidth="320px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Web Developer/Designer
                  </p>
                }
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
