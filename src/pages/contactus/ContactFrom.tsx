import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextAnimate } from "@/components/ui/text-animate";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ShineBorder } from "@/components/ui/shine-border";

const ContactForm = () => {
  const loading = false;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your submit logic here
  };

  return (
    <BackgroundBeamsWithCollision className="relative flex flex-col h-full items-center justify-center bg-gray-900 min-h-[1000px] -mt-25 px-4 sm:px-6 md:px-0">
      <div className="mt-15 max-w-xl w-full text-center space-y-4">
        <TextAnimate animate="blurIn" className="text-4xl font-bold text-white tracking-tight">
          Get In Touch
        </TextAnimate>
        <TextAnimate animate="blurIn" className="text-white/70 text-base">
          We'd love to hear from you. Please fill the form and we will get in touch with you shortly.
        </TextAnimate>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 w-full max-w-xl"
      >
        <Card className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
          <form onSubmit={handleSubmit} className="space-y-6">
            <CardHeader>
              <CardTitle className="text-white">Contact Form</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form and we will get back to you shortly.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    disabled={loading}
                    className="bg-white/10 text-white placeholder-white/60 border-white/30"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                    className="bg-white/10 text-white placeholder-white/60 border-white/30"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="reason" className="text-white">
                    Reason for Contacting
                  </Label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    disabled={loading}
                    defaultValue=""
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-black placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  >
                    <option value="" disabled>
                      Select a reason...
                    </option>
                    <option value="support">Technical Support / Bug Report</option>
                    <option value="billing">Billing or Account Question</option>
                    <option value="feedback">Feedback / Feature Request</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-white">
                    Your Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    disabled={loading}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-black rounded"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
<br />
      <TextAnimate animate="blurIn" className="text-white/70 text-base">
         Our Team Does its best to respond to all your inquiries within 24-48 business hours. 
        </TextAnimate>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactForm;
