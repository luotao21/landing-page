"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Community4 = () => {
  const communityCards = [
    {
      id: 1,
      title: "Atale AI",
      description: "Our flagship AI chatbot with advanced conversation skills. Smart, engaging, and always ready to chat.",
      href: "https://atale.ai",
      buttonText: "Try Atale AI"
    },
    {
      id: 2,
      title: "AI Girlfriend",
      description: "Your perfect virtual companion. Emotional support, intimate chats, and personalized attention.",
      href: "https://atale.ai",
      buttonText: "Meet Your AI GF"
    },
    {
      id: 3,
      title: "AI Boyfriend",
      description: "Connect with your ideal AI partner. Romantic conversations and emotional intimacy on demand.",
      href: "https://atale.ai",
      buttonText: "Find Your AI BF"
    },
    {
      id: 4,
      title: "Create AI Girlfriend",
      description: "Design your dream AI companion. Customize appearance, personality, and conversation style.",
      href: "https://atale.ai",
      buttonText: "Create Now"
    }
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Choose Your Perfect AI Companion
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of AI chatbots designed to fulfill your every desire and fantasy.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {communityCards.map((card) => (
            <Card key={card.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{card.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  asChild 
                  className="w-full group-hover:bg-primary/90 transition-colors"
                >
                  <a 
                    href={card.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {card.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community4 };
