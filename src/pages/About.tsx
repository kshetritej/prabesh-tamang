import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import portrait from "@/assets/prabesh-portrait.jpg";
import gNature from "@/assets/g-nature.jpg";
import gCulture from "@/assets/g-culture.jpg";
import gLakeside from "@/assets/g-lakeside.jpg";
import { Languages, Heart, MapPin } from "lucide-react";

const timeline = [
  { year: "1996", title: "Born in Pokhara", body: "Grew up between Phewa Lake and the Annapurna foothills." },
  { year: "2012", title: "First international friend", body: "Met a backpacker who got lost near my school. We're still in touch." },
  { year: "2018", title: "Started guiding informally", body: "Friends-of-friends started visiting. I'd show them around — for free, for fun." },
  { year: "2024", title: "Your Pokhara Friend", body: "Made it official. Same warmth, same coffee, just a name now." },
];

const About = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">About</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.02]">
            A friend, <em className="text-accent not-italic">first.</em><br />A guide, second.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I'm Prabesh — born and raised in Pokhara. My favorite thing in the world is sharing my city
            with people who are curious, kind, and a little nervous about being so far from home.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated"
        >
          <img src={portrait} alt="Prabesh portrait" className="h-full w-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-beige/40">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="My Story" title={<>The short <em className="text-accent not-italic">version.</em></>} />
        <div className="mt-14 space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-[80px_1fr] gap-6 items-start border-l-2 border-accent/30 pl-6 relative"
            >
              <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent" />
              <div className="font-display text-xl text-accent font-medium">{t.year}</div>
              <div>
                <h3 className="font-display text-2xl mb-2">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
          <Heart className="h-8 w-8 text-accent mb-4" />
          <h3 className="font-display text-2xl mb-3">Fun facts</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>· Drinks more chiya than water</li>
            <li>· Has paddled Phewa Lake 1,000+ times</li>
            <li>· Loves hosting first-timers most</li>
            <li>· Can spot Machhapuchhre through mist</li>
          </ul>
        </div>
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
          <Languages className="h-8 w-8 text-accent mb-4" />
          <h3 className="font-display text-2xl mb-3">Languages</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>· Nepali (native)</li>
            <li>· English (fluent)</li>
            <li>· Hindi (conversational)</li>
            <li>· A little Japanese & Spanish</li>
          </ul>
        </div>
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
          <MapPin className="h-8 w-8 text-accent mb-4" />
          <h3 className="font-display text-2xl mb-3">Favorite spots</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>· Pumdikot at sunrise</li>
            <li>· Old Bazaar tea shops</li>
            <li>· The quiet end of Phewa Lake</li>
            <li>· Begnas in the early morning</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Philosophy</p>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          "Travel slower. Talk to people. Eat where the locals eat. And never be too proud to get a little lost."
        </h2>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid grid-cols-2 md:grid-cols-3 gap-3">
        {[gNature, gCulture, gLakeside].map((src, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
