import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { TextAnimate } from '@/components/ui/text-animate';


const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <TextAnimate  animation="blurIn" as="h2" className="text-3xl font-extrabold tracking-tight dark:text-white sm:text-4xl">
          What our customers say
        </TextAnimate>
        <TextAnimate  animation="blurIn" as="h2" className="mt-4 text-lg text-gray-400 dark:text-neutral-300">
          Real stories from teams who accelerated their work with AI-powered presentations. Design, generate, and iterate in minutes — not hours.
        </TextAnimate>
        <TextAnimate className="mt-4 text-sm text-gray-400 dark:text-neutral-400">
          We partner with product, design, and go-to-market teams to turn ideas into polished slides that close deals and inform decisions.
        </TextAnimate>
      </div>

      <div className="mt-12 mx-auto max-w-5xl">
        <div className="rounded-2xl bg-white/10 dark:bg-neutral-900/60 p-6 shadow-lg backdrop-blur-md">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

        
      </div>
    </section>
  )
}

export default Testimonial