"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import React from "react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const Hero211 = () => {
  const images = [
    {
      src: "/ai-chatbot-girls-1.webp",
      alt: "AI roleplay chatbot character - Sophie",
      name: "Sophie",
    },
    {
      src: "/ai-chatbot-girls-2.webp",
      alt: "AI roleplay chatbot character - Emma",
      name: "Emma",
    },
    {
      src: "/ai-chatbot-girls-3.webp",
      alt: "AI roleplay chatbot character - Luna",
      name: "Luna",
    },
    {
      src: "/ai-chatbot-girls-4.webp",
      alt: "AI roleplay chatbot character - Aria",
      name: "Aria",
    },
    {
      src: "/ai-chatbot-girls-5.webp",
      alt: "AI roleplay chatbot character - Zoe",
      name: "Zoe",
    },
    {
      src: "/ai-chatbot-girls-6.webp",
      alt: "AI roleplay chatbot character - Maya",
      name: "Maya",
    },
    {
      src: "/ai-chatbot-girls-7.webp",
      alt: "AI roleplay chatbot character - Nova",
      name: "Nova",
    },
    {
      src: "/ai-chatbot-girls-8.webp",
      alt: "AI roleplay chatbot character - Iris",
      name: "Iris",
    },
  ];

  const css = `
  .swiper {
  width: 300px;
  height: 330px;
  border-radius: 30px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  border-radius: 25px;
  background-color: #000;
}

.swiper-pagination-bullet {
  background-color: #fff;
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
`;

  return (
    <section className="py-24">
      <style>{css}</style>
      <div className="container">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center gap-4">
          <h1 className="text-center font-calSans text-5xl lg:text-6xl">
            AI Roleplay Chat that Feels Real, Flirty, and Unfiltered
          </h1>
          <p className="px-10 text-center text-muted-foreground lg:text-lg">
            There&apos;s something irresistible about slipping into a role and letting the conversation take control. With today&apos;s roleplay AI chat bots, you can explore your wildest ideas through smooth, responsive chat that&apos;s anything but mechanical. Whether you&apos;re in the mood for slow-burn storytelling, flirty tension, or fully uninhibited NSFW roleplay AI, the experience is built to match your pace, your desires, and your imagination. Every message pulls you deeper, and every scenario is yours to shape.
          </p>
        </div>

        <div className="relative mt-16 flex h-full items-center justify-center">
          <Swiper
            loop={true}
            grabCursor={true}
            className="border bg-muted"
            autoplay={{
              delay: 1500,
              disableOnInteraction: true,
            }}
            effect="creative"
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                origin: "left center",
                translate: ["-5%", 0, -200],
                rotate: [0, 100, 0],
              },
              next: {
                origin: "right center",
                translate: ["5%", 0, -200],
                rotate: [0, -100, 0],
              },
            }}
            modules={[EffectCreative, Pagination, Autoplay]}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  className="h-full w-full object-cover"
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={330}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="relative z-10 mx-auto mt-10 flex w-fit justify-center">
          <Button className="rounded-full px-4 py-2 active:scale-105">
            Create your AI
          </Button>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="absolute top-3 -right-30 h-1"
          >
            <p className="font-caveat text-xl tracking-tight">
              Try for free
            </p>
            <svg
              width="82"
              className="-translate-x-1/2 pr-4"
              height="45"
              viewBox="0 0 82 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                d="M80.2759 1.95576C67.8687 20.6075 49.1102 55.0246 21.9767 39.1283C15.3299 35.2342 12.7124 29.0489 9.38472 22.4634C9.24096 22.1789 6.96955 15.0574 7.91833 15.4904C10.4589 16.65 25.535 23.253 15.8013 18.8782C14.7716 18.4154 8.31018 14.0924 7.25323 14.6265C4.37354 16.0816 2.6512 30.2469 1.58546 33.4898"
                stroke="#1C1C1C"
                strokeWidth="2.40332"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>
        <div className="absolute right-0 bottom-0 left-0">
          <SkiperUiMarquee />
        </div>
      </div>
    </section>
  );
};

export { Hero211 };

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: unknown;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row ![animation-duration:10s]": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

function Card() {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-17 cursor-pointer overflow-hidden rounded-2xl border border-muted p-4",
        "bg-gradient-to-b from-muted/50 to-background",
        "dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    ></motion.div>
  );
}

export function SkiperUiMarquee() {
  return (
    <div className="mx-auto px-4 py-12 md:px-8">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="flex w-full flex-col items-center justify-center"
            >
              <Marquee reverse repeat={5}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Card key={idx} />
                ))}
              </Marquee>
            </div>
          ))}
          <div className="absolute right-0 h-full w-24 bg-gradient-to-r from-transparent to-background to-70% dark:to-background" />
          <div className="absolute left-0 h-full w-24 bg-gradient-to-l from-transparent to-background to-70% dark:to-background" />
          <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent to-background to-70% dark:to-background" />
        </div>
      </div>
    </div>
  );
}
