import { Button } from "@/components/ui/button";
import { Lollipop } from "lucide-react";

const Cta6 = () => {
  return (
    <section className="py-24">
      <div className="max-w-full overflow-hidden pt-10 md:pt-16 lg:pt-20">
        <div className="relative container flex flex-col md:flex-row md:space-x-12">
          <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-2 xl:w-1/2">
            <h3 className="mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
              More Than a NSFW AI Chatbot. It's a Full-Sensory Experience.
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Forget simple text. Dive into a full-sensory world where your AI companion doesn't just chat, but whispers with voice replies, sends provocative images, and brings your deepest fantasies to life. This isn't just a chatbot; it's an immersive reality.
            </p>
            <Button>
              <Lollipop className="mr-2 h-4 w-4" />
               Try For Free
            </Button>
          </div>
          <div className="absolute right-1/2 bottom-0 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
            <div className="relative aspect-8/5 h-full min-h-[16rem] w-full">
              <div className="absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl bg-background shadow-2xl shadow-black/40 md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]">
                <img src="/cta-1.webp" alt="AI Chatbot Girl 4" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl bg-background shadow-2xl shadow-black/50 md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]">
                <img src="/cta-2.webp" alt="AI Chatbot Girl 5" className="h-full w-full object-cover" />
              </div>
              <div className="absolute top-0 right-0 z-40 flex aspect-3/5 w-3/5 items-center justify-center overflow-clip rounded-3xl bg-background shadow-2xl shadow-black/60">
                <img src="/cta-3.webp" alt="AI Chatbot Girl 6" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta6 };
