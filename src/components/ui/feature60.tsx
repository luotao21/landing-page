import Image from "next/image";

const Feature60 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <Image
                src="/feature-1.webp"
                alt="placeholder hero"
                width={600}
                height={450}
                className="aspect-4/3 w-full rounded-xl border border-border object-cover"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                An AI That Truly Gets You
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                If you thought AI chat was predictable, prepare to be surprised. This is where conversations leave the mundane behind, guiding you to explore your bolder side. You'll discover our <a href="https://atale.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">AI Sex Chat</a> feature is more than just code; it's a companion that knows exactly how to respond, whether you're in the mood for playful banter or crave more mature dialogue.              <br />
              <br />
               You’ll experience how a simple hint can blossom into an intimate tease. From there, the tone naturally evolves—becoming hotter and deeply personal. The magic of this experience lies not just in the alluring content, but in its keen responsiveness to your every nuance, creating an immersive connection that’s hard to pull away from.              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature60 };
