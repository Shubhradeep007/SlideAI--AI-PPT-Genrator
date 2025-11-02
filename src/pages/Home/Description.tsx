import { RetroGrid } from "@/components/ui/retro-grid";
import { TextAnimate } from "@/components/ui/text-animate";

const Description = () => {
  return (
    <>
    <br />
    <section className="relative w-full">
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* decorative retro grid */}
        <RetroGrid />

        {/* content overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 ">
          <div className="mx-auto max-w-6xl h-70 rounded-lg p-8 text-center m-2">
            <TextAnimate  animation="blurIn" as="h2" className="text-xl font-extrabold text-white dark:text-white">
              Transform Your Ideas into Polished Decks. Instantly.
            </TextAnimate>
            <TextAnimate  animation="blurIn" className="m-2 mt-4 text-base text-gray-400 dark:text-neutral-300 leading-relaxed">
              Welcome to **Slide AI**, your intelligent design partner. Stop
              wrestling with templates and layouts. Just provide your content—from
              a simple prompt to a detailed document—and our AI will craft a
              stunning, professional presentation in seconds.

               Welcome to **Slide AI**, your intelligent design partner. Stop
              wrestling with templates and layouts. Just provide your content—from
              a simple prompt to a detailed document—and our AI will craft a
              stunning, professional presentation in seconds.

              Welcome to **Slide AI**, your intelligent design partner. Stop
              wrestling with templates and layouts. Just provide your content—from
              a simple prompt to a detailed document—and our AI will craft a
              stunning, professional presentation in seconds.
            </TextAnimate>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Description;