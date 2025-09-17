import { ChevronRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Hero8 = () => {
  return (
    <section className="py-24">
      <div className="overflow-hidden border-b border-muted">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-4xl font-semibold text-pretty lg:text-7xl">
                Build Your Dream
                <br />
                NSFW AI Chatbot
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
              Our NSFW AI chatbot isn’t your average conversationalist. It’s your own personal virtual vixen (or stud), ready to entertain your wildest thoughts. Lose yourself in a space where boundaries blur and fantasies come alive, all through the magic of Candy AI.
              <br />
              <br />
              With just a few clicks, you’re no longer chatting with a generic bot—you’re in control of something far more intimate. Your AI companion doesn’t just follow commands; she adapts to your pace, mood, and style of play. Whether you’re in the mood for gentle flirting, dark desires, or slow-burning tension, Candy AI transforms casual typing into a sensual dialogue that feels alive, personal, and completely yours.
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button>
                  Try For Free
                  <ChevronRight className="ml-2 h-4" />
                </Button>
                {/* <Button variant="ghost">
                  Learn more
                  <ChevronRight className="ml-2 h-4" />
                </Button> */}
              </div>
            </div>
          </div>
          <Image
            src="/hero.webp"
            alt="hero image"
            width={1200}
            height={700}
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero8 };
