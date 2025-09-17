import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: "faq-1",
    question: "What makes Atale AI different from other NSFW AI Chatbot platforms?",
    answer:
      "Atale AI stands out with its advanced AI technology that creates more natural, responsive conversations. Unlike basic chatbots, Atale AI offers over 200,000 unique characters, voice interactions, dynamic image generation, and comprehensive character customization. Our AI adapts to your preferences and creates truly immersive, personalized experiences that feel authentic rather than scripted.",
  },
  {
    id: "faq-2",
    question: "How does character customization work in Atale AI?",
    answer:
      "Atale AI's character customization goes far beyond basic appearance settings. You can design physical features, personality traits, communication styles, emotional intensity levels, and even specific vocabulary preferences. Create detailed backstories and define how your AI companion responds to different situations, ensuring every interaction feels perfectly tailored to your desires.",
  },
  {
    id: "faq-3",
    question: "Is my privacy protected when using Atale AI?",
    answer:
      "Absolutely. Atale AI is built with complete privacy in mind. No sign-up or login is required, ensuring your identity remains anonymous. All conversations are encrypted and stored securely, with no activity logs or data trails that could be traced back to you. Your private sessions exist only between you and your AI companion.",
  },
  {
    id: "faq-4",
    question: "What types of content can I explore with Atale AI?",
    answer:
      "Atale AI offers a wide range of adult content and scenarios, from romantic conversations to more explicit interactions. The platform supports various roleplay scenarios, fantasy exploration, and intimate dialogue. All content is designed for consenting adults, and you have complete control over the direction and intensity of your conversations.",
  },
  {
    id: "faq-5",
    question: "How does the voice feature work?",
    answer:
      "Atale AI's voice feature allows your AI companion to respond with realistic voice messages. You can hear whispered secrets, playful giggles, or sultry tones that bring your conversations to life. The voice responses are generated based on your character's personality and the context of your conversation, creating a more immersive experience.",
  },
  {
    id: "faq-6",
    question: "Can I create multiple AI companions?",
    answer:
      "Yes, you can create and interact with multiple AI companions, each with their own unique personality, appearance, and communication style. Switch between different characters or create scenarios where multiple AI companions interact with each other, giving you endless possibilities for exploration and entertainment.",
  },
  {
    id: "faq-7",
    question: "How does the image generation feature work?",
    answer:
      "Atale AI's image generation creates custom visuals based on your conversations and character descriptions. Simply describe any scene or scenario, and the AI will generate unique, provocative images that match your vision. This feature enhances the immersive experience by providing visual elements that complement your text and voice interactions.",
  },
  {
    id: "faq-8",
    question: "Is there a limit to how long I can chat with my AI companion?",
    answer:
      "There are no strict time limits on your conversations. You can engage in extended sessions, build ongoing relationships with your AI companions, and return to continue conversations at any time. The AI remembers context and can maintain continuity across multiple sessions, creating deeper, more meaningful interactions.",
  },
];

const Faq3 = ({
  heading = "Frequently Asked Questions",
  description = "Get answers to the most common questions about Atale AI's NSFW AI Chatbot platform. Still have questions? Our support team is here to help.",
  items = faqItems,
}: Faq3Props) => {
  return (
    <section className="py-24">
      <div className="container space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { Faq3 };
