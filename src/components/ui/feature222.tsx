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

interface Feature222Props {
  title: string;
  characters: Array<CardData>;
}

// Removed unused LIST constant

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

const Feature222 = ({ title, characters }: Feature222Props) => {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-0">
        <div className="mb-16 text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            {title}
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {characters.map((item, i) => (
            <Card key={`feature-222-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature222 };
