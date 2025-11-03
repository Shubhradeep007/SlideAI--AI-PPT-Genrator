import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function AboutFeature() {
  const features = [
    {
      title: "Instant Slide Generation",
      description:
        "Transform your ideas into professionally designed slides in seconds with our advanced AI technology.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Intuitive Design",
      description:
        "Simple and seamless experience - just input your content and let our AI handle the design magic.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Flexible Pricing",
      description:
        "Choose the plan that fits your needs. From individual creators to enterprise teams.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Cloud Sync & Backup",
      description: "Your presentations are always safe, synced, and accessible anywhere.",
      icon: <IconCloud />,
    },
    {
      title: "Smart Templates",
      description: "AI-powered templates that adapt to your content and brand automatically.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI Support",
      description:
        "Get instant help with our AI assistant for design tips and presentation guidance.",
      icon: <IconHelp />,
    },
    {
      title: "Custom Branding",
      description:
        "Maintain brand consistency with custom colors, fonts, and style preferences.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Collaboration Tools",
      description: "Work together seamlessly with real-time editing and sharing features.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
