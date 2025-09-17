import { ChevronRight, Bot, Heart, User, WandSparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const Community4 = () => {
  const socialPlatforms = [
    {
      name: "Atale AI",
      icon: <Bot className="size-6 text-sky-500" />,
      color: "sky",
      heading: "Atale AI",
      description:
        "Our flagship AI chatbot with advanced conversation skills. Smart, engaging, and always ready to chat.",
      followText: "Try Atale AI",
      url: "https://atale.ai",
    },
    {
      name: "AI Girlfriend",
      icon: <Heart className="size-6 text-pink-500" />,
      color: "pink",
      heading: "AI Girlfriend",
      description: "Your perfect virtual companion. Emotional support, intimate chats, and personalized attention.",
      followText: "Meet Your AI GF",
      url: "https://atale.ai",
    },
    {
      name: "AI Boyfriend",
      icon: <User className="size-6 text-green-500" />,
      color: "green",
      heading: "AI Boyfriend",
      description: "Connect with your ideal AI partner. Romantic conversations and emotional intimacy on demand.",
      followText: "Find Your AI BF",
      url: "https://atale.ai",
    },
    {
      name: "Create AI Girlfriend",
      icon: <WandSparkles className="size-6 text-purple-500" />,
      color: "purple",
      heading: "Create AI Girlfriend",
      description: "Design your dream AI companion. Customize appearance, personality, and conversation style.",
      followText: "Create Now",
      url: "https://atale.ai",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="text-4xl font-medium md:text-5xl">
            Besides NSFW AI What Else Does Atale AI Offer?
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Discover our collection of AI chatbots designed to fulfill your every desire and fantasy.
          </p>
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className={cn(
                "bg-radial-[at_80%_14%] group relative flex h-full flex-col gap-10 overflow-hidden rounded-xl border from-[-50%] via-zinc-950 via-75% to-zinc-950 p-6",
                platform.color === "pink" &&
                  "from-pink-400 dark:border-pink-400/50",
                platform.color === "sky" &&
                  "from-sky-400 dark:border-sky-400/50",
                platform.color === "green" &&
                  "from-green-400 dark:border-green-400/50",
                platform.color === "purple" &&
                  "from-purple-400 dark:border-purple-400/50",
              )}
            >
              <div className="absolute inset-0 h-full w-full shrink-0 bg-[radial-gradient(white_1px,transparent_1px)] opacity-35 [background-size:3px_3px] [mask-image:radial-gradient(ellipse_at_80%_14%,#000,transparent_40%)]"></div>
              <div
                className={`relative grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-b from-${platform.color}-400/50 via-transparent to-${platform.color}-400/50 p-px`}
              >
                <div
                  className={`grid size-full place-items-center rounded-full bg-zinc-950 bg-gradient-to-b from-${platform.color}-400/30 via-transparent to-${platform.color}-400/30`}
                >
                  {platform.icon}
                </div>
              </div>
              <div className="flex h-full flex-col justify-between">
                <div className="mb-5">
                  <h3 className="relative text-lg font-semibold text-white">
                    {platform.heading}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {platform.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                  {platform.followText}
                  <ChevronRight className="size-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community4 };