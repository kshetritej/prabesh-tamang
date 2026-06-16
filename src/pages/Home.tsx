import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Coffee,
  Mountain,
  Utensils,
  Camera,
  Sunset,
  Heart,
  Globe2,
  MessageCircle,
  MapPin,
  Sparkles,
  Compass,
  Languages,
  Clock,
  Users,
  Star,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

import heroImg from "@/assets/pokhara-hero.jpg";
import portrait from "@/assets/prabesh-portrait.jpg";
import gCafe from "@/assets/g-cafe.jpg";
import gFood from "@/assets/g-food.jpg";
import gSunset from "@/assets/g-sunset.jpg";
import gLakeside from "@/assets/g-lakeside.jpg";
import gCulture from "@/assets/g-culture.jpg";
import gNature from "@/assets/g-nature.jpg";
import gPeople from "@/assets/g-people.jpg";
import gPhoto from "@/assets/g-photo.jpg";
import { experiences } from "@/data/experiences";

const experienceIcons: Record<string, JSX.Element> = {
  "coffee-and-conversation": <Coffee className="h-6 w-6" />,
  "hidden-pokhara-walk": <Mountain className="h-6 w-6" />,
  "eat-like-a-local": <Utensils className="h-6 w-6" />,
  "photo-walk": <Camera className="h-6 w-6" />,
  "sunset-by-the-lake": <Sunset className="h-6 w-6" />,
};

const reasons = [
  { icon: Heart, title: "Friendly local" },
  { icon: Clock, title: "Flexible plans" },
  { icon: Languages, title: "English speaking" },
  { icon: Compass, title: "Honest recommendations" },
  { icon: Camera, title: "Photography assistance" },
  { icon: Sparkles, title: "Hidden gems" },
  { icon: Coffee, title: "Relaxed pace" },
  { icon: Users, title: "Solo traveler focused" },
  { icon: Mountain, title: "No rushed itineraries" },
  { icon: Globe2, title: "Authentic experiences" },
];

const testimonials = [
  {
    name: "Sofia M.",
    country: "Spain",
    quote:
      "Prabesh felt like a friend I'd known for years by the second cup of coffee. Pokhara through his eyes is magical.",
    initials: "SM",
  },
  {
    name: "Daniel K.",
    country: "Germany",
    quote:
      "Skip the tours. This is the way to see Pokhara. Real food, real people, and the best sunset of my life.",
    initials: "DK",
  },
  {
    name: "Aiko T.",
    country: "Japan",
    quote:
      "Traveling solo can be lonely. One afternoon with Prabesh and I felt completely welcomed in Nepal.",
    initials: "AT",
  },
];

const galleryImages = [
  { src: gNature, alt: "Pokhara valley mountains", span: "row-span-2" },
  { src: gCafe, alt: "Local Pokhara café", span: "" },
  { src: gFood, alt: "Authentic Nepali food", span: "" },
  { src: gSunset, alt: "Sunset at Phewa Lake", span: "row-span-2" },
  { src: gLakeside, alt: "Lakeside Pokhara at dusk", span: "" },
  { src: gCulture, alt: "Prayer flags in Pokhara", span: "" },
  { src: gPeople, alt: "Traveler in Pokhara", span: "" },
  { src: gPhoto, alt: "Photographing Pokhara", span: "" },
];

const faqs = [
  { q: "How do I book?", a: "Send me a message through the contact form or WhatsApp. I'll reply within a few hours." },
  { q: "Can I customize the experience?", a: "Absolutely. Every experience is shaped around what you want — slower, longer, different food, different viewpoint. It's your trip." },
  { q: "Do you help first-time visitors?", a: "Yes — most of my friends here are first-timers. SIM cards, money, transport, what to skip — I've got you." },
  { q: "Can you recommend local restaurants?", a: "Of course. I'll send you a personal list whether or not we meet." },
  { q: "Can you take photos during our walk?", a: "Yes, and I love doing it. You'll get edited photos sent to you afterward." },
  { q: "Can I join if I'm not trekking?", a: "Definitely. Most of what we do happens in and around Pokhara — no trek required." },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell me your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  message: z.string().trim().min(5, "Just a few words is fine").max(1000),
});

const Home = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Hmm, something's off", description: parsed.error.issues[0].message });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent ✨", description: "Talk soon — I'll reply within a few hours." });
      setForm({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <Layout transparentNav>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Phewa Lake and Annapurna mountains at sunset, Pokhara, Nepal"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/80" />

        <div className="relative z-10 h-full container flex flex-col items-center justify-center text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-white/80 mb-6"
          >
            Namaste · Pokhara, Nepal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-medium leading-[0.95] max-w-5xl"
          >
            Your Pokhara <em className="text-accent not-italic">Friend</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed"
          >
            Helping solo travelers discover Pokhara like a local, not a tourist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-7 h-12 text-base">
              <Link to="/about">
                Meet Your Friend <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-md">
              <Link to="/experiences">Explore Experiences</Link>
            </Button>
          </motion.div>
        </div>

        <motion.a
          href="#solo"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white"
        >
          <ChevronDown className="h-7 w-7 animate-float" />
        </motion.a>
      </section>

      {/* TRAVELING SOLO */}
      <section id="solo" className="py-24 md:py-32 bg-background">
        <div className="container grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated"
          >
            <img
              src={gLakeside}
              alt="Quiet lakeside path in Pokhara"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
              <p className="text-xs uppercase tracking-widest text-white/70">A friend in Pokhara</p>
              <p className="font-display text-xl mt-1">Born here. Still in love with it.</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Traveling Solo?"
              center={false}
              title={<>Traveling solo doesn't mean <em className="text-accent not-italic">traveling alone</em>.</>}
            />
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Landing in a new country can be exciting — but it can also feel overwhelming.</p>
              <ul className="space-y-2 text-base">
                <li>· Where should you eat?</li>
                <li>· Which cafés are worth visiting?</li>
                <li>· Where are the hidden viewpoints?</li>
                <li>· How do you avoid tourist traps?</li>
              </ul>
              <p className="text-foreground">That's where I come in.</p>
              <p>
                I'm <strong className="text-foreground">Prabesh</strong>, born and raised in Pokhara, and I'd love to show you my
                city the way I would show a visiting friend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="container">
          <SectionHeading
            eyebrow="Experiences"
            title={<>Not tours. <em className="text-accent not-italic">Experiences.</em></>}
            subtitle="Small, slow, personal. Choose one — or string a few together."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-smooth hover:-translate-y-1 border border-border/50"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  {experienceIcons[exp.slug]}
                </div>
                <h3 className="font-display text-2xl font-medium mb-3">
                  <span className="mr-2">{exp.emoji}</span>{exp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{exp.short}</p>
                <Link
                  to="/experiences"
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-smooth"
                >
                  Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose"
            title={<>Why travel with <em className="text-accent not-italic">Your Pokhara Friend</em></>}
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth border border-border/50"
              >
                <div className="mx-auto h-12 w-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <r.icon className="h-5 w-5" />
                </div>
                <p className="font-medium text-sm">{r.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET YOUR FRIEND */}
      <section className="py-24 md:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%)` }} />
        <div className="container grid lg:grid-cols-2 gap-14 items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-[2rem] overflow-hidden shadow-elevated max-w-md mx-auto lg:mx-0"
          >
            <img src={portrait} alt="Portrait of Prabesh, your Pokhara friend" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Meet Your Friend</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              Hi, I'm <em className="text-accent not-italic">Prabesh.</em>
            </h2>
            <div className="mt-8 space-y-5 text-lg text-primary-foreground/80 leading-relaxed">
              <p>I grew up in Pokhara and have always loved meeting people from around the world.</p>
              <p>
                I created Your Pokhara Friend because I believe every solo traveler deserves someone local they can trust.
              </p>
              <p>
                Whether we spend an hour over coffee or a full day exploring together, my goal is simple:
                to make you feel like you're <em className="text-accent not-italic">visiting a friend</em> rather than hiring a guide.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-3 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-smooth">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-smooth">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-3 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-smooth">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="mailto:hello@yourpokharafriend.com" aria-label="Email" className="p-3 rounded-full border border-white/20 hover:bg-accent hover:border-accent transition-smooth">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Moments"
            title={<>A small <em className="text-accent not-italic">gallery</em> of Pokhara</>}
            subtitle="Nature, food, sunsets, lakeside, culture, cafés, people, photography."
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className={`relative overflow-hidden rounded-2xl group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full h-12 px-7">
              <Link to="/gallery">View full gallery <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="container">
          <SectionHeading
            eyebrow="Kind Words"
            title={<>From friends who <em className="text-accent not-italic">visited.</em></>}
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border/50"
              >
                <div className="flex gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-display font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Good to Know"
            title={<>Frequently asked <em className="text-accent not-italic">questions</em></>}
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

      {/* CONTACT */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="container grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading
              eyebrow="Ask Your Pokhara Friend"
              center={false}
              title={<>Have a <em className="text-accent not-italic">question?</em></>}
            />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you're planning your first trip to Nepal or you're already in Pokhara, feel free to ask anything.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> Pokhara, Nepal</p>
              <p className="flex items-center gap-3 text-muted-foreground"><Mail className="h-4 w-4 text-accent" /> hello@yourpokharafriend.com</p>
              <p className="flex items-center gap-3 text-muted-foreground"><Clock className="h-4 w-4 text-accent" /> Replies within a few hours</p>
            </div>
            <Button asChild className="mt-8 rounded-full bg-secondary hover:bg-secondary/90 h-12 px-6">
              <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border/50 space-y-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={80}
                className="rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                maxLength={160}
                className="rounded-xl h-12"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your trip..."
                rows={5}
                maxLength={1000}
                className="rounded-xl"
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base">
              {loading ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
