import Footer from "@/components/element/footer";

export default function About() {
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
    </div>
  );
}