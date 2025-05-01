import Footer from "@/components/element/footer";
import { Logos3 } from "@/components/logos3";

export default function About() {

  const demoData = {
    heading: "Tech Stack",
    logos: [
      {
        id: "logo-1",
        description: "Astro",
        image: "https://www.shadcnblocks.com/images/block/logos/astro.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-2",
        description: "Figma",
        image: "https://www.shadcnblocks.com/images/block/logos/figma.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-3",
        description: "Next.js",
        image: "https://www.shadcnblocks.com/images/block/logos/nextjs.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-4",
        description: "React",
        image: "https://www.shadcnblocks.com/images/block/logos/react.png",
        className: "h-7 w-auto",
      },
      {
        id: "logo-5",
        description: "Angular",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Angular_Logo_SVG.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-6",
        description: "Supabase",
        image: "https://www.shadcnblocks.com/images/block/logos/supabase.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-7",
        description: "Tailwind CSS",
        image: "https://www.shadcnblocks.com/images/block/logos/tailwind.svg",
        className: "h-4 w-auto",
      },
      {
        id: "logo-8",
        description: "Vercel",
        image: "https://www.shadcnblocks.com/images/block/logos/vercel.svg",
        className: "h-7 w-auto",
      },
      {
        id: "logo-9",
        description: ".NET Core",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
        className: "h-7 w-auto",
      },
    ],
  };

  return (
    <div className="container px-4 mx-auto my-10 sm:my-20">
      <div className="flex justify-center">
        <Footer />
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5 text-center sm:text-left">About Me</h1>
        <p className="text-lg text-muted-foreground text-center sm:text-left">
          My journey into the tech world began with a Computer Science degree from 2015 to 2019. Fresh out of university, I started as an intern, quickly finding my footing in web development. Since then, I&apos;ve gained diverse experience across various roles and companies, leading me to my current position as a Senior Front-End Engineer. Driven by a passion for continuous learning, I&apos;m actively expanding my skills towards full-stack development and exploring the exciting possibilities within AI.
        </p>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5 text-center sm:text-left">Skills</h1>
        <p className="text-lg text-muted-foreground text-center sm:text-left">
          I specialize in front-end development, with a strong focus on React and Next.js. My toolkit includes TypeScript, Tailwind CSS, and a variety of other technologies. I&apos;m also diving into the world of full-stack development, exploring Node.js and Express.js to broaden my skill set.
        </p>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5 text-center sm:text-left">Interests</h1>
        <p className="text-lg text-muted-foreground text-center sm:text-left">
          I have a keen interest in AI and its potential to revolutionize the tech landscape. I enjoy exploring new technologies, frameworks, and tools that can enhance my development process and improve user experiences.
        </p>
      </div>
      <div className="mb-10 relative max-w-screen">
        <Logos3 {...demoData} />
      </div>
      <div className="mb-10">
      <h1 className="text-3xl font-light mb-5 text-center sm:text-left">Contact</h1>
        <p className="text-lg text-muted-foreground text-center sm:text-left">
          Feel free to reach out to me via email at <a href="mailto:mantha.houn@gmail.com">mantha.dev@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}