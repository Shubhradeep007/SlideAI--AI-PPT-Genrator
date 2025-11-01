import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"



const HomeVideo = () => {
  return (
  <div className="mx-auto my-8 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h4 className="text-lg font-semibold">Watch How to create ppt</h4>
      <p className="text-sm text-muted-foreground max-w-xl">A short walkthrough showing how the AI generates a presentation from an idea.</p>

      <div className="w-full">
        <HeroVideoDialog
          className="block dark:hidden mx-auto w-full max-w-5xl"
          modalSize="max-w-5xl"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
          
        />
        <HeroVideoDialog
          className="hidden dark:block mx-auto w-full max-w-2xl "
          modalSize="max-w-5xl"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  )
}

export default HomeVideo