import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { TextAnimate } from "@/components/ui/text-animate"

const ProjectSlideShow = () => {
    
const IMAGES_ROW_A = [
  "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
const IMAGES_ROW_B = [
  "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <TextAnimate animation="blurIn" as="h2" className="text-3xl font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
          Presentations, supercharged by SlideAI
        </TextAnimate>
        <TextAnimate animation="blurIn" as="p" className="mt-4 text-lg text-gray-400 dark:text-neutral-300">
          Turn ideas into beautiful slide decks in seconds. Smart templates, AI-assisted layout and design, and export-ready slides — all in one tool.
        </TextAnimate>
      </div>

      <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {IMAGES_ROW_A.map((src, idx) => (
            <img
              key={idx}
                  src={`${src}&ixlib=rb-4.0.3`}
                  alt={`Slide preview ${idx + 1}`}
                  width={320}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-44 w-72 rounded-xl object-cover shadow-lg"
            />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {IMAGES_ROW_B.map((src, idx) => (
            <img
              key={idx}
                  src={`${src}&ixlib=rb-4.0.3`}
                  alt={`Slide preview ${idx + 1}`}
                  width={320}
                  height={200}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-44 w-72 rounded-xl object-cover shadow-lg"
            />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r  dark:from-transparent dark:to-neutral-900/60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l  dark:from-transparent dark:to-neutral-900/60" />
      </div>

      
    
    </section>
  )
}

export default ProjectSlideShow