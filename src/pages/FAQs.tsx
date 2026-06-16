import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book?", a: "Send a message via the contact form or WhatsApp with rough dates and what you're curious about. We'll go back and forth a couple of times until it feels right." },
  { q: "Can I customize the experience?", a: "Yes — every experience is shaped around you. Slower, longer, different food, different viewpoint. It's your trip." },
  { q: "Do you help first-time visitors?", a: "Yes. Most of my friends here are first-timers — I'll help with SIM cards, money, transport, where to skip, and where to slow down." },
  { q: "Can you recommend local restaurants?", a: "Of course. Whether or not we meet, I'll happily send you a personal short-list." },
  { q: "Can you take photos during our walk?", a: "Yes — and I love doing it. You'll get edited photos sent over after." },
  { q: "Can I join if I'm not trekking?", a: "Absolutely. Most experiences happen in and around Pokhara — no trek required." },
  { q: "Is it safe for solo female travelers?", a: "Pokhara is one of the safest cities in Nepal. I'll always meet you in public, share my ID and location, and check in with you afterward." },
  { q: "What if the weather is bad?", a: "We reschedule or pivot — cafés, cooking sessions, and indoor cultural visits are all good rainy-day options." },
  { q: "Do you take groups?", a: "I focus on solo travelers and pairs. For small groups (3–4) we'll just adjust the pace." },
  { q: "How do I pay?", a: "Cash on the day, or international transfer / Wise / PayPal in advance — whatever's easiest for you." },
];

const FAQs = () => (
  <Layout>
    <section className="py-20 md:py-24">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQs"
          title={<>Good questions, <em className="text-accent not-italic">honest answers.</em></>}
        />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQs;
