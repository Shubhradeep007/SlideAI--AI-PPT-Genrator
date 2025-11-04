import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { useUser, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const MainSection = () => {
  const { user } = useUser();

  return (
    <>
      <div className="flex h-155 w-full flex-col items-start justify-start overflow-hidden">
        <BackgroundRippleEffect />
        <div className="mt-45 w-full">
          <TextAnimate
            animation="blurIn"
            as="h2"
            className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl"
          >
            From Idea to Presentation in 1 Click ⚡
          </TextAnimate>
          <div className="flex flex-col gap-2">
            <TextAnimate
              animation="blurIn"
              as="h2"
              className="relative z-10 mx-auto mt-4 max-w-xl text-center lg:text-xl"
            >
              Generate Sleek, editable PPT's Powerd by AI.
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              as="h2"
              className="relative z-10 mx-auto max-w-xl text-center lg:text-xl"
            >
              Save hours on design, focus on your story.
            </TextAnimate>
          </div>

          <div className="relative z-10 mx-auto mt-6 flex gap-4 justify-center">
            {!user ? (
              <SignInButton mode="modal">
              <Button className="bg-black text-white hover:bg-gray-800 rounded">
                Get Started
              </Button>
              </SignInButton>
            ) : (
              <Link to="/workspace">
              <Button className="bg-black text-white hover:bg-gray-800 rounded">
                Go to Workspace
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
