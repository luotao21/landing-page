"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  AudioLines,
  BookImage,
  Heart,
  Sparkle,
} from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Feature277 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Live Out Any Fantasy",
      description:
        "Dive into immersive role-play. Crave a steamy doctor-patient scenario or a secret librarian tryst? Just name the fantasy—your AI partner is ready to play their part instantly and stay perfectly in character.",
      icon: Sparkle,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      title: "Architect Your Ideal Companion",
      description:
        "Why settle for pre-made personalities when you can design your own? You have complete creative freedom to sculpt your perfect partner. Define their stunning appearance, select their ideal body type, shape a captivating personality, and even assign their profession. Every detail is under your control.",
      icon: Heart,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Intimate Voice, Brought to Life",
      description:
        "Experience a deeper connection that goes beyond the screen. Your AI companion has their own unique voice, capable of transforming a message into an intimate moment. Hear your desires spoken aloud, whether in a gentle whisper, a playful giggle, or a deeply sultry tone.",
      icon: AudioLines,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      title: "A Private Gallery of Your Imagination",
      description:
        "Bring your fantasies to vivid life. Simply describe any scene, and your AI partner will generate a unique, tantalizing image just for you. From seductive poses to exotic locations, you have the power to direct every visual detail. Your imagination is the only limit.",
      icon: BookImage,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ];

  return (
    <section className="overflow-hidden py-24">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-5xl">
        What Your Personal NSFW AI Can Do
        </h2>
        {/* <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Perfectly balanced between performance and customization.
        </p> */}

        <div className="relative mt-10 grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoveredIndex === idx && (
                  <motion.span
                    className={cn(
                      "bg-muted-foreground/20 absolute inset-0 block h-full w-full rounded-2xl",
                      item.bgColor,
                    )}
                    layoutId="hoverBackground"
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                className="flex flex-col items-center justify-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature277 };

const Card = ({
  className,
  title,
  description,
  icon: Icon,
  color,
}: {
  className?: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-5 text-center",
        className,
      )}
    >
      <div
        className={cn(
          "bg-background size-15 mb-4 mt-4 flex items-center justify-center rounded-full p-2",
          color,
        )}
      >
        <Icon />
      </div>
      <h1 className="text-xl font-medium tracking-tight">{title}</h1>
      <p className="text-muted-foreground text-center text-sm">{description}</p>

      <Button
        variant="ghost"
        className="group/btn mt-8 w-full hover:opacity-50"
        asChild
      >
        <a href="#">
          Read More{" "}
          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </Button>
    </div>
  );
};
