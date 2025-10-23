import Image from "next/image";

interface Feature61Props {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkUrl: string;
}

const Feature61 = ({ 
  title,
  description,
  imageSrc,
  imageAlt,
  linkText,
  linkUrl
}: Feature61Props) => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex-row-reverse lg:flex">
          <div className="lg:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={450}
                className="aspect-4/3 w-full rounded-xl border border-border object-cover"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
            <div>
              <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {title}
              </h3>
              <p 
                className="text-muted-foreground lg:text-lg"
                dangerouslySetInnerHTML={{
                  __html: description
                    .replace(/\n/g, '<br>')
                    .replace(new RegExp(linkText, 'g'), `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary/80 underline">${linkText}</a>`)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature61 };
