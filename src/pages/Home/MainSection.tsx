import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";

const MainSection = () => {
  return (
     <>
     <div className="flex h-155 w-full flex-col items-start justify-start overflow-hidden">
     <BackgroundRippleEffect />
      <div className="mt-45 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl">
          From Idea to Presentation in 1 Click ⚡
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center lg:text-xl">
          Generate Sleek, editable PPT's Powerd by AI. <br /> Save hours on design, focus on your story.
        </p>

        <div className="relative z-10 mx-auto mt-6 flex gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 rounded">Get Started</Button>
        </div>
      </div>
     </div>

     </>
     
  )
}

export default MainSection