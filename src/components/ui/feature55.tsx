interface Feature55Props {
  title: string;
  content: string;
}

const Feature55 = ({ title, content }: Feature55Props) => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center text-left">
          <h3 className="my-6 text-3xl font-semibold text-pretty text-center md:text-4xl lg:text-5xl">
            {title}
          </h3>
          <div className="w-full text-left">
            <p className="mb-8 text-muted-foreground lg:text-lg">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature55 };
