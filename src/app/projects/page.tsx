import Footer from "@/components/element/footer";

export default function Projects() {
  return (
    <div className="container px-4 mx-auto my-10 sm:my-20">
      <div className="flex justify-center">
        <Footer />
      </div>
      <div className="mb-10">
        <h1 className="text-3xl font-light mb-5 text-center sm:text-left">Projects</h1>
        <p className="text-lg text-muted-foreground text-center sm:text-left">
          To be updated soon! I am currently working on a few projects that I will showcase here. Stay tuned for more updates.
        </p>
      </div>
    </div>
  );
}