import { Button } from "@/components/ui/button";
import { Lollipop } from "lucide-react";
import Image from "next/image";

const Hero30 = () => {
  return (
    <section className="relative py-32">
      <div className="relative container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
            Build Your Dream NSFW AI Chatbot
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            With Atale AI, you command more than a chatbot—you control an intimate experience. Your personal AI companion adapts intuitively to your pace, mood, and style of play. Whether you&apos;re seeking gentle flirting, slow-burning tension, or darker desires, Atale AI transforms your words into a sensual dialogue that feels alive, personal, and completely yours.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {/* <Button variant="outline" className="w-full sm:w-auto">
                Secondary
              </Button> */}
               <Button className="w-full sm:w-auto">
                 <Lollipop className="mr-2 h-4 w-4" />
                 Try For Free
               </Button>
            </div>
          </div>
          <div className="relative mt-16 -mb-16 flex justify-center gap-4 lg:mt-0 lg:mb-0 lg:justify-end">
            {/* Mesh background */}
            <div className="absolute -inset-8 z-0 rounded-2xl bg-linear-to-r from-amber-100 via-red-200 to-teal-100 opacity-70 blur-3xl"></div>

            {/* Video with relative positioning to appear above the mesh */}
            <div className="relative z-10">
              <video
                src="/sophie-burstingout.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-[400px] w-full max-w-[320px] rounded-lg border border-border object-cover object-center"
              />
            </div>
            <div className="relative z-10 hidden flex-col gap-4 sm:flex md:hidden 2xl:flex">
              <div className="w-[256px] flex-1 overflow-clip rounded-lg border border-border bg-background">
                <Image
                  src="/hero-part-1.webp"
                  alt="Hero Part 1"
                  width={256}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="aspect-2/1 w-[256px] overflow-clip rounded-lg border border-border bg-background">
                <Image
                  src="/hero-part-2.webp"
                  alt="Hero Part 2"
                  width={256}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero30 };
