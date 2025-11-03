import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";

const AboutFooter = () => {
  return (
    <div className="w-full h-120">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeInOut" }}
          className="bg-clip-text bg-linear-to-br from-slate-400 to-slate-600 text-transparent text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-tight"
        >
          Focus on your story — we’ll handle the design.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0.4, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="mt-3 text-center text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto"
        >
          Start creating presentations that captivate and convince. Let our AI
          be your co-pilot in layout, imagery and polish so you can focus on the
          idea.
        </motion.p>

        {/* built-by heading + bigger card */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 text-center text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
        >
          Built by
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeInOut" }}
          className="mt-4 max-w-md mx-auto"
        >
          <BackgroundGradient>
            <a
              href="https://github.com/Shubhradeep007"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl bg-white/5 dark:bg-neutral-900/40 border border-neutral-200/5 backdrop-blur-sm px-6 py-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="shrink-0 h-16 w-16 rounded-full bg-linear-to-br from-purple-500 to-pink-500 overflow-hidden flex items-center justify-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/75801099?v=4"
                    alt="Shubhradeep"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="text-base md:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    Shubhradeep Bose
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    Creator · Full Stack Dev. 
                  </div>
                  <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    View on GitHub →
                  </div>
                </div>
              </div>
            </a>
          </BackgroundGradient>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default AboutFooter;
