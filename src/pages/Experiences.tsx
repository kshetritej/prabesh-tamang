import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Mountain, MapPin, Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { experiences, Experience } from "@/data/experiences";
import { cn } from "@/lib/utils";

const filters: ("All" | Experience["tags"][number])[] = ["All", "Food", "Nature", "Photography", "Walking", "Sunset", "Culture"];

const Experiences = () => {
  const [active, setActive] = useState<typeof filters[number]>("All");

  const list = useMemo(
    () => (active === "All" ? experiences : experiences.filter((e) => e.tags.includes(active as any))),
    [active]
  );

  return (
    <Layout>
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Experiences"
            title={<>Slow, personal, <em className="text-accent not-italic">unforgettable.</em></>}
            subtitle="Choose what feels right. Mix them. Or just message me and we'll design something together."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-5 h-10 rounded-full text-sm font-medium border transition-smooth",
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:border-primary"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {list.map((exp, i) => (
              <motion.article
                key={exp.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-smooth border border-border/50"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-3xl">{exp.emoji}</span>
                    <h3 className="font-display text-2xl mt-3 font-medium">{exp.title}</h3>
                  </div>
                  <span className="text-accent font-semibold">{exp.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-accent" />{exp.duration}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Mountain className="h-4 w-4 text-accent" />{exp.difficulty}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-accent" />{exp.meeting}</div>
                </div>

                <ul className="mt-6 space-y-1.5 text-sm">
                  {exp.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-foreground/80">
                      <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {inc}
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-7 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">Book now <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experiences;
