import { BackgroundLines } from "@/components/ui/background-lines";
import { TextAnimate } from "@/components/ui/text-animate";

const AboutTopScton = () => {
  return (
    <>
<div className="flex h-150 w-full flex-col items-start justify-start overflow-hidden top-0 -mt-25">
        <BackgroundLines className="relative flex items-center justify-center w-full h-full bg-transparent">
          <div className="mx-auto max-w-4xl text-center pt-24 z-10 relative">
            <TextAnimate
              animation="blurIn"
              className="bg-clip-text bg-linear-to-b text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold py-2 tracking-tight"
            >
              We're closing the gap between your ideas and your audience
            </TextAnimate>

            <TextAnimate
              animation="blurIn"
              className="mt-4 text-base sm:text-lg text-white max-w-3xl mx-auto"
            >
              Slide AI turns notes, PDFs, web pages, images and data into clear,
              structured and beautiful presentations in seconds. Collaborate,
              edit and export across formats — design engineered, AI powered.
            </TextAnimate>
          </div>
        </BackgroundLines>
      </div>
    </>
  );
};

export default AboutTopScton;
