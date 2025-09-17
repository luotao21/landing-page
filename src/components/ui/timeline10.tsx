"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Timeline10 = () => {

  const timelinePhases = [
    {
      id: 0,
      date: "Step 1",
      title: "Choose Your Fantasy Companion",
      description: "Create your own roleplay AI chat bot with our generator or choose from over 200,000 pre-made characters. Select their body type, style, inject personality, and more. Our ",
      linkText: "AI nsfw roleplay chatbot",
      descriptionEnd: " is like walking into an exclusive nightclub, but here the dancers can talk back, and oh, what a flirt they are!",
    },
    {
      id: 1,
      date: "Step 2",
      title: "Chat Away",
      description: "Once you&apos;ve found or made your match, it&apos;s time to ",
      linkText: "Dirty talk with AI",
      descriptionEnd: "! Engage in cheeky banter, share your desires, or explore your wildest fantasies. Whether you&apos;re in the mood for sweet pillow talk or something spicier, your companion is ready to play along.",
    },
    {
      id: 2,
      date: "Step 3",
      title: "Get Any Photos You Like",
      description: "Craving some visual treats? Whether you desire a playful pose, a seductive look, or something more daring, your ",
      linkText: "NSFW AI Chatbot",
      descriptionEnd: " will be more than happy to oblige. Your fantasies, your rules—from the beach to the bedroom, let your imagination run wild.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container flex flex-col items-center">
        <h2 className="relative z-20 py-2 text-center font-sans text-5xl font-semibold tracking-tighter md:py-7 lg:text-5xl">
          How Atale.ai&apos;s NSFW AI Chat Works
        </h2>
        <Card className="relative w-auto border-none shadow-none bg-transparent md:py-16">
          <CardContent className="p-0">
            <div className="relative flex flex-col items-center md:mt-12">
              <Separator className="absolute -top-8 left-0 hidden md:block" />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: "100%",
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className={cn(
                  "absolute -top-[32px] left-0 hidden h-0.5 bg-foreground md:block",
                )}
              />

              <div className="grid gap-6 md:grid-cols-3">
                {timelinePhases.map((phase, index) => (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute top-6 left-0 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: timelinePhases.length * 112,
                        }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className={cn(
                          "absolute left-0 z-10 w-0.5 bg-foreground md:hidden",
                        )}
                      />
                    )}
                    <div className="absolute top-0 -left-[9px] z-10 mb-5 flex size-5 items-center justify-center rounded-full bg-foreground p-1 md:-top-10 md:left-0">
                      <div className="size-full rounded-full bg-background" />
                    </div>

                    <div className="pl-7 md:pl-0">
                      <p className="text-sm text-muted-foreground">
                        {phase.date}
                      </p>
                      <h2 className="text-xl font-bold tracking-tighter text-foreground">
                        {phase.title}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {phase.description}
                        <a 
                          href="https://atale.ai" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary hover:text-primary/80 underline"
                        >
                          {phase.linkText}
                        </a>
                        {phase.descriptionEnd}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline10 };
