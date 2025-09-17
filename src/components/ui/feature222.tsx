"use client";

type stat = {
  number: string;
  text: string;
};

interface CardData {
  title: string;
  link: string;
  background: string;
  stats: Array<stat>;
}

const LIST: Array<CardData> = [
  {
    title: "Ellie Williams",
    link: "#",
    background: "/ai-chatbot-girls-1.webp",
    stats: [
      {
        number: "22 years",
        text: "Ellie Williams is a masculine girl, stubborn, jokes like an idiot, she is your bestfriend and dealer. You and Ellie have been best friends since your first semester of college, but Ellie has a certain liking for you...",
      },
    ],
  },
  {
    title: "Sophia Chen",
    link: "#",
    background: "/ai-chatbot-girls-2.webp",
    stats: [
      {
        number: "21 years",
        text: "Sophia is a gentle and artistic soul who loves painting and poetry. She&apos;s shy at first but opens up beautifully once you get to know her. Her soft voice and caring nature make her the perfect companion for deep conversations and quiet moments together.",
      },
    ],
  },
  {
    title: "Maya Rodriguez",
    link: "#",
    background: "/ai-chatbot-girls-3.webp",
    stats: [
      {
        number: "23 years",
        text: "Maya is a fiery Latina with a passion for dance and adventure. She&apos;s confident, bold, and knows exactly what she wants. Her infectious laugh and playful teasing will keep you on your toes, always ready for the next exciting moment together.",
      },
    ],
  },
  {
    title: "Aria Johnson",
    link: "#",
    background: "/ai-chatbot-girls-4.webp",
    stats: [
      {
        number: "20 years",
        text: "Aria is a bookworm with a wild side that only comes out in private. She&apos;s intelligent, mysterious, and has a way with words that can make your heart race. Behind her glasses lies a world of fantasies she&apos;s eager to explore with the right person.",
      },
    ],
  },
  {
    title: "Iris Wang",
    link: "#",
    background: "/ai-chatbot-girls-5.webp",
    stats: [
      {
        number: "24 years",
        text: "Luna is a free-spirited girl who loves the night sky and all things mystical. She&apos;s playful, spontaneous, and has a mischievous streak that makes every interaction exciting. Her dreamy eyes and ethereal beauty will captivate you from the first moment.",
      },
    ],
  },
  {
    title: "Zoe Thompson",
    link: "#",
    background: "/ai-chatbot-girls-6.webp",
    stats: [
      {
        number: "22 years",
        text: "Zoe is a sporty and energetic girl who loves fitness and outdoor adventures. She&apos;s competitive, determined, and has a body that shows her dedication to health. Her positive energy and athletic grace make her an irresistible companion for active fun.",
      },
    ],
  },
  {
    title: "Luna Park",
    link: "#",
    background: "/ai-chatbot-girls-7.webp",
    stats: [
      {
        number: "25 years",
        text: "Iris is a sophisticated and elegant young woman with a taste for the finer things in life. She&apos;s cultured, refined, and knows how to make every moment special. Her graceful movements and intelligent conversation will sweep you off your feet completely.",
      },
    ],
  },
  {
    title: "Nova Lee",
    link: "#",
    background: "/ai-chatbot-girls-8.webp",
    stats: [
      {
        number: "19 years",
        text: "Nova is a bubbly and innocent girl with a curious mind and adventurous spirit. She&apos;s sweet, naive, and eager to learn about the world around her. Her genuine smile and pure heart make her the perfect companion for discovering new experiences together.",
      },
    ],
  },
];

const Card = ({ link, background, title, stats }: CardData) => {
  return (
    <a
      href={link}
      style={{ backgroundImage: `url(${background})` }}
      className="group before:content-[] relative h-[400px] w-full overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/30 before:transition-all before:duration-300 hover:before:bg-black/50"
    >
      <div className="relative z-20 flex size-full flex-col justify-end gap-8">
        <div className="flex w-full flex-col gap-8">
          <div className="flex gap-8 text-white">
            {stats.map((item, i) => (
              <div key={`${title}-${i}`} className="flex flex-col gap-1">
                <div className="text-2xl font-semibold text-white">
                  {title}
                </div>
                <div className="text-xs text-white">{item.number}</div>
                <div className="text-sm opacity-80 line-clamp-2 group-hover:line-clamp-none">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const Feature222 = () => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-0">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Popular NSFW AI Chatbot Girls
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {LIST.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature222 };
