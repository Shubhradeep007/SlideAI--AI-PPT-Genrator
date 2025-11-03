import { GlareCard } from "@/components/ui/glare-card";
import { TextAnimate } from "@/components/ui/text-animate";

const AboutCard = () => {
  return (
    <section className="relative p-10 py-16 overflow-hidden">
      {/* decorative background blobs */}
      <div className="pointer-events-none -z-10 absolute inset-0">
        <div className="absolute left-[-8%] top-10 w-80 h-80 rounded-full bg-gradient-to-br from-purple-300 via-pink-200 to-transparent blur-3xl opacity-40"></div>
        <div className="absolute right-[-6%] top-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-blue-200 via-cyan-200 to-transparent blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 1st image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center ml-20 w-full">
          <GlareCard className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1612934794514-7750c74627be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
              alt="First section"
            />
          </GlareCard>

          <div className="lg:col-span-4 ml-50 md:col-span-4 flex flex-col gap-5 text-white">
            <TextAnimate
              animation="blurIn"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
            >
              The Problem: Great ideas get lost in bad design.
            </TextAnimate>

            <TextAnimate
              animation="blurIn"
              className="text-sm md:text-base"
            >
              Slide AI is your intelligent design partner, transforming your
              thoughts into stunning presentations effortlessly. Save time,
              maintain consistency, and focus on the message — not the layout.
            </TextAnimate>
          </div>
        </div>

        {/* 2nd image right, text left */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-center mt-1 mr-12">
          <div className="p-10 md:col-span-4 flex flex-col gap-3 text-white">
            <TextAnimate
              animation="blurIn"
              className="text-2xl md:text-4xl font-extrabold tracking-tight"
            >
              The Solution: Design that communicates.
            </TextAnimate>

            <TextAnimate
              animation="blurIn"
              className="text-sm md:text-base flex-wrap-reverse"
            >
              Our AI-powered templates and layout engine make it simple to turn
              ideas into slides that look handcrafted — without a designer.
              Customize, collaborate, and export in minutes.
            </TextAnimate>
          </div>

          <GlareCard className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATG4AO-viifiT3g6i62KBdfmUsxpRGmaTmUywV-XwfdFNOFQzeVKwI5zil40Imf3qRwbOMWuEWA_zYpOWMSAW1drsz6IXy0Zd_vQk4i8XbPYE9Cvz1TTIPph4MLd6PE0SITIjJ6Vsk-T6Ea2E4F3N1X5Grm-gGd0jHfWOeuKgb5RSMOCGi1BolflO-nRCqSQ385em1LHXzcdvlOSB9adj_JLo1SSLhqyO2o8WAFmtUNJ55dVubjqVXf4HTmPgjb33j2_ssIIRnMOo"
              alt="Second section"
            />
          </GlareCard>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;




