import { GlareCard } from "@/components/ui/glare-card";
import { TextAnimate } from "@/components/ui/text-animate";

export const AboutCardMobileResponsive = () => {
  return (
    <section className="p-6 md:hidden max-w-md mx-auto">
      {/* 1st section stacked vertically */}
      <div className="mb-12">
        <GlareCard className="flex flex-col items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm w-full  relative overflow-hidden">
          <img
            className="w-full h-auto relative object-contain"
            src="https://images.unsplash.com/photo-1612934794514-7750c74627be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
            alt="description"
          />
        </GlareCard>

        <div className="flex flex-col gap-3 text-white">
          <TextAnimate
            animation="blurIn"
            className="text-xl font-extrabold tracking-tight"
          >
            The Problem: Great ideas get lost in bad design.
          </TextAnimate>
          <TextAnimate animation="blurIn" className="text-sm">
            Slide AI is your intelligent design partner, transforming your
            thoughts into stunning presentations effortlessly. Save time,
            maintain consistency, and focus on the message — not the layout.
          </TextAnimate>
        </div>
      </div>

      {/* 2nd section stacked vertically */}
      <div>
 <GlareCard className="flex flex-col items-center justify-center">
        <img
          className="h-full w-full absolute inset-0 object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATG4AO-viifiT3g6i62KBdfmUsxpRGmaTmUywV-XwfdFNOFQzeVKwI5zil40Imf3qRwbOMWuEWA_zYpOWMSAW1drsz6IXy0Zd_vQk4i8XbPYE9Cvz1TTIPph4MLd6PE0SITIjJ6Vsk-T6Ea2E4F3N1X5Grm-gGd0jHfWOeuKgb5RSMOCGi1BolflO-nRCqSQ385em1LHXzcdvlOSB9adj_JLo1SSLhqyO2o8WAFmtUNJ55dVubjqVXf4HTmPgjb33j2_ssIIRnMOo"
        />
      </GlareCard>



        <div className="flex flex-col gap-3 text-white p-4">
          <TextAnimate
            animation="blurIn"
            className="text-xl font-extrabold tracking-tight"
          >
            The Solution: Design that communicates.
          </TextAnimate>
          <TextAnimate animation="blurIn" className="text-sm">
            Our AI-powered templates and layout engine make it simple to turn
            ideas into slides that look handcrafted — without a designer.
            Customize, collaborate, and export in minutes.
          </TextAnimate>
        </div>
      </div>
    </section>
  );
};
