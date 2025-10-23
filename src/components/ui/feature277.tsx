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

interface Feature277Item {
  title: string;
  description: string;
  iconName: string;
  color: string;
  bgColor: string;
}

interface Feature277Props {
  title: string;
  items: Feature277Item[];
}

const Feature277 = ({ title, items }: Feature277Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      Sparkle,
      AudioLines,
      BookImage,
      Heart,
    };
    return iconMap[iconName] || Sparkle;
  };

  return (
    <section className="py-24">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-5xl">
        {title}
        </h2>
        {/* <p className="text-md text-muted-foreground mx-auto max-w-xl text-center lg:text-lg">
          Perfectly balanced between performance and customization.
        </p> */}

        <div className="relative mt-10 grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-2 z-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative block h-full w-full p-2 overflow-hidden"
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
                icon={getIcon(item.iconName)}
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
        "bg-muted relative z-20 flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-6 text-center overflow-hidden",
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
      <p className="text-muted-foreground text-left text-sm">{description}</p>

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
